# idea精英汇 社团官网

根据参考站视觉与社团内容制作的单页响应式官网，包含活动轮播、社团介绍、技能学习、活动中心、专项项目、组织架构、招新报名和联系方式。

## 本地运行

环境要求：Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

浏览器访问 `http://localhost:3000`。

## 常用命令

```bash
npm run dev
npm run build
npm test
```

## 主要目录

- `app/page.tsx`：首页内容与交互
- `app/globals.css`：页面视觉和响应式样式
- `app/layout.tsx`：页面元信息与全局布局
- `public/`：后续可放置正式图片、二维码和品牌素材

当前演示图片使用远程占位图。上线前建议将正式活动图片和二维码放入 `public/`，并替换页面中的占位地址。
