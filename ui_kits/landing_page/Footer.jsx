/* global React */

function Footer() {
  const cols = [
    { head: 'STUDIO',  items: ['日南店（満員）', '都城店（受付中）', 'アクセス'] },
    { head: 'PROGRAM', items: ['パーソナル', 'アスリート育成', 'オンライン', '7日リセット'] },
    { head: 'ABOUT',   items: ['BAYトレについて', 'トレーナー', 'よくある質問'] },
    { head: 'CONTACT', items: ['Instagram DM', 'メール', '採用情報'] },
  ];
  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#top" className="logo">
            <img src="../../assets/bay-bodyweight-logo-c.png" alt="BAY training gym" className="logo-wide footer-logo-wide" />
          </a>
          <p className="footer-tagline">
            理学療法士考案のトレーニングで、<br/>
            姿勢×動作を整え、理想の身体に。
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram"><i data-lucide="instagram"></i></a>
            <a href="#" aria-label="Mail"><i data-lucide="mail"></i></a>
          </div>
        </div>
        <div className="footer-cols">
          {cols.map(c => (
            <div key={c.head} className="footer-col">
              <span className="eyebrow">{c.head}</span>
              <ul>{c.items.map(i => <li key={i}><a href="#">{i}</a></li>)}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-base container">
        <span className="mono">© 2026 BAY TRAINING GYM</span>
        <span className="mono">MIYAZAKI · JAPAN</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
