# 藍新金流
### 主題
電商平台串接藍新金流實作範例

### 說明
讓用戶於結帳時，可使用第三方金流進行信用卡付款。

---

## 專案技術
- **後端語言**：Node.js
- **後端框架**：Express
- **資料庫**：PostgreSQL
- **金流串接**：藍新金流
  - [npm crypto](https://docs.google.com/document/d/1nVPBKYH3sq2TRhVvIVKyb49n3gqXKBiGmQd02dOceG0/edit?usp=drive_link) 進行訂單資料加密、解密

---

## 環境變數說明
```bash
# Server
PORT=3000

# Logging
LOG_LEVEL=debug                  # 可選: error, warn, info, debug, verbose

# Database Config
DB_HOST=your_host
DB_PORT=5432
DB_USERNAME=your_user
DB_PASSWORD=your_password
DB_DATABASE=your_database
DB_SYNCHRONIZE=true              # true 僅建議開發環境使用
DB_ENABLE_SSL=true               # 若部署於 Render、Heroku 等通常需設為 true

# 藍新 Newebpay Config
HASHIV=your_hashiv
HASHKEY=your_hashkey
MerchantID=your_merchantId
Version=your_version
Host=your_host
ReturnUrl=your_returnUrl
NotifyUrl=your_notifyUrl

# Redis Config
REDIS_URL=your_redisUrl          # 部署的 Redis URL

```

---

## 第三方服務
- 藍新金流

---

## 關於作者
```bash
姓名: Tau 
Email: jason850629@gmail.com
GitHub: https://github.com/TauHsu
```

如果您有任何問題或建議，歡迎與我聯繫。感謝閱讀！
