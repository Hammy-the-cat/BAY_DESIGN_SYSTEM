/* global React */

function CTABand() {
  return (
    <section className="section section-cta" id="book" data-screen-label="CTA">
      <div className="container cta-inner">
        <span className="eyebrow eyebrow-on-deep">7-DAY BODY RESET</span>
        <h2 className="cta-title">まずは7日間、試してみませんか。</h2>
        <p className="cta-sub">
          初回カウンセリング＋6日間のパーソナルメニュー。<br/>
          姿勢評価のレポート付きで、自分の身体の状態がわかります。
        </p>
        <div className="cta-actions">
          <a href="#" className="btn btn-primary btn-lg">DMで体験を予約 <span className="arrow">→</span></a>
          <a href="#" className="btn btn-ghost-on-deep btn-lg">
            <i data-lucide="instagram" style={{width: 18, height: 18}}></i>
            <span>@bay_traininggym</span>
          </a>
        </div>
        <p className="cta-fineprint mono">¥9,900 · 7 days · 都城店 / オンライン</p>
      </div>
    </section>
  );
}

window.CTABand = CTABand;
