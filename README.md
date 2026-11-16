<h1 align="center">Shirube</h1>

<p align="center">
  <i>Shirube is a simple, fast, privacy-focused open-source web and product analytics platform.</i>
</p>

---

## 🚀 Getting Started

### Requirements
- Node.js version 20+ (22 or 24 recommended)
- PostgreSQL database version 12+ (or MySQL)
- `pnpm` (run `npm install -g pnpm`)

### 🛠 Quick Start with Docker
```bash
docker compose up -d
```
Access the application at [http://localhost:3000](http://localhost:3000).

Default credentials:
- **Username:** `admin`
- **Password:** `umami` (you will be prompted to change it)

---

### 💻 Running Locally for Development

1. **Install dependencies**:
   ```bash
   pnpm install
   ```
2. **Configure `.env`**:
   ```env
   DATABASE_URL=postgresql://shirube:shirube@localhost:5432/shirube
   APP_SECRET=123456abcd
   DISABLE_TELEMETRY=1
   ```
3. **Initialize Database**:
   ```bash
   pnpm build:db
   pnpm db:migrate
   ```
4. **Start Development Server**:
   ```bash
   pnpm dev
   ```

---

## 📜 License
MIT License
