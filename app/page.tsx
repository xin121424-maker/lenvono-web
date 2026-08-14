"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://picsum.photos/id/26/1920/1080",
    title: "2026暑期实习特训营",
    subtitle: "青年成长实践平台",
    action: "查看活动详情",
    target: "#project",
  },
  {
    image: "https://picsum.photos/id/96/1920/1080",
    title: "美好假期大学生温暖公益行",
    subtitle: "返家乡，助力少年成长",
    action: "了解公益项目",
    target: "#project",
  },
  {
    image: "https://picsum.photos/id/42/1920/1080",
    title: "idea精英汇18周年",
    subtitle: "汇聚青年力量",
    action: "查看更多",
    target: "#about",
  },
];

const learningResources = [
  { category: "营销策划", icon: "策", title: "营销策划", description: "校园活动策划、短视频创作、新媒体运营案例" },
  { category: "职场能力", icon: "职", title: "职场能力", description: "简历制作、面试技巧、商务沟通、项目复盘" },
  { category: "工具技能", icon: "具", title: "工具技能", description: "剪映AI、飞书协作、PPT方案撰写教程" },
  { category: "社团专项", icon: "专", title: "社团专项", description: "公益项目执行、赛事落地执行手册" },
];

const navItems = [
  ["首页", "#home"], ["社团介绍", "#about"], ["技能学习库", "#learn"],
  ["活动中心", "#activity"], ["专项项目", "#project"], ["组织架构", "#team"],
  ["招新报名", "#join"], ["联系我们", "#contact"],
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [learningTab, setLearningTab] = useState("全部资源");
  const [activityTab, setActivityTab] = useState<"活动预告" | "活动回顾">("活动预告");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((value) => (value + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  const moveSlide = (direction: number) => {
    setSlide((value) => (value + direction + slides.length) % slides.length);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="idea精英汇首页">
          <span className="brand-mark">i</span><span>idea 精英汇</span>
        </a>
        <nav className={menuOpen ? "nav-list is-open" : "nav-list"} aria-label="主导航">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <button className="menu-button" type="button" aria-label="打开导航" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span>
        </button>
      </header>

      <section className="hero" id="home" aria-label="活动焦点">
        {slides.map((item, index) => (
          <article className={index === slide ? "hero-slide is-active" : "hero-slide"} key={item.title} aria-hidden={index !== slide}>
            <img src={item.image} alt="" />
            <div className="hero-overlay"></div>
            <div className="hero-copy">
              <span className="hero-kicker">IDEA ELITE · YOUTH IN ACTION</span>
              <h1>{item.title}</h1>
              <p>{item.subtitle}</p>
              <a className="primary-button" href={item.target}>{item.action}<span>→</span></a>
            </div>
          </article>
        ))}
        <button className="hero-arrow hero-arrow-left" type="button" aria-label="上一张" onClick={() => moveSlide(-1)}>‹</button>
        <button className="hero-arrow hero-arrow-right" type="button" aria-label="下一张" onClick={() => moveSlide(1)}>›</button>
        <div className="hero-bottom">
          <div><strong>让想法落地，让青春闪光</strong><span>全国最具影响力的高校精英社团</span></div>
          <div className="hero-dots">{slides.map((_, index) => <button key={index} className={index === slide ? "is-active" : ""} aria-label={`跳转到第 ${index + 1} 张`} onClick={() => setSlide(index)}></button>)}</div>
        </div>
      </section>

      <section className="quick-section" aria-label="快捷入口">
        <div className="quick-grid page-shell">
          {[
            ["书", "技能学习库", "学习营销、职场工具技能", "#learn"],
            ["历", "近期活动", "查看社团活动预告与回顾", "#activity"],
            ["人", "招新报名", "加入精英汇", "#join"],
            ["心", "公益项目", "美好假期公益行", "#project"],
          ].map(([icon, title, description, href]) => (
            <a className="quick-card" href={href} key={title}><span className="quick-icon">{icon}</span><div><h3>{title}</h3><p>{description}</p></div><span className="quick-link">→</span></a>
          ))}
        </div>
      </section>

      <section className="section-block about-section" id="about">
        <div className="page-shell">
          <SectionHeading eyebrow="ABOUT US" title="社团介绍" description="一群有理想的年轻人，在这里相遇、成长、创造" />
          <div className="about-layout">
            <article className="about-feature">
              <span className="feature-number">18</span>
              <div><span className="mini-label">YEARS TOGETHER</span><h3>社团背景</h3><p>联想idea精英汇，团中央认证青少年实习基地，面向全国高校学生实践社团。</p></div>
            </article>
            <div className="about-stack">
              <article className="info-panel"><span className="panel-number">01</span><div><h3>学生收获</h3><p>校园活动实践、实习机会、公益项目经历、职场技能培训、行业资源对接。</p></div></article>
              <article className="info-panel"><span className="panel-number">02</span><div><h3>荣誉资质</h3><p>多家媒体报道，多项青年实践项目落地。</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block learning-section" id="learn">
        <div className="page-shell">
          <SectionHeading eyebrow="LEARNING HUB" title="技能学习库" description="学习营销、职场工具技能" />
          <div className="filter-tabs" role="group" aria-label="技能学习分类">
            {["全部资源", ...learningResources.map((item) => item.category)].map((tab) => <button key={tab} type="button" className={learningTab === tab ? "is-active" : ""} onClick={() => setLearningTab(tab)}>{tab}</button>)}
          </div>
          <div className="resource-grid">
            {learningResources.filter((item) => learningTab === "全部资源" || item.category === learningTab).map((item) => (
              <article className="resource-card" key={item.title}><div className="resource-icon">{item.icon}</div><span className="resource-category">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><a href="#learn">下载资料 <span>↓</span></a></article>
            ))}
          </div>
          <p className="section-note">资料仅供社团内部学习，禁止商用转载，课程持续更新。</p>
        </div>
      </section>

      <section className="section-block activities-section" id="activity">
        <div className="page-shell">
          <SectionHeading eyebrow="ACTIVITIES" title="活动中心" description="查看社团活动预告与回顾" light />
          <div className="activity-tabs" role="group" aria-label="活动分类">
            <button type="button" className={activityTab === "活动预告" ? "is-active" : ""} onClick={() => setActivityTab("活动预告")}>活动预告</button>
            <button type="button" className={activityTab === "活动回顾" ? "is-active" : ""} onClick={() => setActivityTab("活动回顾")}>活动回顾</button>
          </div>
          {activityTab === "活动预告" ? (
            <div className="activity-grid">
              <article className="activity-main"><span>COMING SOON</span><h3>2026秋季校园招新活动</h3><p>新学期，与优秀的人一起做有趣的事。</p><a href="#join">了解招新 →</a></article>
              <article className="activity-side"><span className="activity-date">新一轮招募</span><h3>美好假期公益行</h3><p>返家乡，助力少年成长</p><a href="#project">查看项目 →</a></article>
              <article className="activity-side activity-photo"><span className="activity-date">ACTIVITY</span><h3>活动相册</h3><p>往期实拍图片归档</p></article>
            </div>
          ) : (
            <div className="activity-grid review-grid"><article className="activity-main"><span>REVIEW</span><h3>暑期特训营开营活动</h3><p>青年成长实践平台</p></article><article className="activity-side"><span className="activity-date">REVIEW</span><h3>校园科创赛事合作</h3><p>用项目连接创意与成长</p></article></div>
          )}
        </div>
      </section>

      <section className="section-block projects-section" id="project">
        <div className="page-shell">
          <SectionHeading eyebrow="FLAGSHIP PROGRAMS" title="专项IP项目" description="真实项目，持续实践" />
          <div className="project-list">
            <article className="project-card"><div className="project-image project-image-one"><span>01</span></div><div className="project-copy"><span className="mini-label">公益项目</span><h3>美好假期大学生温暖公益行</h3><p>大学生返乡开展帮扶，助力地方少年儿童成长实践项目。</p><a href="#join">参与项目 →</a></div></article>
            <article className="project-card project-card-reverse"><div className="project-image project-image-two"><span>02</span></div><div className="project-copy"><span className="mini-label">实践项目</span><h3>idea精英汇暑期实习特训营</h3><p>面向在校大学生的暑期实习实践训练营。</p><a href="#join">了解报名 →</a></div></article>
          </div>
        </div>
      </section>

      <section className="section-block team-section" id="team">
        <div className="page-shell">
          <SectionHeading eyebrow="OUR TEAM" title="组织架构" description="一群志同道合的伙伴，并肩前行" />
          <div className="team-grid">
            <article className="team-lead"><div className="avatar-large">I</div><span>指导老师 | 社团负责人</span><h3>负责人介绍</h3><p>这里填写负责人介绍，可自行修改</p></article>
            <article className="team-showcase"><div className="team-showcase-head"><div><span className="mini-label">MEMBER STORIES</span><h3>优秀学员风采</h3></div><span className="showcase-arrow">↗</span></div><p>往届优秀实习生、社团成员展示区域</p><div className="avatar-row"><span>IDEA</span><span>青年</span><span>伙伴</span><span>＋</span></div></article>
          </div>
        </div>
      </section>

      <section className="section-block join-section" id="join">
        <div className="page-shell join-layout">
          <div className="join-intro"><span className="section-eyebrow">JOIN US</span><h2>招新报名</h2><p>加入精英汇，与优秀的人一起做有趣的事</p><div className="join-benefits"><span>实践项目</span><span>技能课程</span><span>实习机会</span><span>社团人脉资源</span></div></div>
          <div className="join-card"><span className="mini-label">REGISTRATION</span><h3>报名入口</h3><p>问卷链接放置此处</p><a className="primary-button" href="#contact">跳转报名问卷 <span>→</span></a><div className="faq"><strong>常见Q&amp;A</strong><p>Q：是否需要相关经验？</p><p>A：不需要，热爱实践即可。</p></div></div>
        </div>
      </section>

      <footer id="contact">
        <div className="page-shell footer-grid">
          <div><a className="brand footer-brand" href="#home"><span className="brand-mark">i</span><span>idea 精英汇</span></a><p>青年成长实践平台</p></div>
          <div><span className="footer-label">联系我们</span><h3>公众号 / 社群二维码位置<br />邮箱填写处</h3></div>
          <div className="qr-placeholder">二维码</div>
        </div>
        <div className="page-shell footer-bottom"><span>版权说明：所有实拍图片未经授权禁止盗用。</span><span>实习、公益项目以当期官方通知为准，谨防诈骗。</span></div>
      </footer>
    </main>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description: string; light?: boolean }) {
  return <div className={light ? "section-heading is-light" : "section-heading"}><span className="section-eyebrow">{eyebrow}</span><h2>{title}</h2><p>{description}</p></div>;
}
