# offline-info-page-v2

第二套多语言问卷页面的 GitHub Pages 发布仓库。

- 页面地址：<https://zd94.github.io/offline-info-page-v2/>
- 源码目录：`offline-web-mvp-v2`
- 本目录只保存可部署的 `index.html` 与 `assets/`，不保存工作区和生成缓存。

发布内容由根项目的 `npm run web:v2:sync-publish` 生成，并在推送前通过
`npm run web:v2:verify-publish` 校验。
