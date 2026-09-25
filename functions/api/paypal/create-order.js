export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const cart = body.cart; // [{id, qty}, ...]

    // 从 products.js 里读产品数据（内嵌一份，避免依赖前端）
    const PRODUCTS = [
      { id: 'i74-915', name: 'Napa Rec.Sofa Table', price: 159, stock: 16 },
      { id: 'i74-910', name: 'Napa Cocktail Table', price: 179, stock: 3 },
      { id: 'i77-364wd', name: '64" Writing Desk', price: 179, stock: 17 },
      { id: 'i77-455', name: 'Chesser', price: 199, stock: 4 },
      { id: 'i77-456', name: "Gentleman's Chest w/storage", price: 199, stock: 6 },
      { id: 'i77-485', name: 'Entertainment Chest', price: 199, stock: 6 },
      { id: 'i77-6030', name: 'Trestle Table Base&Top', price: 299, stock: 5 }
    ];

    // 1. 校验：总件数 ≥ 5
    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    if (totalQty < 5) {
      return new Response(JSON.stringify({ error: 'Minimum 5 items required' }), {
        status: 400, headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. 校验：每款数量 ≤ stock
    for (const item of cart) {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) {
        return new Response(JSON.stringify({ error: 'Product not found: ' + item.id }), {
          status: 400, headers: { 'Content-Type': 'application/json' }
        });
      }
      if (item.qty < 1) {
        return new Response(JSON.stringify({ error: 'Min 1 per item' }), {
          status: 400, headers: { 'Content-Type': 'application/json' }
        });
      }
      if (item.qty > p.stock) {
        return new Response(JSON.stringify({ error: p.name + ' only has ' + p.stock + ' in stock' }), {
          status: 400, headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // 3. 计算总金额
    const totalUSD = cart.reduce((sum, item) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      return sum + (p.price * item.qty);
    }, 0);

    // 4. 调用 PayPal API 创建订单
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
          amount: {
            currency_code: 'USD',
            value: totalUSD.toFixed(2)
          },
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
      return new Response(JSON.stringify({ error: 'PayPal error', details: paypalData }), {
        status: 500, headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ orderID: paypalData.id }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' }
    });
  }
}
