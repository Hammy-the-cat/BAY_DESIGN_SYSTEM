/* global React */

function Studios() {
  const studios = [
    { name: '日南店', en: 'NICHINAN',  status: 'full',  label: '満員 / SOLD OUT',
      addr: '宮崎県日南市 ◯◯町 1-2-3', hours: '平日 9:00–22:00 / 土日 9:00–18:00' },
    { name: '都城店', en: 'MIYAKONOJO', status: 'open',  label: '受付中 / OPEN',
      addr: '宮崎県都城市 ◯◯町 4-5-6',  hours: '平日 9:00–22:00 / 土日 9:00–18:00' },
  ];
  return (
    <section className="section section-studios" id="studio" data-screen-label="Studios">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">STUDIO</span>
          <h2 className="section-title">2つのスタジオ、ひとつの方法。</h2>
        </div>
        <div className="studio-grid">
          {studios.map(s => (
            <article key={s.name} className={`studio-card studio-${s.status}`}>
              <header className="studio-head">
                <div>
                  <span className="eyebrow">{s.en}</span>
                  <h3 className="studio-name">{s.name}</h3>
                </div>
                <span className={`status-pill status-${s.status}`}>
                  <span className={`dot dot-${s.status === 'full' ? 'danger' : 'success'}`}></span>
                  {s.label}
                </span>
              </header>
              <div className="studio-photo">
                <img src="../../assets/illustrations/equipment.svg" alt="" />
              </div>
              <dl className="studio-meta">
                <div><dt><i data-lucide="map-pin" className="meta-ic"></i></dt><dd>{s.addr}</dd></div>
                <div><dt><i data-lucide="clock" className="meta-ic"></i></dt><dd>{s.hours}</dd></div>
              </dl>
              {s.status === 'open'
                ? <a href="#book" className="btn btn-solid">体験予約はDMから ✉️</a>
                : <button className="btn btn-disabled" disabled>キャンセル待ち</button>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Studios = Studios;
