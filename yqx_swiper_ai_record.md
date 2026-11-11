# Swiper 课题任务 + 思政升华 · 提交记录

> 作者：杨祺轩 · 24002120109 · 高级网页设计 · 2026-2027-1
> 提交物：swiper-task.html（能运行）+ 本记录（与 AI 的关键对话）

---

## 任务一 · 提示词工程师（⭐⭐）

需求：① 无缝循环 ② 3.2 秒自动翻页且手动操作后不停止 ③ 圆点分页器可点击 ④ 初始效果 cube

### 第 1 轮提示词

> 帮我写一个 Swiper 11 的初始化配置：自动轮播、有循环、底部有圆点、效果用 cube，挂在 #wySw4 上。

### 第 1 轮 AI 回答（有遗漏）

```js
new Swiper('#wySw4', {
  loop: true,
  autoplay: true,
  effect: 'cube',
  pagination: '.swiper-pagination',
});
```

**验证结论（截图见答辩）**：自动翻页 ✅ 但 delay 是默认 3000 不是 3200 ❌；手动拖动后自动播放会停 ❌（缺 disableOnInteraction: false）；圆点渲染出来了但点击不能跳转 ❌（缺 clickable: true，且 pagination 写成字符串无法传 clickable）。

### 第 2 轮提示词（补齐"说清楚"的部分）

> 重新给 #wySw4 写配置，要求精确到参数名：loop: true；autoplay 的 delay 必须是 3200 毫秒，并且 disableOnInteraction 为 false（手动滑动后不停）；pagination 用 el 指向 #wyPag4 且 clickable: true；初始效果为 cube；Swiper 11 的 pagination 必须写成对象形式。

### 第 2 轮 AI 回答（正确）

```js
new Swiper('#wySw4', {
  loop: true,
  effect: 'cube',
  autoplay: { delay: 3200, disableOnInteraction: false },
  pagination: { el: '#wyPag4', clickable: true },
});
```

**验证结论**：粘进页面刷新——自动 3.2 秒翻 ✅、拖动松手后继续自动播 ✅、点圆点跳转 ✅、立方体效果 ✅。四项需求全部通过。

### 答辩要点

- 第一版提示词漏掉了三个"隐形需求"：时长毫秒数、交互后不停止、圆点可点击——只说了"自动轮播、有圆点"，AI 就给默认值。
- 第二轮我改成"需求 1:1 对应参数名"的写法（delay 必须是 3200、disableOnInteraction 为 false、pagination 写成对象），AI 就没有自由发挥空间了。
- AI 第一次的代码错在：`pagination: '.swiper-pagination'` 是旧版字符串写法，无法携带 clickable 配置；`autoplay: true` 用默认 3000ms，不满足 3.2 秒。

---

## 任务二 · creative 仿写「电影墙」（⭐⭐⭐）

参考官方示例 257-effect-creative.html + AI 讲解，为演示四新增第 7 个按钮「creative 电影墙」：

```js
creativeEffect: {
  limitProgress: 2,
  prev: { translate: ['-120%', 0, -320], rotate: [0, 0, -16] },
  next: { translate: ['115%', 0, 150],  rotate: [0, 0, 12]  },
}
```

### 用自己的话回答：prev / next 的 transform 各控制什么？

- **prev 控制上一张**在切换时"退场"到哪里：translate 的三个值是 [x, y, z] 位移，x 负值往左移、**z 负值往屏幕深处退（看起来变小）**；rotate 的第三个值让它绕 z 轴歪 16 度。合起来就是"缩小左移带角度地退到幕后"。
- **next 控制下一张**从哪里"进场"：x 正值让它从右边 115% 容器宽处滑进来，z 正值让它稍微前倾（看起来比正常大一点，有"凑近镜头"的电影感），旋转 12 度保持歪着的海报感。

### 答辩抽问自测

- **transform 里的百分号是相对谁的？** —— 相对 swiper 容器（.swiper）自身的宽高，不是相对 slide。
- **改一个数值让卡片转 20 度** —— 把 prev 的 rotate 改成 `[0, 0, -20]`（或 next 改 `[0, 0, 20]`）。

---

## 任务三 · 综合创作（⭐⭐⭐ 加分项）

### ① 第六件展品：爱达·魔都号

- 四个轮播（#wySw1 ~ #wySw4）各新增一张 slide：`<img src="swiper-imgs/aidao_1.jpg">` + 标题「爱达·魔都号」+ 说明文字，三层结构完整（swiper-slide 内 img + wy-cap 说明层）。
- 图片说明：爱达·魔都号为中国首艘国产大型邮轮，2024 年 1 月 1 日商业首航，横版 16:9 由 AI 生成，保存为 `swiper-imgs/aidao_1.jpg`（生成提示词已存入 yqx_prompt.md）。

### ② 超纲能力：keyboard 键盘控制（四选一）

```js
keyboard: {
  enabled: true,        // 开启方向键翻页
  onlyInViewport: true, // 只有轮播在视口内时才响应按键，避免干扰页面滚动
}
```

**这段代码什么意思**：keyboard 模块监听 document 的 keydown 事件，PageDown / 方向右键翻到下一张，方向左键翻到上一张；`onlyInViewport: true` 表示轮播滚出屏幕外时按键仍归页面滚动用，不会"隔空控轮播"。

**AI 第一次给的不对的地方**：AI 最初只给了 `keyboard: true`，能用但翻到页面下方时按方向键会同时触发轮播翻页和页面滚动——我追问后加上 `onlyInViewport: true` 解决。

**验证**：刷新页面，鼠标点一下演示四区域让它获得焦点，按 → 键翻下一张、← 键翻上一张，自动播放不受影响。

---

## 🇨🇳 思政升华 · 给重器一个舞台

这节课学的只是一个轮播组件，但我记住了那句话：技术没有温度，用技术的人才让它有了温度。做完三个任务我最深的体会是——轮播的"自动播放"像重器研制的一代代接续，天眼之父南仁东用 22 年把"不可能"变成"中国天眼"，爱达·魔都号让中国集齐了造船业皇冠上的三颗明珠；而学代码的我们，也像 Swiper 的 speed 参数一样，每次只进步 800 毫秒，但 loop 为 true，就永远有下一张。轮播终会翻页，但奋斗者的故事永远自动播放。学好手中的组件，将来为讲好中国故事搭台。
