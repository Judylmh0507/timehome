// ===== 购物车逻辑 =====
// 存 localStorage，key = 'timehome_cart'
// 结构：{ "i74-915": 2, "i77-455": 1 }

var CART_KEY = 'timehome_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, qty) {
  qty = qty || 1;
  var product = window.PRODUCTS.filter(function (p) { return p.id === id; })[0];
  if (!product) { alert('Product not found'); return; }

  var cart = getCart();
  var current = cart[id] || 0;
  var next = current + qty;

  if (next > product.stock) {
    alert('Only ' + product.stock + ' in stock. You already have ' + current + ' in cart.');
    return;
  }

  cart[id] = next;
  saveCart(cart);
  alert('Added to cart: ' + product.name);
}

function removeFromCart(id) {
  var cart = getCart();
  delete cart[id];
  saveCart(cart);
}

function setQty(id, qty) {
  var product = window.PRODUCTS.filter(function (p) { return p.id === id; })[0];
  if (!product) return;

  qty = parseInt(qty, 10);
  if (isNaN(qty) || qty < 1) { qty = 1; }
  if (qty > product.stock) { qty = product.stock; }

  var cart = getCart();
  cart[id] = qty;
  saveCart(cart);
}

function cartTotalQty() {
  var cart = getCart();
  var total = 0;
  for (var id in cart) { total += cart[id]; }
  return total;
}

function cartSubtotal() {
  var cart = getCart();
  var total = 0;
  for (var id in cart) {
    var p = window.PRODUCTS.filter(function (x) { return x.id === id; })[0];
    if (p) { total += p.price * cart[id]; }
  }
  return total;
}

function cartTotalVolume() {
  var cart = getCart();
  var total = 0;
  for (var id in cart) {
    var p = window.PRODUCTS.filter(function (x) { return x.id === id; })[0];
    if (p && p.packagingVolume) {
      var v = parseFloat(p.packagingVolume.replace(/[^\d.]/g, ''));
      if (!isNaN(v)) { total += v * cart[id]; }
    }
  }
  return total.toFixed(2);
}

function updateCartBadge() {
  var el = document.getElementById('cart-badge');
  if (el) {
    var n = cartTotalQty();
    el.textContent = n;
    el.style.display = n > 0 ? 'inline-block' : 'none';
  }
}

function renderCartPage() {
  var container = document.getElementById('cart-content');
  if (!container) return;

  var cart = getCart();
  var ids = Object.keys(cart);

  if (ids.length === 0) {
    container.innerHTML = '<p style="padding:40px 0;">Your cart is empty. <a href="en/index.html">Browse products →</a></p>';
    return;
  }

  var totalQty = cartTotalQty();
  var subtotal = cartSubtotal();
  var volume = cartTotalVolume();

  var html = '<table style="width:100%;border-collapse:collapse;margin-bottom:24px;">';
  html += '<thead><tr style="border-bottom:2px solid #eee;text-align:left;">'
        + '<th style="padding:12px 0;">Product</th>'
        + '<th style="padding:12px 0;">Price</th>'
        + '<th style="padding:12px 0;">Qty</th>'
        + '<th style="padding:12px 0;">Subtotal</th>'
        + '<th></th></tr></thead><tbody>';

  ids.forEach(function (id) {
    var p = window.PRODUCTS.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    var qty = cart[id];
    var lineTotal = p.price * qty;

    html += '<tr style="border-bottom:1px solid #f0f0f0;">'
          + '<td style="padding:12px 0;display:flex;align-items:center;gap:12px;">'
          +   '<img src="/img/' + p.images[0].toLowerCase() + '" style="width:60px;height:60px;object-fit:cover;border-radius:4px;">'
          +   '<div><div style="font-weight:600;">' + p.name + '</div>'
          +   '<div style="font-size:12px;color:#888;">' + p.id.toUpperCase() + ' | Stock: ' + p.stock + '</div></div>'
          + '</td>'
          + '<td style="padding:12px 0;">$' + p.price + '</td>'
          + '<td style="padding:12px 0;">'
          +   '<input type="number" min="1" max="' + p.stock + '" value="' + qty + '" '
          +   'onchange="setQty(\'' + id + '\', this.value); renderCartPage();" '
          +   'style="width:60px;padding:4px 8px;border:1px solid #ddd;border-radius:4px;">'
          + '</td>'
          + '<td style="padding:12px 0;font-weight:600;">$' + lineTotal + '</td>'
          + '<td style="padding:12px 0;text-align:right;">'
          +   '<a href="#" onclick="event.preventDefault(); removeFromCart(\'' + id + '\'); renderCartPage();" '
          +   'style="color:#d32f2f;font-size:13px;">Remove</a>'
          + '</td>'
          + '</tr>';
  });

  html += '</tbody></table>';

  html += '<div style="background:#faf8f5;padding:20px;border-radius:8px;margin-bottom:24px;">'
        +   '<div style="display:flex;justify-content:space-between;margin-bottom:8px;">'
        +     '<span>Total items:</span><b>' + totalQty + '</b></div>'
        +   '<div style="display:flex;justify-content:space-between;margin-bottom:8px;">'
        +     '<span>Total volume:</span><b>' + volume + ' CBM</b></div>'
        +   '<div style="display:flex;justify-content:space-between;font-size:20px;padding-top:12px;border-top:1px solid #ddd;">'
        +     '<span>Subtotal:</span><b style="color:#c9a96e;">$' + subtotal + '</b></div>'
        + '</div>';

  if (totalQty < 5) {
    html += '<div style="background:#fff8e1;border-left:4px solid #ffc107;padding:12px 16px;border-radius:4px;margin-bottom:16px;">'
          +   'Minimum order: <b>5 items</b> total. You have <b>' + totalQty + '</b>. '
          +   'Please add ' + (5 - totalQty) + ' more item(s).'
          + '</div>';
    html += '<button disabled style="background:#ccc;color:#fff;padding:14px 32px;border:none;border-radius:6px;font-size:16px;cursor:not-allowed;">Checkout (min 5 items)</button>';
  } else {
    html += '<button onclick="checkout()" style="background:#c9a96e;color:#fff;padding:14px 32px;border:none;border-radius:6px;font-size:16px;font-weight:600;cursor:pointer;">Proceed to Checkout →</button>';
  }

  container.innerHTML = html;
}

function checkout() {
  var totalQty = cartTotalQty();
  if (totalQty < 5) {
    alert('Minimum order is 5 items.');
    return;
  }
  alert('Checkout function is not connected to payment yet. Cart summary:\n\n' +
        'Items: ' + totalQty + '\n' +
        'Subtotal: $' + cartSubtotal() + '\n' +
        'Volume: ' + cartTotalVolume() + ' CBM');
}

document.addEventListener('DOMContentLoaded', function () {
  updateCartBadge();
});
