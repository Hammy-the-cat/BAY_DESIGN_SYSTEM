/* global React */
const { useState: useStateP } = React;

function Programs() {
  const programs = [
    { id: 'personal', tag: 'パーソナル',  title: 'パーソナル トレーニング',
      price: '¥9,900', unit: '/ 60min',
      body: 'マンツーマンで姿勢評価から動作改善まで。週1から。',
      bullets: ['初回カウンセリング 60分', '理学療法士 / トレーナー在籍', '都城・日南 両店舗'] },
    { id: 'athlete',  tag: 'アスリート育成', title: 'アスリート育成',
      price: '¥14,300', unit: '/ 90min',
      body: '競技力向上のためのコンディショニングと動作分析。',
      bullets: ['競技別プログラム', '動画解析つき', '中高生〜社会人プロ'] },
    { id: 'online',   tag: 'オンライン',   title: 'BAYトレ オンライン',
      price: '¥4,900', unit: '/ 月',
      body: '海辺の方法を、自宅へ。週2回のライブ＋動画ライブラリ。',
      bullets: ['ライブセッション 週2', '動画ライブラリ無制限', 'チャットで質問可'] },
    { id: 'reset',    tag: '7日リセット',  title: '7日 ボディリセット',
      price: '¥9,900', unit: '/ 7days',
      body: '入門プログラム。短期で身体の感覚を取り戻します。',
      bullets: ['初回評価 + 6日プログラム', '食事ガイドつき', '体験者限定価格'] },
  ];

  const [active, setActive] = useStateP('reset');
  const current = programs.find(p => p.id === active);

  return (
    <section className="section section-programs" id="program" data-screen-label="Programs">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">PROGRAM</span>
          <h2 className="section-title">あなたに合う、入り方を。</h2>
        </div>

        <div className="program-tabs" role="tablist">
          {programs.map(p => (
            <button key={p.id}
              role="tab"
              aria-selected={active === p.id}
              className={`program-tab ${active === p.id ? 'is-active' : ''}`}
              onClick={() => setActive(p.id)}>
              {p.tag}
            </button>
          ))}
        </div>

        <div className="program-feature">
          <div className="program-feature-text">
            <span className="eyebrow">{current.tag}</span>
            <h3 className="program-feature-title">{current.title}</h3>
            <p className="program-feature-body">{current.body}</p>
            <ul className="program-bullets">
              {current.bullets.map(b => (
                <li key={b}>
                  <i data-lucide="check" className="bullet-ic"></i>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="program-price">
              <span className="program-price-amt mono">{current.price}</span>
              <span className="program-price-unit mono">{current.unit}</span>
            </div>
            <a href="#book" className="btn btn-primary">このコースを予約 <span className="arrow">→</span></a>
          </div>
          <div className="program-feature-media">
            <img src="../../assets/illustrations/figure-strong.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

window.Programs = Programs;
