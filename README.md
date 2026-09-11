# Luma — 私人陪伴空間

可直接部署到 GitHub Pages 的靜態前端 MVP，包含個人檔案、角色書、聊天與共同記憶庫。

## 本機啟動

```bash
npm install
npm run dev
```

## 建置與 GitHub Pages

```bash
npm run build
```

將 `dist/` 目錄部署至 GitHub Pages。網站資料、角色卡與 API 連線設定均儲存在瀏覽器的 Local Storage 中。

## OpenAI 相容 API

在「設定」填入 API Base URL（不含 `/chat/completions`）、API Key 和模型名稱。瀏覽器會向：

```
{API Base URL}/chat/completions
```

發送 Chat Completions 請求。請確認服務供應商允許瀏覽器跨域請求（CORS），並理解金鑰僅應用於你信任的個人環境。
