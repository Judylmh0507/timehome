function imgPath(file) {
  if (!file) return '';
  var isSub = location.pathname.indexOf('/en/') !== -1
           || location.pathname.indexOf('/zh/') !== -1;
  return (isSub ? '../img/' : 'img/') + file.toLowerCase();
}

function detailUrl(id) {
  var isZh = location.pathname.indexOf('/zh/') !== -1;
  var isEn = location.pathname.indexOf('/en/') !== -1;
  var prefix = isZh ? 'product.html' : (isEn ? 'product.html' : 'en/product.html');
  return prefix + '?id=' + id;
}

function renderProducts(containerId, cat, onlyFeatured, limit) {
  var container = document.getElementById(containerId);
  if (!container) {
    console.warn('[render] container not found:', containerId);
    return;
  }

  var list = window.PRODUCTS.filter(function (x) {
    if (cat && x.cat !== cat) return false;
    if (onlyFeatured && !x.featured) return false;
    return true;
  });

  if (limit && limit > 0) {
    list = list.slice(0, limit);
  }

  if (!list.length) {
    container.innerHTML = '<p style="padding:40px;text-align:center;">No products found.</p>';
    return;
  }

  var html = '<div class="product-grid">';
  list.forEach(function (p) {
    var saveBadge = '';
    if (p.originalPrice && p.originalPrice > p.price) {
      var pct = Math.round((1 - p.price / p.originalPrice) * 100);
      saveBadge = '<span class="badge-save">Save ' + pct + '%</span>';
    }
    html += ''
      + '<a class="product-card" href="' + detailUrl(p.id) + '">'
      +   '<div class="img-wrap">'
      +     '<img src="' + imgPath(p.images[0]) + '" alt="' + p.name + '" loading="lazy">'
      +     saveBadge
      +   '</div>'
      +   '<h3>' + p.name + '</h3>'
      +   '<p class="sku">' + p.id.toUpperCase() + '</p>'
      +   '<div class="price">'
      +     '<b>$' + p.price + '</b>'
      +     (p.originalPrice ? '<s>$' + p.originalPrice + '</s>' : '')
      +   '</div>'
      +   '<div class="meta">' + p.dimensions + ' | Stock: ' + p.stock + '</div>'
      + '</a>';
  });
  html += '</div>';
  container.innerHTML = html;
}
