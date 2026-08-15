"use client";

import { useState } from "react";

const navItems = [
  ["首页", "/#home"],
  ["社团介绍", "/#about"],
  ["技能学习库", "/#learn"],
  ["活动中心", "/#activity"],
  ["专项项目", "/#project"],
  ["组织架构", "/#team"],
  ["招新报名", "/#join"],
  ["联系我们", "/#contact"],
];

export function SiteHeader({ light = false, home = false }: { light?: boolean; home?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`site-header${light ? " site-header-light" : ""}`}>
      <a className="brand" href={home ? "#home" : "/"} aria-label="idea精英汇首页">
        <span className="brand-mark">i</span><span>idea 精英汇</span>
      </a>
      <nav className={menuOpen ? "nav-list is-open" : "nav-list"} aria-label="主导航">
        {navItems.map(([label, href]) => {
          const resolvedHref = home ? href.replace("/", "") : href;
          return <a className={!home && label === "社团介绍" ? "is-current" : ""} key={href} href={resolvedHref} onClick={() => setMenuOpen(false)}>{label}</a>;
        })}
      </nav>
      <button className="menu-button" type="button" aria-label="打开导航" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span>
      </button>
    </header>
  );
}
