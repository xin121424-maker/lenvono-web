/* eslint-disable @next/next/no-html-link-for-pages */

export function SiteFooter() {
  return (
    <footer id="contact">
      <div className="page-shell footer-grid">
        <div><a className="brand footer-brand" href="/"><span className="brand-mark">i</span><span>idea 精英汇</span></a><p>青年成长实践平台</p></div>
        <div><span className="footer-label">联系我们</span><h3>公众号 / 社群二维码位置<br />邮箱填写处</h3></div>
        <div className="qr-placeholder">二维码</div>
      </div>
      <div className="page-shell footer-bottom"><span>版权说明：所有实拍图片未经授权禁止盗用。</span><span>实习、公益项目以当期官方通知为准，谨防诈骗。</span></div>
    </footer>
  );
}
