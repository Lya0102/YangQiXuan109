---
name: commit-to-github
description: 将本项目（高级网页设计课程项目）提交 commit 并 push 到 GitHub 仓库 Lya0102/YangQiXuan109，使用已配置的 SSH 公钥认证。当用户要求"提交到github"、"commit并push"、"推送代码到GitHub"或同步项目备份时使用。
---

# 提交到 GitHub

## 目标仓库

- GitHub 仓库：`https://github.com/Lya0102/YangQiXuan109.git`
- 认证方式：SSH 公钥（已在本机配置），远程地址必须使用 SSH 形式：
  `git@github.com:Lya0102/YangQiXuan109.git`
- 默认分支：`main`

## 执行步骤

1. **检查仓库状态**：在工作区根目录执行 `git status`，确认改动文件；若还不是 git 仓库，执行 `git init -b main` 初始化。
2. **确认远程**：执行 `git remote -v`；若没有 `origin`，添加：
   ```
   git remote add origin git@github.com:Lya0102/YangQiXuan109.git
   ```
3. **提交**：
   - 将相关文件加入暂存区（优先按文件名添加；新增大量文件时可用 `git add .`）。
   - 提交信息用简短中文，说明本次改动内容，例如：
     ```
     git commit -m "更新四级项目2图像解决方案页面"
     ```
4. **推送**：
   ```
   git push -u origin main
   ```
   首次连接若提示主机指纹确认，允许写入 `~/.ssh/known_hosts`。
5. **验证**：push 成功后用 `git log --oneline -1` 确认最新提交，`git status` 确认工作区干净。

## 注意事项

- 永远不要 `push --force`；推送被拒（non-fast-forward）时先 `git pull --rebase origin main` 再重试。
- 不要提交大体积无关文件（缓存、临时目录）；可用 `.gitignore` 排除 `.trae/`、`Thumbs.db` 等。
- 提交前确认 git 身份存在（本机已配置：杨祺轩 3519784361@qq.com），不要修改全局 git 配置。
- 若 SSH 认证失败，提示用户检查 `ssh -T git@github.com` 的输出，不要改用 HTTPS 凭据方式。
