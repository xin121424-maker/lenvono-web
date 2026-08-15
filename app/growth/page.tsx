/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { DetailPageLayout } from "../components/DetailPageLayout";

export const metadata: Metadata = {
  title: "学生成长｜idea 精英汇",
  description: "了解加入 idea 精英汇后可参与的校园实践、能力成长与职业连接。",
  openGraph: { title: "学生成长｜idea 精英汇", description: "从校园实践到真实项目，从能力成长到职业连接。", images: [] },
  twitter: { card: "summary", title: "学生成长｜idea 精英汇", description: "从校园实践到真实项目，从能力成长到职业连接。", images: [] },
};

const growthSteps = [
  ["01", "探索", "加入社团 / 认识伙伴 / 参与活动"],
  ["02", "实践", "学习技能 / 参与项目 / 完成任务"],
  ["03", "负责", "独立策划 / 团队协作 / 负责项目"],
  ["04", "连接未来", "企业实践 / 实习机会 / 职业成长"],
];

export default function GrowthPage() {
  return (
    <DetailPageLayout>
      <section className="detail-hero growth-hero">
        <div className="page-shell detail-hero-grid">
          <div className="detail-hero-copy detail-reveal">
            <span className="section-eyebrow">GROWTH PATH</span>
            <h1>加入 idea 精英汇，<br />你将获得</h1>
            <p className="detail-hero-lead">从校园实践到真实项目，从能力成长到职业连接</p>
          </div>
          <div className="detail-hero-visual detail-reveal" aria-hidden="true"><img src="/growth-hero.jpg" alt="" /><span className="detail-visual-label">LEARN · BUILD · GROW</span></div>
        </div>
      </section>

      <section className="detail-section detail-white growth-directions">
        <div className="page-shell">
          <div className="detail-heading detail-reveal"><span className="section-eyebrow">WHAT YOU GET</span><h2>四个成长方向</h2><p>从真实的体验开始，逐步建立面向未来的能力。</p></div>
          <div className="growth-bento">
            <article className="detail-card growth-ai-card detail-reveal">
              <div><span className="growth-icon">AI</span><span className="mini-label">AI 智能实践</span><h3>探索 AI 智能时代的新能力</h3><p>通过学习与实践，了解智能工具如何帮助表达、创作与解决问题。</p></div>
              <ul><li>AI 智能体探索</li><li>AIGC 内容创作</li><li>AI 短视频创作</li><li>智能应用实践</li></ul>
              <div className="ai-flow"><span>IDEA</span><b>→</b><span>AI</span><b>→</b><span>OUTPUT</span></div>
            </article>
            <article className="detail-card growth-small-card detail-reveal"><span className="growth-icon">企</span><h3>企业连接</h3><p>企业经验分享<br />行业趋势交流<br />企业真实场景认知</p></article>
            <article className="detail-card growth-small-card detail-reveal"><span className="growth-icon">项</span><h3>项目实践</h3><p>校园活动策划<br />品牌项目参与<br />创意方案落地<br />团队协作</p></article>
            <article className="detail-card growth-small-card detail-reveal"><span className="growth-icon">职</span><h3>职业发展</h3><p>暑期实习机会<br />职场能力培养<br />企业实践经验<br />行业认知</p></article>
          </div>
        </div>
      </section>

      <section className="detail-section detail-soft">
        <div className="page-shell">
          <div className="detail-heading detail-reveal"><span className="section-eyebrow">SKILL SET</span><h2>把经历变成能力</h2><p>在一次次实践里，形成可带走的成长。</p></div>
          <div className="skill-mini-grid">
            <article className="detail-card detail-reveal"><span>策</span><h3>策划能力</h3><p>活动策划 / 项目思维</p></article>
            <article className="detail-card detail-reveal"><span>沟</span><h3>沟通能力</h3><p>团队合作 / 资源协调</p></article>
            <article className="detail-card detail-reveal"><span>AI</span><h3>AI 能力</h3><p>智能体 / AIGC / AI 内容</p></article>
            <article className="detail-card detail-reveal"><span>职</span><h3>职场能力</h3><p>表达 / 汇报 / 企业认知</p></article>
          </div>
          <a className="text-link detail-reveal" href="/#learn">前往技能学习库 <span>→</span></a>
        </div>
      </section>

      <section className="detail-section detail-white">
        <div className="page-shell">
          <div className="detail-heading detail-reveal"><span className="section-eyebrow">GROWTH JOURNEY</span><h2>你的成长路线</h2><p>从参与者，到能够独立完成项目的青年伙伴。</p></div>
          <div className="growth-steps detail-reveal">
            {growthSteps.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="detail-cta-wrap detail-white">
        <div className="page-shell detail-cta detail-cta-deep detail-reveal"><div><span className="section-eyebrow">JOIN IDEA</span><h2>开启你的 idea 成长旅程</h2><p>下一段真实、有趣、有收获的校园经历，从这里开始。</p></div><a className="primary-button detail-button light-button" href="/#join">招新报名 <span>→</span></a></div>
      </section>
    </DetailPageLayout>
  );
}
