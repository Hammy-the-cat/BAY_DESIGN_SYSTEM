/* global React */

function Method() {
  const steps = [
    { n: '01', en: 'ASSESS', jp: '姿勢・動作を評価',
      body: '理学療法士が骨格・関節・動作のクセをチェックし、改善ポイントを見つけます。' },
    { n: '02', en: 'TRAIN',  jp: 'パーソナル指導',
      body: 'マンツーマンで、あなた専用のメニューを実施。フォームを丁寧に修正します。' },
    { n: '03', en: 'TRACK',  jp: '進捗を可視化',
      body: '体組成・可動域・動作の変化を毎月計測。目に見える成果を確認できます。' },
  ];
  return (
    <section className="section section-method" id="method" data-screen-label="Method">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">METHOD</span>
          <h2 className="section-title">3ステップで、確実に変わる。</h2>
          <p className="section-lede">
            BAYトレは「評価 → トレーニング → 計測」のシンプルな流れ。
            目的と現状に合わせて、最短ルートで身体を変えていきます。
          </p>
        </div>

        <ol className="method-grid">
          {steps.map(s => (
            <li key={s.n} className="method-card">
              <span className="method-num">{s.n}</span>
              <div className="method-en">{s.en}</div>
              <div className="method-jp">{s.jp}</div>
              <p className="method-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

window.Method = Method;
