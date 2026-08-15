import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the idea精英汇 homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>idea精英汇 社团官网<\/title>/i);
  assert.match(html, /2026暑期实习特训营/);
  assert.match(html, /技能学习库/);
  assert.match(html, /招新报名/);
  assert.doesNotMatch(html, /codex-preview/);
});

for (const [path, title, heading] of [
  ["/about", "社团背景｜idea 精英汇", "了解 idea 精英汇"],
  ["/growth", "学生成长｜idea 精英汇", "加入 idea 精英汇"],
  ["/impact", "组织影响力｜idea 精英汇", "组织影响力"],
]) {
  test(`renders detail route ${path}`, async () => {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(`<title>${title}<\\/title>`));
    assert.match(html, new RegExp(heading));
    assert.match(html, /idea 精英汇/);
  });
}
