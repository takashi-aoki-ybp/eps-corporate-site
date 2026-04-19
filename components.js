// ================================================
// Shared Components — Header, Footer, FAB, Common JS
// Single source of truth for all pages
// ================================================

const SITE_HEADER = `
<header>
  <div class="container">
    <a href="index.html" class="logo"><img src="logo.jpeg" alt="Enjin Payment Service"></a>
    <nav>
      <ul>
        <li><a href="index.html">ホーム</a></li>
        <li><a href="about.html">私たちについて</a></li>
        <li><a href="services.html">サービス</a></li>
        <li><a href="company.html">会社情報</a></li>
        <li><a href="security.html">安心への取り組み</a></li>
      </ul>
    </nav>
    <div class="header-right">
      <div class="header-phone">
        <div>
          <div class="phone-num">03-XXXX-XXXX</div>
          <div class="phone-hours">平日 10:00～18:30</div>
        </div>
      </div>
      <a href="contact.html" class="cta-btn-nav">お問い合わせ</a>
    </div>
    <button class="hamburger" aria-label="メニュー">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<div class="nav-overlay"></div>
`;

const SITE_FAB = `<a href="contact.html" class="fab"><span>お問い合わせ</span></a>`;

const SITE_FOOTER = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo"><img src="logo.jpeg" alt="Enjin Payment Service"></div>
        <p style="font-size:12px;opacity:0.6;">〒104-0061 東京都中央区銀座5-13-16 8F</p>
      </div>
      <div class="footer-links">
        <h4>サービス</h4>
        <ul>
          <li><a href="services.html">ファクタリング</a></li>
          <li><a href="services.html#salary">給与前払い</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>会社情報</h4>
        <ul>
          <li><a href="about.html">私たちについて</a></li>
          <li><a href="company.html">会社概要</a></li>
          <li><a href="security.html">安心への取り組み</a></li>
          <li><a href="privacy.html">プライバシーポリシー</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>お問い合わせ</h4>
        <ul>
          <li><a href="contact.html">お問い合わせフォーム</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Enjin Payment Service Co., Ltd. All Rights Reserved.</p>
    </div>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = SITE_HEADER;
  if (footerEl) footerEl.innerHTML = SITE_FOOTER;
  const isContactPage = document.body.classList.contains('page-contact');
  if (!isContactPage) {
    const fabContainer = document.getElementById('site-fab');
    if (fabContainer) fabContainer.innerHTML = SITE_FAB;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('active'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const overlay = document.querySelector('.nav-overlay');
  if (hamburger && nav && overlay) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active'); nav.classList.toggle('open'); overlay.classList.toggle('active');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
    overlay.addEventListener('click', () => {
      hamburger.classList.remove('active'); nav.classList.remove('open'); overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  document.querySelectorAll('.faq-q').forEach(q => { q.addEventListener('click', () => { q.parentElement.classList.toggle('active'); }); });
});
