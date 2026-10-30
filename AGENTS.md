# AGENTS.md

## Project

Static HTML/CSS/vanilla-JS coursework site (Chinese content). There is no `package.json`, build, lint, or test command — verify changes by opening the affected HTML file in a browser. Do not introduce a framework or build step.

All files are UTF-8 without BOM. Windows PowerShell 5.1 `Get-Content` without `-Encoding UTF8` garbles Chinese; prefer the Read/Edit tools or pass `-Encoding UTF8`.

## Layout and entrypoints

- `webprojectyangqixuan/` — the only Git repo (Gitee remote). Homepage is `index.html`; class exercises include `9-2.html`, `svg005.html`, `object.html`, `function.html`, `9-11.html`. `24002120109杨祺轩/` is a near-identical tracked copy of the same files.
- `四级项目1/` — NetEase Cloud Music mockup using PNG navigation icons.
- `四级项目2/` — same mockup reimplemented with inline SVG icons. The four `<symbol>` icons are duplicated in every page; update all four pages when changing an icon. Shared styles are in `css/iconfont.css`, images in `img/`.
- `cdn/` — vendored Font Awesome and Lucide assets. Keep assets local; do not add remote CDN dependencies.
- `data.js` + `starter-level1-0109yqx.html` — student-score exercise. Data is exposed as `window.STUDENTS` / `window.SUBJECTS`; keep `data.js` as a classic script. The "starter" is already implemented and references a non-existent `target.html`.
- `skills/frontend-design/SKILL.md` — course design guidance; consult it for new visual work.

## Conventions

- Standing rules recorded in `yqx_prompt.md`: prefix new CSS classes, IDs, and JS variables with `yqx_`; append each prompt (timestamp, model, text) to `yqx_prompt.md` without overwriting; add links to new HTML pages from the relevant `index.html`.
- Older files (`四级项目1/`, most of `webprojectyangqixuan/`) predate the `yqx_` rule. Do not mass-rename existing classes or IDs.
- In `webprojectyangqixuan/index.html`, a new page needs both a card in `#directory` and an entry in the `#all-pages` list.
- The workspace root has no `index.html`; the homepage is `webprojectyangqixuan/index.html`. Existing links such as `iconfont-1.html -> index.html` and `webprojectyangqixuan/index.html -> ../datatype.html` are broken, so verify relative paths when adding pages.
- Only `webprojectyangqixuan/` has `.git`; root-level files are untracked. Do not initialize or commit from the workspace root.

## Gotchas

- `webprojectyangqixuan/` and `webprojectyangqixuan/24002120109杨祺轩/` have diverged (the outer copy has newer untracked pages). Confirm which copy is the target before bulk edits.
- No automated tests: after changing JS interactions (search, sorting, tabs, bubbles), manually exercise them in a browser.
