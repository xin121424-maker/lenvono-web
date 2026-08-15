import type { Metadata } from "next";
import { DetailPageLayout } from "../components/DetailPageLayout";

export const metadata: Metadata = {
  title: "社团背景｜idea 精英汇",
  description: "了解联想 idea 精英汇的起点、定位与全国高校青年实践网络。",
  openGraph: { title: "社团背景｜idea 精英汇", description: "了解联想 idea 精英汇的起点、定位与全国高校青年实践网络。", images: [] },
  twitter: { card: "summary", title: "社团背景｜idea 精英汇", description: "了解联想 idea 精英汇的起点、定位与全国高校青年实践网络。", images: [] },
};

const milestones = [
  ["2009", "idea 精英汇成立"],
  ["2012", "精英书院"],
  ["2017", "高校创新项目"],
  ["2020", "学长学姐帮帮忙"],
  ["未来", "持续连接青年成长"],
];

export default function AboutPage() {
  return (
    <DetailPageLayout>
      <section className="detail-hero detail-about-hero">
        <div className="page-shell detail-hero-grid">
          <div className="detail-hero-copy detail-reveal">
            <span className="section-eyebrow">ABOUT IDEA</span>
            <h1>了解 idea 精英汇</h1>
            <p className="detail-hero-lead">一群有想法的年轻人，在这里相遇、成长、创造</p>
            <p className="detail-hero-description">联想 idea 精英汇由共青团中央和联想集团共同创立，为高校青年提供实践与成长的平台。</p>
          </div>
          <div className="detail-hero-visual detail-reveal" aria-hidden="true">
            <img src="/about-hero.jpg" alt="" />
            <span className="detail-visual-label">YOUTH IN ACTION</span>
          </div>
        </div>
        <div className="page-shell detail-stats detail-reveal" aria-label="组织规模">
          <div><strong data-count="240" data-suffix="+">0</strong><span>高校覆盖</span></div>
          <div><strong data-count="60000" data-suffix="+">0</strong><span>累计成员</span></div>
          <div><strong data-count="34">0</strong><span>省级行政区域</span></div>
        </div>
      </section>

      <section className="detail-section detail-white">
        <div className="page-shell detail-split detail-reveal">
          <div className="detail-photo-card"><img src="/about-community.jpg" alt="青年成员共同交流与实践" /></div>
          <div className="detail-copy-block">
            <span className="section-eyebrow">WHO WE ARE</span>
            <h2>全国高校青年实践社群</h2>
            <p>我们连接来自不同高校的青年，让真实的校园实践成为认识伙伴、锻炼能力与探索未来的共同起点。</p>
            <div className="detail-tags"><span>青年成长</span><span>校园实践</span><span>全国连接</span></div>
          </div>
        </div>
      </section>

      <section className="detail-section detail-soft">
        <div className="page-shell">
          <div className="detail-heading detail-reveal"><span className="section-eyebrow">WHY IDEA</span><h2>为什么我们存在</h2><p>让年轻人的想法，在真实行动里长出力量。</p></div>
          <div className="value-grid">
            <article className="detail-card value-card detail-reveal"><span>01</span><h3>发现想法</h3><p>让大学生敢于提出自己的创意与观点。</p><small>从一次表达开始，看见更多可能。</small></article>
            <article className="detail-card value-card detail-reveal"><span>02</span><h3>实践想法</h3><p>通过真实校园活动和项目，让创意真正落地。</p><small>在协作中学习，也在行动中成长。</small></article>
            <article className="detail-card value-card detail-reveal"><span>03</span><h3>创造影响</h3><p>从个人参与走向团队协作，创造属于年轻人的校园影响力。</p><small>让一次参与，连接更大的青年网络。</small></article>
          </div>
        </div>
      </section>

      <section className="detail-section detail-white">
        <div className="page-shell">
          <div className="detail-heading detail-reveal"><span className="section-eyebrow">OUR JOURNEY</span><h2>一路走来</h2><p>从一个起点，到持续生长的青年实践网络。</p></div>
          <div className="timeline detail-reveal">
            {milestones.map(([year, title]) => <div className="timeline-item" key={year}><span className="timeline-dot"></span><strong>{year}</strong><p>{title}</p></div>)}
          </div>
        </div>
      </section>

      <section className="detail-cta-wrap detail-white">
        <div className="page-shell detail-cta detail-cta-light detail-reveal"><div><span className="section-eyebrow">NEXT STEP</span><h2>了解了我们，也看看你能在这里获得什么</h2></div><a className="primary-button detail-button" href="/growth">探索学生成长 <span>→</span></a></div>
      </section>
    </DetailPageLayout>
  );
}
