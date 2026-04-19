(function() {
  var LOGO_NORMAL = 'logo_normal.png';
  var LOGO_WHITE = 'logo_white.png';
  var currentPath = window.location.pathname;
  var isSubPage = currentPath !== '/' && currentPath !== '/index.html';

  function getNavLinks() {
    return [
      {href: 'index.html', text: 'ホーム'},
      {href: 'about.html', text: '私たちについて'},
      {href: 'services.html', text: 'サービス'},
      {href: 'company.html', text: '会社情報'},
      {href: 'security.html', text: '安心への取り組み'}
    ];
  }

  function buildNavItems() {
    var links = getNavLinks();
    var html = '';
    links.forEach(function(link) {
      html += '<li><a href="' + link.href + '">' + link.text + '</a></li>';
    });
    return html;
  }

  function injectHeader() {
    var el = document.getElementById('shared-header');
    if (!el) return;
    el.innerHTML = '<header class="header" id="main-header">' +
      '<div class="container">' +
      '<div class="header-content">' +
      '<a href="index.html" class="logo">' +
      '<img src="' + LOGO_NORMAL + '" alt="Enjin Payment Service" style="height:40px;width:auto;max-width:220px;object-fit:contain;">' +
      '</a>' +
      '<nav class="main-nav" id="main-nav">' +
      '<ul>' + buildNavItems() + '</ul>' +
      '</nav>' +
      '<a href="contact.html" class="btn btn-primary header-cta">お問い合わせ</a>' +
      '<button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="メニュー">' +
      '<span></span><span></span><span></span>' +
      '</button>' +
      '</div></div></header>';
    var toggle = document.getElementById('mobile-menu-toggle');
    var nav = document.getElementById('main-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
      });
    }
  }

  function injectFooter() {
    var el = document.getElementById('shared-footer');
    if (!el) return;
    el.innerHTML = '<footer class="footer">' +
      '<div class="container">' +
      '<div class="footer-content">' +
      '<div class="footer-info">' +
      '<a href="index.html" class="footer-logo">' +
      '<img src="' + LOGO_WHITE + '" alt="Enjin Payment Service" style="height:32px;width:auto;max-width:200px;object-fit:contain;">' +
      '</a>' +
      '<p class="footer-address">〒104-0061 東京都中央区銀座5-13-16 8F</p>' +
      '</div>' +
      '<div class="footer-links">' +
      '<div class="footer-column"><h4>サービス</h4><ul>' +
      '<li><a href="services.html">ファクタリング</a></li>' +
      '<li><a href="services.html#salary">給与前払い</a></li>' +
      '</ul></div>' +
      '<div class="footer-column"><h4>会社情報</h4><ul>' +
      '<li><a href="about.html">私たちについて</a></li>' +
      '<li><a href="company.html">会社概要</a></li>' +
      '<li><a href="security.html">安心への取り組み</a></li>' +
      '<li><a href="privacy.html">プライバシーポリシー</a></li>' +
      '</ul></div>' +
      '<div class="footer-column"><h4>お問い合わせ</h4><ul>' +
      '<li><a href="contact.html">お問い合わせフォーム</a></li>' +
      '</ul></div>' +
      '</div></div>' +
      '<div class="footer-bottom"><p>&copy; 2026 Enjin Payment Service Co., Ltd. All Rights Reserved.</p></div>' +
      '</div></footer>';
  }

  function injectFAB() {
    var el = document.getElementById('shared-fab');
    if (!el) return;
    el.innerHTML = '<a href="contact.html" class="fab-contact" title="お問い合わせ">' +
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>' +
      '</a>';
  }

  function init() {
    injectHeader();
    injectFooter();
    injectFAB();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
