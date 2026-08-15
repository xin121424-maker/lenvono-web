/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { DetailPageLayout } from "../components/DetailPageLayout";

export const metadata: Metadata = {
  title: "组织影响力｜idea 精英汇",
  description: "从品牌项目到全国高校青年网络，看见 idea 精英汇持续形成的影响力。",
  openGraph: { title: "组织影响力｜idea 精英汇", description: "从一所校园，到全国高校青年网络。", images: [] },
  twitter: { card: "summary", title: "组织影响力｜idea 精英汇", description: "从一所校园，到全国高校青年网络。", images: [] },
};

export default function ImpactPage() {
  return (
    <DetailPageLayout>
      <section className="detail-hero impact-hero">
        <div className="impact-glow impact-glow-one"></div><div className="impact-glow impact-glow-two"></div>
        <div className="page-shell impact-hero-copy detail-reveal"><span className="section-eyebrow">IMPACT</span><h1>组织影响力</h1><p className="detail-hero-lead">从一所校园，到全国高校青年网络</p></div>
        <div className="page-shell detail-stats detail-reveal" aria-label="组织规模">
          <div><strong data-count="34">0</strong><span>省级行政区域</span></div>
          <div><strong data-count="240" data-suffix="+">0</strong><span>高校覆盖</span></div>
          <div><strong data-count="60000" data-suffix="+">0</strong><span>累计成员</span></div>
        </div>
      </section>

      <section className="detail-section detail-white">
        <div className="page-shell">
          <div className="detail-heading detail-reveal"><span className="section-eyebrow">FLAGSHIP PROGRAMS</span><h2>一些持续被记住的项目</h2><p>每一次项目实践，都让青年之间的连接更具体。</p></div>
          <div className="impact-projects">
            <a className="impact-project-card impact-project-main detail-reveal" href="/#project"><img src="/impact-academy.jpg" alt="精英书院项目现场" /><span className="project-shade"></span><div><small>2012 · 青年成长</small><h3>精英书院</h3><p>让青年在交流、学习与实践中认识更大的世界。</p><b>了解项目 →</b></div></a>
            <a className="impact-project-card detail-reveal" href="/#project"><img src="/impact-innovation.jpg" alt="高校创新大赛项目现场" /><span className="project-shade"></span><div><small>创新实践</small><h3>高校创新大赛</h3><p>从校园创意出发，在协作中推进方案落地。</p><b>了解项目 →</b></div></a>
            <a className="impact-project-card detail-reveal" href="/#project"><img src="/impact-training.jpg" alt="暑期实习集训营项目现场" /><span className="project-shade"></span><div><small>职业成长</small><h3>暑期实习集训营</h3><p>通过实践与交流，建立对职场的真实认知。</p><b>了解项目 →</b></div></a>
          </div>
        </div>
      </section>

      <section className="detail-section detail-soft">
        <div className="page-shell detail-split impact-social detail-reveal">
          <div className="detail-photo-card"><img src="/impact-charity.jpg" alt="美好假期公益行动" /></div>
          <div className="detail-copy-block"><span className="section-eyebrow">SOCIAL IMPACT</span><h2>美好假期公益行动</h2><strong className="impact-project-type">长期公益项目</strong><p>大学生返乡开展帮扶，以青年行动陪伴地方少年儿童成长，让校园之外的实践拥有真实温度。</p><a className="text-link text-link-left" href="/#project">查看公益项目 <span>→</span></a></div>
        </div>
      </section>

      <section className="detail-section detail-white">
        <div className="page-shell">
          <div className="detail-heading detail-reveal"><span className="section-eyebrow">NATIONAL NETWORK</span><h2>与全国高校青年连接</h2><p>跨越地域，在校园与校园之间分享经验、共同成长。</p></div>
          <div className="network-panel detail-reveal" role="img" aria-label="全国高校青年连接网络示意图">
            <div className="network-copy"><strong>240+</strong><span>高校伙伴</span><p>节点仅作全国网络示意，不代表具体院校位置。</p></div>
            <div className="network-field" aria-hidden="true">{Array.from({ length: 34 }).map((_, index) => <i key={index}></i>)}</div>
          </div>
        </div>
      </section>

      <section className="detail-cta-wrap detail-white">
        <div className="page-shell detail-cta detail-cta-light detail-reveal"><div><span className="section-eyebrow">YOUR TURN</span><h2>下一位创造校园影响力的人，也可以是你</h2></div><a className="primary-button detail-button" href="/#join">加入 idea 精英汇 <span>→</span></a></div>
      </section>
    </DetailPageLayout>
  );
}
