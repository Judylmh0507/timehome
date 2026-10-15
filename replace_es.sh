#!/bin/zsh
perl -0777 -i '' "s/We welcome wholesalers, importers, and furniture 
retailers\. Mixed-container shipments are available\./Damos la bienvenida 
a mayoristas, importadores y minoristas de muebles. Disponemos de envíos 
con contenedores mixtos./g" es/wholesale.html
perl -0777 -i '' "s/Terms & Conditions/Términos y condiciones/g" 
es/wholesale.html
perl -0777 -i '' "s/Goods are mixed solid‑wood clearance stock\. Original 
export outer packaging is aged and dusty; inner packaging and products 
remain intact\. Structural defect rate is below 5%\./La mercancía es stock 
mixto de muebles de madera maciza en liquidación. El embalaje exterior 
original de exportación está envejecido y polvoriento; el embalaje 
interior y los productos permanecen intactos. La tasa de defectos 
estructurales es inferior al 5%./g" es/wholesale.html
perl -0777 -i '' "s/Goods are sold on an \"as‑is, where‑is\" basis\. 
Cosmetic issues including scratches, fading and worn packaging are not 
regarded as quality defects\. No warranty, returns or claims for cosmetic 
defects\./La mercancía se vende bajo la cláusula \"tal cual, donde está\". 
Los defectos estéticos como rasguños, decoloración y embalaje desgastado 
no se consideran fallos de calidad. No hay garantía, devoluciones ni 
reclamaciones por defectos estéticos./g" es/wholesale.html
perl -0777 -i '' "s/Buyer must inspect goods on‑site before loading\. No 
cosmetic‑related complaints accepted once the container leaves the 
warehouse\. Only structural damage exceeding 5% may be subject to mutual 
negotiation\./El comprador debe inspeccionar la mercancía en el depósito 
antes de la carga. No se aceptan reclamaciones por motivos estéticos una 
vez el contenedor salga del depósito. Solo los daños estructurales 
superiores al 5% podrán negociarse mutuamente./g" es/wholesale.html
perl -0777 -i '' "s/Stock information is for reference only\. Inventory 
will not be reserved until deposit is received\. If certain SKUs become 
unavailable, replacement of equal‑value items or corresponding deduction 
may be negotiated\./La información de stock es solo de referencia. No se 
reserva inventario hasta recibir el depósito. Si algunos SKU dejan de 
estar disponibles, se puede negociar la sustitución por artículos de igual 
valor o el descuento correspondiente./g" es/wholesale.html
perl -0777 -i '' "s/Risk of loss or damage transfers to the buyer upon 
completion of FCA\/EXW handover\. All costs including ocean freight, 
insurance, destination‑port customs clearance and import duties shall be 
borne by the buyer\. Deposit is non‑refundable if the buyer unilaterally 
cancels the order\. Full deposit refunded if we fail to supply ordered 
goods\./El riesgo de pérdida o daño pasa al comprador una vez finalizada 
la entrega FCA\/EXW. Todos los costos, incluidos flete marítimo, seguro, 
despacho aduanero en puerto destino e impuestos de importación, corren por 
cuenta del comprador. El depósito no es reembolsable si el comprador 
cancela unilateralmente el pedido. Se reembolsa el depósito completo si 
nosotros no podemos suministrar la mercancía pedida./g" es/wholesale.html
perl -0777 -i '' "s/How It Works/Cómo funciona/g" es/wholesale.html
perl -0777 -i '' "s/Estimate Ocean Freight/Calcular flete marítimo/g" 
es/wholesale.html
perl -0777 -i '' "s/Freight is not included\. Click below to compare 
shipping options from China to your destination port\./El flete no está 
incluido. Haga clic abajo para comparar opciones de envío desde China 
hasta su puerto de destino./g" es/wholesale.html
perl -0777 -i '' "s/Open Freight Calculator/Abrir calculadora de fletes/g" 
es/wholesale.html

perl -0777 -i '' "s/We are Guangzhou Panyu Time Home Furniture Firm 
\(Individual Business\), a furniture dealer specializing in bonded 
warehouse clearance stock\./Somos Guangzhou Panyu Time Home Furniture Firm 
(Empresa Individual), un comerciante de muebles especializado en stock de 
liquidación guardado en depósitos aduaneros./g" es/about.html
perl -0777 -i '' "s/Our inventory consists of original export pieces from 
2009–2012, stored long‑term in Guangzhou bonded warehouses\. These are 
genuine solid wood frame \+ veneer items — not 100% solid wood, not 
factory‑direct OEM\./Nuestro inventario está formado por piezas originales 
de exportación de 2009 a 2012, almacenadas a largo plazo en depósitos 
aduaneros de Guangzhou. Son artículos con estructura de madera maciza y 
chapa auténtica — no son 100% madera maciza, no son fabricación directa de 
fábrica OEM./g" es/about.html
perl -0777 -i '' "s/Items may show signs of age \(carton wear, minor dust, 
potential scuffs\)\. We disclose all known conditions honestly\. Photos 
are of actual items\./Los artículos pueden mostrar signos de antigüedad 
(desgaste de cajas, polvo leve, posibles rasguños). Divulgamos 
honestamente todas las condiciones conocidas. Las fotografías corresponden 
a los artículos reales./g" es/about.html
perl -0777 -i '' "s/Business Information/Información comercial/g" 
es/about.html

perl -0777 -i '' "s/American‑Style Vintage Furniture Clearance — Before 
You Order/Muebles vintage de estilo americano liquidación — Antes de 
realizar su pedido/g" es/cart.html
perl -0777 -i '' "s/Please review these 7 points before checkout:/Revise 
estos 7 puntos antes de finalizar la compra:/g" es/cart.html
perl -0777 -i '' "s/OEM overstock, not new\. Made around 2009–2012, sealed 
in a bonded warehouse for 10\+ years\. Boxes may be dusty or damaged; 
furniture may have moisture spots or minor marks\. Cosmetic only — no 
impact on structure or use\. Buyer handles cleaning\./Excedentes de 
producción OEM, no son nuevos. Fabricados aproximadamente entre 2009 y 
2012, guardados en depósito aduanero durante más de 10 años. Las cajas 
pueden estar polvorientas o dañadas; los muebles pueden presentar manchas 
de humedad o marcas leves. Son solo defectos estéticos, no afectan la 
estructura ni el uso. El comprador se encarga de la limpieza./g" 
es/cart.html
perl -0777 -i '' "s/5‑unit minimum\. EXW Foshan Shunde\. Freight, customs, 
and other fees not included\. Ships or ready for pickup within 48 hours 
after payment\./Pedido mínimo de 5 unidades. Condición EXW Foshan Shunde. 
Gastos de flete, aduanas y otros costos no incluidos. Envío o recogida 
disponible en 48 horas tras el pago./g" es/cart.html
perl -0777 -i '' "s/Loaded = delivered\. Buyer arranges pickup and 
loading\. Any damage or loss after loading is on the buyer\. Cargo 
insurance recommended\./Cargado = entregado. El comprador organiza la 
recogida y carga. Cualquier daño o pérdida después de la carga corre a 
cargo del comprador. Recomendamos contratar seguro de mercancía./g" 
es/cart.html
perl -0777 -i '' "s/Video inspection or agent warehouse inspection 
available before shipment\. We can provide a walkaround video of your 
order before loading, or you may send an agent to inspect at our Shunde 
warehouse\. Please request this before payment if needed\./Inspección por 
video o por agente en el depósito antes del envío. Podemos grabar un 
recorrido de su pedido antes de cargar, o puede enviar un agente para 
inspeccionar en nuestro depósito de Shunde. Solicítelo antes del pago si 
lo necesita./g" es/cart.html
perl -0777 -i '' "s/Full payment before shipment\. No returns for 
non‑structural issues\. Structural issues must be reported in writing 
within 7 days of receipt\. \"Receipt\" means the date the goods arrive at 
the buyer's designated destination and are signed for\. After that, goods 
are considered accepted\./Pago total antes del envío. No se aceptan 
devoluciones por defectos no estructurales. Los daños estructurales deben 
notificarse por escrito en un plazo de 7 días tras la recepción. 
\"Recepción\" es la fecha en que la mercancía llega al destino indicado 
por el comprador y se firma. Después, se considera aceptada la 
mercancía./g" es/cart.html
perl -0777 -i '' "s/Declare as \"used \/ unbranded furniture\."\. No brand 
authorization included\. Please don't use the original brand name for 
marketing or ads\./Declarar como \"mueble usado \/ sin marca\". No se 
incluye autorización de marca. No utilice el nombre original de la marca 
para publicidad ni ventas./g" es/cart.html
perl -0777 -i '' "s/Pick a reliable logistics partner for bulky 
cross‑border goods\. Wood fumigation \/ IPPC marking is the buyer's 
responsibility\. Customs delays or returns from missing documents are on 
the buyer\./Elija un socio logístico confiable para mercancías voluminosas 
transfronterizas. La fumigación de madera \/ marcado IPPC es 
responsabilidad del comprador. Retrasos aduaneros o devoluciones por 
documentación incompleta corren a cargo del comprador./g" es/cart.html
perl -0777 -i '' "s/This is clearance stock — prices already reflect the 
cosmetic imperfections\. Placing an order means you accept these 
terms\./Esto es stock de liquidación — los precios ya reflejan los 
defectos estéticos. Al realizar el pedido, acepta estos términos./g" 
es/cart.html

