(function(){
var heroImages = {
  'index-a.html': 'hero_plan_a_1776591402966.png',
  'index-b.html': 'hero_plan_b_1776591416257.png',
  'index-c.html': 'hero_plan_c_1776591430801.png',
  'index-d.html': 'hero_plan_d_1776591445234.png',
  'index-e.html': 'hero_plan_e.jpeg',
  'index-f.html': 'hero_plan_f.jpeg'
};
var page = location.pathname.split('/').pop();
var img = heroImages[page];
if(img){
  var hero = document.querySelector('.hero-simple');
  if(hero){
    hero.style.background = "url('" + img + "') center/cover no-repeat";
    hero.style.position = 'relative';
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:absolute;inset:0;background:linear-gradient(135deg,rgba(250,250,250,0.82) 0%,rgba(240,240,240,0.72) 100%);z-index:0;';
    hero.insertBefore(overlay, hero.firstChild);
    var container = hero.querySelector('.container');
    if(container) container.style.cssText += 'position:relative;z-index:2;';
  }
}
})();
