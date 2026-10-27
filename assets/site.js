// ---- À MODIFIER ICI : coordonnées affichées en bas de chaque page (laisse vide pour masquer) ----
var SITE = { name: "Ahmed Ben Amar", email: "benamarahmed236@gmail.com", phone: "93585977" };
// -------------------------------------------------------------------------------------------------
var PAGES = [["index.html","Accueil"],["demo.html","Démo vidéo"],["guide.html","Guide fonctionnel"],["presentation.html","Présentation"],["summary.pdf","Résumé (PDF)"]];
(function(){
  var cur = location.pathname.split("/").pop() || "index.html";
  var nav = PAGES.map(function(p){
    return '<a href="'+p[0]+'"'+(p[0]===cur?' class="on" aria-current="page"':'')+(p[0].slice(-4)===".pdf"?' target="_blank" rel="noopener"':'')+'>'+p[1]+'</a>';
  }).join("");
  var h = document.getElementById("site-header");
  if (h) h.outerHTML = '<header class="site"><div class="in"><a class="brand" href="index.html">LCAForge</a><nav aria-label="Navigation principale">'+nav+'</nav></div></header>';
  var c = [];
  if (SITE.name) c.push(SITE.name);
  if (SITE.email) c.push('<a href="mailto:'+SITE.email+'">'+SITE.email+'</a>');
  if (SITE.phone) c.push('<a href="tel:'+SITE.phone.replace(/\s/g,"")+'">'+SITE.phone+'</a>');
  var f = document.getElementById("site-footer");
  if (f) f.outerHTML = '<footer class="site">LCAForge · Sfax, Tunisie'+(c.length?'<br>'+c.join(' · '):'')+'</footer>';
})();
