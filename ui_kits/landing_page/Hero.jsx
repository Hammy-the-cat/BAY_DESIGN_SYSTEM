/* global React */

function Hero() {
  return (
    <section className="hero" id="top" data-screen-label="Hero">
      <div className="hero-media">
        <img src="../../assets/illustrations/hero.svg" alt="" />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-inner">
        <img className="hero-brand-logo" src="../../assets/bay-bodyweight-logo-c.png" alt="BAY training gym" />
        <span className="eyebrow eyebrow-on-deep">PERSONAL TRAINING · MIYAZAKI</span>
        <h1 className="hero-title">
          姿勢を整え、<br/>
          <span className="hero-title-accent">動ける身体へ。</span>
        </h1>
        <p className="hero-sub">
          理学療法士が考案したパーソナルトレーニング。<br/>
          評価・改善・トレーニングの3ステップで、目的に合った身体を作ります。
        </p>
        <div className="hero-actions">
          <a href="#book" className="btn btn-primary btn-lg">体験を予約する <span className="arrow">→</span></a>
          <a href="#method" className="btn btn-ghost-on-deep btn-lg">トレーニング内容</a>
        </div>
        <div className="hero-meta">
          <span className="hero-meta-item"><span className="dot dot-success"></span>都城店 受付中</span>
          <span className="hero-meta-item"><span className="dot dot-danger"></span>日南店 満員</span>
          <span className="hero-meta-item">7日 ボディリセット 体験受付中</span>
        </div>
      </div>

      <svg className="hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0 40 C 240 0, 480 80, 720 40 S 1200 0, 1440 40 L 1440 80 L 0 80 Z" fill="var(--sand-50)"/>
      </svg>
    </section>
  );
}

window.Hero = Hero;
