export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const body = await request.json();
    const orderID = body.orderID;

    if (!orderID) {
      return Response.json({ error: 'Missing orderID' }, { status: 400 });
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
      return Response.json({ error: 'Capture failed', details: paypalData }, { status: 500 });
    }

    return Response.json({
      success: true,
      status: paypalData.status,
      orderID: paypalData.id
    });

  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
