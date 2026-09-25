export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const body = await request.json();
    const cart = body.cart;

    const PRODUCTS = [
      { id: 'i74-915', name: 'Napa Rec.Sofa Table', price: 159, stock: 16 },
      { id: 'i74-910', name: 'Napa Cocktail Table', price: 179, stock: 3 },
      { id: 'i77-364wd', name: '64" Writing Desk', price: 179, stock: 17 },
      { id: 'i77-455', name: 'Chesser', price: 199, stock: 4 },
      { id: 'i77-456', name: "Gentleman's Chest w/storage", price: 199, stock: 6 },
      { id: 'i77-485', name: 'Entertainment Chest', price: 199, stock: 6 },
      { id: 'i77-6030', name: 'Trestle Table Base&Top', price: 299, stock: 5 }
    ];

    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    if (totalQty < 5) {
      return Response.json({ error: 'Minimum 5 items required' }, { status: 400 });
    }

    for (const item of cart) {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return Response.json({ error: 'Product not found: ' + item.id }, { status: 400 });
      if (item.qty < 1) return Response.json({ error: 'Min 1 per item' }, { status: 400 });
      if (item.qty > p.stock) {
        return Response.json({ error: p.name + ' only has ' + p.stock + ' in stock' }, { status: 400 });
      }
    }

    const totalUSD = cart.reduce((sum, item) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      return sum + (p.price * item.qty);
    }, 0);

    const auth = btoa(env.PAYPAL_CLIENT_ID + ':' + env.PAYPAL_SECRET);
    const baseURL = env.PAYPAL_MODE === 'live'
      ? 'https://api-m.paypal.com'
      : 'https://api-m.sandbox.paypal.com';

    const paypalRes = await fetch(baseURL + '/v2/checkout/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + auth
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: { currency_code: 'USD', value: totalUSD.toFixed(2) },
          description: 'TIMEHOME Clearance Order',
          custom_id: JSON.stringify(cart)
        }],
        application_context: {
          brand_name: 'TIMEHOME Clearance',
          shipping_preference: 'GET_FROM_FILE',
          user_action: 'PAY_NOW'
        }
      })
    });

    const paypalData = await paypalRes.json();

    if (!paypalRes.ok) {
      return Response.json({ error: 'PayPal error', details: paypalData }, { status: 500 });
    }

    return Response.json({ orderID: paypalData.id });

  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
