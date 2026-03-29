# YouTube 合规下载助手（Chrome 扩展）

> 这是一个**合规指引型**扩展：
>
> - 为观看者提供 YouTube Premium 离线保存官方说明入口。
> - 为创作者提供 YouTube Studio（下载自己上传视频）入口。
> - 不提供绕过平台规则的下载能力。

## 文件结构

- `manifest.json`：扩展配置（Manifest V3）
- `popup.html` / `popup.css` / `popup.js`：弹窗 UI 与逻辑

## 本地安装

1. 打开 Chrome，进入 `chrome://extensions/`
2. 打开右上角“开发者模式”
3. 点击“加载已解压的扩展程序”
4. 选择本目录：`chrome-extension-youtube-helper`

## 使用方式

1. 在任意页面点击扩展图标打开弹窗
2. 点击：
   - “打开官方帮助”：查看 YouTube Premium 离线保存说明
   - “打开 YouTube Studio”：前往 Studio（登录后可下载你自己上传的视频）
