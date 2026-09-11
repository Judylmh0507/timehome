// 唯一产品数据源，由 产品信息采集表1.xlsx 自动生成。价格/库存均以采集表为准。
var PRODUCTS = [
  {
    cat:"living", id:"I74-915", series:"I-Series", featured:true,
    name:"Napa Rec.Sofa Table", nameZh:"", cover:"I74-915-1.jpg",
    size:"W137xD46xH78 cm", specs:{dimensions:"W137xD46xH78 cm"},
    weight:"75 kg", packagingVolume:"0.29CBM",
    material:"Solid wood frame, camphor veneer & other man‑made wood accessories", materialZh:"Solid wood frame, camphor veneer & other man‑made wood accessories",
    stock:16, price:159, originalPrice:959,
    images:["I74-915-1.jpg", "I74-915-2.jpg", "I74-915-3.jpg", "I74-915-4.jpg", "I74-915-5.jpg", "I74-915-6.jpg", "I74-915-7.jpg", "I74-915-8.jpg", "I74-915-9.jpg"], video:"I74-915.mp4",
    notes:"Overstock clearance. Shipped as‑is in original export boxes.\nDiscount covers box wear, dust and possible unknown product faults.", notesZh:"Overstock clearance. Shipped as‑is in original export boxes.\nDiscount covers box wear, dust and possible unknown product faults.",
    tiers:[] },
  {
    cat:"living", id:"I74-910", series:"I-Series", featured:true,
    name:"Napa Cocktail Table", nameZh:"", cover:"I74-910-1.jpg",
    size:"W127\u00d7D82\u00d7H51 cm", specs:{dimensions:"W127\u00d7D82\u00d7H51 cm"},
    weight:"63 kg", packagingVolume:"0.46CBM",
    material:"Solid wood frame, camphor veneer & other man‑made wood accessories", materialZh:"Solid wood frame, camphor veneer & other man‑made wood accessories",
    stock:3, price:179, originalPrice:1199,
    images:["I74-910-1.jpg", "I74-910-2.jpg", "I74-910-3.jpg", "I74-910-4.jpg", "I74-910-5.jpg", "I74-910-6.jpg", "I74-910-7.jpg", "I74-910-8.jpg", "I74-910-9.jpg"], video:"I74-910.mp4",
    notes:"Overstock clearance. Shipped as‑is in original export boxes.\nDiscount covers box wear, dust and possible unknown product faults.", notesZh:"Overstock clearance. Shipped as‑is in original export boxes.\nDiscount covers box wear, dust and possible unknown product faults.",
    tiers:[] },
  {
    cat:"study", id:"I77-364WD", series:"I-Series", featured:true,
    name:"64\" Writing Desk", nameZh:"", cover:"I77-364WD-1.jpg",
    size:"W163\u00d7D61\u00d7H78 cm", specs:{dimensions:"W163\u00d7D61\u00d7H78 cm"},
    weight:"57 kg", packagingVolume:"0.34CBM",
    material:"Solid wood frame, Dalbergia veneer & other engineered wood components", materialZh:"Solid wood frame, Dalbergia veneer & other engineered wood components",
    stock:17, price:179, originalPrice:1199,
    images:["I77-364WD-1.jpg", "I77-364WD-2.jpg", "I77-364WD-3.jpg", "I77-364WD-4.jpg", "I77-364WD-5.jpg", "I77-364WD-6.jpg"], video:"I77-364WD.mp4",
    notes:"Overstock clearance. Shipped as‑is in original export boxes.\nDiscount covers box wear, dust and possible unknown product faults.", notesZh:"Overstock clearance. Shipped as‑is in original export boxes.\nDiscount covers box wear, dust and possible unknown product faults.",
    tiers:[] },
  {
    cat:"bedroom", id:"I77-455", series:"I-Series", featured:true,
    name:"Chesser", nameZh:"", cover:"I77-455-1.jpg",
    size:"W155\u00d7D55\u00d7H128 cm", specs:{dimensions:"W155\u00d7D55\u00d7H128 cm"},
    weight:"130 kg", packagingVolume:"1.22CBM",
    material:"Solid wood frame, Dalbergia veneer & other engineered wood components", materialZh:"Solid wood frame, Dalbergia veneer & other engineered wood components",
    stock:4, price:199, originalPrice:1299,
    images:["I77-455-1.jpg", "I77-455-2.jpg", "I77-455-3.jpg", "I77-455-4.jpg", "I77-455-5.jpg", "I77-455-6.jpg", "I77-455-7.jpg", "I77-455-8.jpg"], video:"I77-455.mp4",
    notes:"Overstock clearance. Shipped as‑is in original export boxes.\nDiscount covers box wear, dust and possible unknown product faults.", notesZh:"Overstock clearance. Shipped as‑is in original export boxes.\nDiscount covers box wear, dust and possible unknown product faults.",
    tiers:[] },
  {
    cat:"bedroom", id:"I77-456", series:"I-Series", featured:true,
    name:"Gentleman's Chest w/storage", nameZh:"", cover:"I77-456-1.jpg",
    size:"W96\u00d7D54\u00d7H135 cm", specs:{dimensions:"W96\u00d7D54\u00d7H135 cm"},
    weight:"110 kg", packagingVolume:"1.1CBM",
    material:"Solid wood frame, Dalbergia veneer & other engineered wood components", materialZh:"Solid wood frame, Dalbergia veneer & other engineered wood components",
    stock:6, price:199, originalPrice:1299,
    images:["I77-456-1.jpg", "I77-456-2.jpg", "I77-456-3.jpg", "I77-456-4.jpg", "I77-456-5.jpg", "I77-456-6.jpg", "I77-456-7.jpg", "I77-456-8.jpg"], video:"I77-456.mp4",
    notes:"Overstock clearance. Shipped as‑is in original export boxes.\nDiscount covers box wear, dust and possible unknown product faults.", notesZh:"Overstock clearance. Shipped as‑is in original export boxes.\nDiscount covers box wear, dust and possible unknown product faults.",
    tiers:[] },
  {
    cat:"living", id:"I77-485", series:"I-Series", featured:true,
    name:"Entertainment Chest", nameZh:"", cover:"I77-485-1.jpg",
    size:"W120\u00d7D55\u00d7H97 cm", specs:{dimensions:"W120\u00d7D55\u00d7H97 cm"},
    weight:"86 kg", packagingVolume:"0.87CBM",
    material:"Solid wood frame, Dalbergia veneer & other engineered wood components", materialZh:"Solid wood frame, Dalbergia veneer & other engineered wood components",
    stock:6, price:199, originalPrice:1299,
    images:["I77-485-1.jpg", "I77-485-2.jpg", "I77-485-3.jpg", "I77-485-4.jpg", "I77-485-5.jpg", "I77-485-6.jpg", "I77-485-7.jpg", "I77-485-8.jpg", "I77-485-9.jpg"], video:"I77-485.mp4",
    notes:"Overstock clearance. Shipped as‑is in original export boxes.\nDiscount covers box wear, dust and possible unknown product faults.", notesZh:"Overstock clearance. Shipped as‑is in original export boxes.\nDiscount covers box wear, dust and possible unknown product faults.",
    tiers:[] },
  {
    cat:"dining", id:"I77-6030BT", series:"I-Series", featured:true,
    name:"Trestle Table Base&Top", nameZh:"", cover:"I77-6030BT-1.jpg",
    size:"W198\u00d7D112\u00d7H80 cm / W290\u00d7D112\u00d7H80 cm", specs:{dimensions:"W198\u00d7D112\u00d7H80 cm / W290\u00d7D112\u00d7H80 cm"},
    weight:"118 kg", packagingVolume:"0.89CBM",
    material:"Solid wood frame, Dalbergia veneer & other engineered wood components", materialZh:"Solid wood frame, Dalbergia veneer & other engineered wood components",
    stock:5, price:299, originalPrice:1799,
    images:["I77-6030BT-1.jpg", "I77-6030BT-2.jpg", "I77-6030BT-3.jpg", "I77-6030BT-4.jpg", "I77-6030BT-5.jpg", "I77-6030BT-6.jpg", "I77-6030BT-7.jpg", "I77-6030BT-8.jpg", "I77-6030BT-9.jpg"], video:"I77-6030BT.mp4",
    notes:"Overstock clearance. Shipped as‑is in original export boxes.\nDiscount covers box wear, dust and possible unknown product faults.", notesZh:"Overstock clearance. Shipped as‑is in original export boxes.\nDiscount covers box wear, dust and possible unknown product faults.",
    tiers:[] },
];

function LANG(){ var m = location.pathname.split('/'); return (m[1]==='zh'||m[2]==='zh')?'zh':'en'; }
function t(p){ return LANG()==='zh' ? (p.nameZh||p.name) : p.name; }
function tm(p){ return LANG()==='zh' ? (p.materialZh||p.material) : p.material; }
function tn(p){ return LANG()==='zh' ? (p.notesZh||p.notes||'') : (p.notes||''); }
function byId(id){ return PRODUCTS.find(function(p){ return p.id===id; }); }
function pref(){ return LANG()==='zh' ? '../zh' : '..'; }
function getParam(k){ var s = (location.search || '').replace(/^\?/,''); if(!s){ var h=(location.href||'').split('?')[1]; s=h||''; } var parts = s? s.split('&'):[]; for(var i=0;i<parts.length;i++){ var kv=parts[i].split('='); if(kv[0]===k) return decodeURIComponent(kv[1]||''); } return ''; }
function htmlEscape(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

function renderFeatured(sel){
  var root = document.querySelector(sel); if(!root) return;
  var items = PRODUCTS.filter(function(p){ return p.featured; }).slice(0,6);
  root.innerHTML = items.map(function(p){
    var save = Math.round((1 - p.price/p.originalPrice)*100);
    return `<a href="${pref()}/product.html?id=${p.id}" class="card">
  <img src="../img/${p.cover}" alt="${htmlEscape(t(p))}">
  <div class="body">
    <h4>${htmlEscape(t(p))}</h4>
    <p class="specs-line">${htmlEscape(p.specs&&p.specs.dimensions||p.size||'')}</p>
    <p class="price"><span class="orig">$${p.originalPrice}</span> <span class="now">$${p.price}</span> <span class="badge">Save ${save}%</span></p>
  </div>
</a>`;
  }).join('');
}

function renderCategory(sel){
  var root = document.querySelector(sel); if(!root) return;
  var cat = getParam('cat') || 'living';
  var items = PRODUCTS.filter(function(p){ return p.cat===cat; });
  if(!items.length) items = PRODUCTS;
  root.innerHTML = '<div class="products">' + items.map(function(p){
    return `<a href="${pref()}/product.html?id=${p.id}" class="card">
  <img src="../img/${p.cover}" alt="${htmlEscape(t(p))}">
  <div class="body">
    <h4>${htmlEscape(t(p))}</h4>
    <p class="price"><span class="now">$${p.price}</span><span class="orig">$${p.originalPrice}</span></p>
  </div>
</a>`;
  }).join('') + '</div>';
}

function renderProduct(sel){
  var root = document.querySelector(sel); if(!root) return;
  var id = getParam('id');
  var p = byId(id);
  if(!p){
    root.innerHTML = '<p class="condition-note">Product not found. / 未找到该产品，请检查链接中的 id。</p>';
    return;
  }
  var note = tn(p)
    ? '<div class="condition-note"><b>' + (LANG()==='zh'?'瑕疵说明：':'Condition note: ') + '</b>' + htmlEscape(tn(p)) + '</div>'
    : '';
  root.innerHTML = `<div class="product-detail" style="display:grid;grid-template-columns:1fr 1fr;gap:32px;padding:20px 0;">
  <div>
    <img id="mainImg" src="../img/${p.cover}" style="width:100%;height:auto;border-radius:8px;border:1px solid #ece5d8;">
    <div class="thumbs" style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
      ${(p.images||[p.cover]).map(function(img,i){
        return `<img class="thumb-img${i===0?' active':''}" src="../img/${img}" onclick="swapMain('${img}')">`;
      }).join('')}
    </div>
    ${p.video ? `<video src="../img/${p.video}" controls preload="none" style="width:100%;margin-top:12px;"></video>` : ''}
  </div>
  <div>
    <h1 style="font-size:26px;margin-bottom:8px;">${htmlEscape(t(p))}</h1>
    <p style="color:#888;">${htmlEscape(p.cat)} · ${htmlEscape(p.series)} · SKU ${htmlEscape(p.id)}</p>
    <p class="price" style="font-size:24px;margin:12px 0;"><span class="orig">$${p.originalPrice}</span> <span class="now">$${p.price}</span></p>
    <ul class="specs">
      <li>Size / 尺寸：${htmlEscape(p.size)}</li>
      <li>Material / 材质：${htmlEscape(tm(p))}</li>
      <li>Weight / 单件重量：${htmlEscape(p.weight)}</li>
      <li>Packaging Volume / 包装体积：${htmlEscape(p.packagingVolume)}</li>
      <li>Stock / 库存：${p.stock} pcs</li>
    </ul>
    ${note}
    <a class="btn" style="display:inline-block;margin-top:16px;" href="mailto:sales@timehome.top?subject=${encodeURIComponent('Inquiry / 询盘 ')}${p.id}">Inquire Now / 立即询盘</a>
  </div>
</div>`;
  window.swapMain = function(src){ var m=document.getElementById('mainImg'); if(m) m.src='../img/'+src; };
  var all=root.querySelectorAll('.thumb-img');
  all.forEach(function(el){ el.addEventListener('click',function(){ all.forEach(function(x){x.classList.remove('active');}); el.classList.add('active'); }); });
}
if (typeof window !== 'undefined') { window.PRODUCTS = PRODUCTS; } else { globalThis.PRODUCTS = PRODUCTS; }
