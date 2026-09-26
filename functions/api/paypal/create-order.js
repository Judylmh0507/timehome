export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const body = await request.json();
    const cart = body.cart;
    const shipping = body.shipping || 'exw';

    const MULTIPLIERS = { exw: 1, fca: 1.15, fob: 1.25 };
    const multiplier = MULTIPLIERS[shipping] || 1;

    const PRODUCTS = [
      { id: 'test-1', name: 'Test Product', price: 1 },
      { id: 'i74-915', name: 'Napa Rec.Sofa Table', price: 159 },
      { id: 'i74-910', name: 'Napa Cocktail Table', price: 179 },
      { id: 'i77-364wd', name: '64" Writing Desk', price: 179 },
      { id: 'i77-455', name: 'Chesser', price: 199 },
      { id: 'i77-456', name: "Gentleman's Chest w/storage", price: 199 },
      { id: 'i77-485', name: 'Entertainment Chest', price: 199 },
      { id: 'i77-6030', name: 'Trestle Table Base&Top', price: 299 }
    ];

    // 临时改成 1 件起批（测试完改回 5）
    const MIN_QTY = 1;
    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    if (totalQty < MIN_QTY) {
      return Response.json({ error: 'Minimum ' + MIN_QTY + ' items required' }, { status: 400 });
    }

    for (const item of cart) {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return Response.json({ error: 'Product not found: ' + item.id }, { status: 400 });
      if (item.qty < 1) return Response.json({ error: 'Min 1 per item' }, { status: 400 });

      const stockStr = await env.TIMEHOME_STOCK.get(item.id);
      const stock = stockStr ? parseInt(stockStr, 10) : 0;
      if (item.qty > stock) {
        return Response.json({ error: p.name + ' only has ' + stock + ' in stock' }, { status: 400 });
      }
    }

    const baseTotal = cart.reduce((sum, item) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      return sum + (p.price * item.qty);
    }, 0);

    const totalUSD = Math.round(baseTotal * multiplier * 100) / 100;

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
          description: 'TIMEHOME Clearance Order (' + shipping.toUpperCase() + ')',
          custom_id: JSON.stringify({ cart: cart, shipping: shipping })
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
