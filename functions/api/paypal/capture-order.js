export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const orderID = body.orderID;

    if (!orderID) {
      return new Response(JSON.stringify({ error: 'Missing orderID' }), {
        status: 400, headers: { 'Content-Type': 'application/json' }
      });
    }

    const auth = btoa(env.PAYPAL_CLIENT_ID + ':' + env.PAYPAL_SECRET);
    const baseURL = env.PAYPAL_MODE === 'live'
      ? 'https://api-m.paypal.com'
      : 'https://api-m.sandbox.paypal.com';

    const paypalRes = await fetch(baseURL + '/v2/checkout/orders/' + orderID + '/capture', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + auth
      }
    });

    const paypalData = await paypalRes.json();

    if (!paypalRes.ok) {
      return new Response(JSON.stringify({ error: 'Capture failed', details: paypalData }), {
        status: 500, headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      status: paypalData.status,
      orderID: paypalData.id
    }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' }
    });
  }
}
