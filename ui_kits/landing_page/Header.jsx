/* global React */
const { useState, useEffect } = React;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['METHOD', 'PROGRAM', 'STUDIO', 'ONLINE', 'TRAINER'];
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`} data-screen-label="Header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          <img src="../../assets/bay-training-gym-mark.png" alt="" className="logo-mark logo-mark-real" />
          <span className="logo-word">
            <span className="logo-bay">BAY</span><span className="logo-tore">training gym</span>
          </span>
        </a>
        <nav className="header-nav">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}
        </nav>
        <a href="#book" className="btn btn-primary btn-sm">体験を予約 <span className="arrow">→</span></a>
      </div>
    </header>
  );
}

window.Header = Header;
