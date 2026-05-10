/* global React */

function Trainer() {
  return (
    <section className="section section-trainer" id="trainer" data-screen-label="Trainer">
      <div className="container trainer-grid">
        <div className="trainer-photo">
          <img src="../../assets/illustrations/pt-session.svg" alt="" />
          <div className="trainer-badge">
            <span className="eyebrow eyebrow-on-deep">TRAINER · 01</span>
            <span className="trainer-credit">理学療法士 / オーナー</span>
          </div>
        </div>
        <div className="trainer-text">
          <span className="eyebrow">TRAINER</span>
          <h2 className="section-title">理学療法士が、ひとり一人を見ます。</h2>
          <p className="trainer-body">
            臨床経験のある理学療法士が、評価から指導まで一貫して担当します。
            痛みや動きにくさの原因を見極めた上で、無理のないトレーニングを提案。
            初めての方でも、運動が久しぶりの方でも、安心して始められます。
          </p>
          <ul className="trainer-list">
            <li>理学療法士 / 国家資格</li>
            <li>NSCA-CPT</li>
            <li>動作分析・姿勢評価 専門</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

window.Trainer = Trainer;
