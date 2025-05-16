# Firebase NextJS Template

A modern, extensible template for building full-stack web applications with [Next.js](https://nextjs.org/), [Shadcn UI](https://ui.shadcn.com/), [Jotai](https://jotai.org/), [Firebase](https://firebase.google.com/), and [BiomeJS](https://biomejs.dev/). This template provides authentication, state management, a beautiful UI, and is ready for deployment.

---

## ✨ Features

- **Next.js 15** with App Router and TypeScript
- **Shadcn UI** components for rapid, accessible UI development
- **Jotai** for atomic, scalable state management
- **Firebase** integration (client & admin SDKs)
- **Google Authentication** out of the box
- **BiomeJS** for formatting and linting
- **TailwindCSS** for utility-first styling
- **Serverless functions** with Firebase Cloud Functions
- Modular, extensible code structure

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) 15
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Jotai](https://jotai.org/)
- [Firebase](https://firebase.google.com/) (Auth, Firestore, Functions)
- [BiomeJS](https://biomejs.dev/) (formatter & linter)
- [ESLint](https://eslint.org/)

---

## 📁 Directory Structure

```
├── app/                # Next.js app directory (routing, pages, layouts)
│   ├── api/            # REST Api endpoints
│   ├── app/            # The authenticated pages
│   ├── auth/           # Authentication pages and routes
│   ├── page.tsx        # Landing/public page
│   └── layout.tsx      # Global layout
├── components/         # Reusable UI components
│   ├── ui/             # Shadcn UI primitives (Button, Input, Sidebar, etc.)
│   ├── AppSidebar/     # Sidebar navigation
│   ├── Loader/         # Loading spinner
│   ├── UserBadge/      # User info display
│   └── Login/          # Google login button
├── lib/                # Utilities and Firebase setup
│   ├── firebase/       # Firebase client SDK config
│   ├── firebase-admin/ # Firebase Admin SDK config
│   ├── auth.ts         # Auth helpers (session validation)
│   └── store.ts        # Jotai state store
├── functions/          # Firebase Cloud Functions (TypeScript)
├── public/             # Static assets
├── package.json        # Project metadata and scripts
├── biome.json          # BiomeJS config
├── tsconfig.json       # TypeScript config
└── README.md           # This file
```

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- [Firebase account](https://firebase.google.com/)
- [BiomeJS](https://biomejs.dev/) CLI and editor extension (optional, but highly recommended)

### 2. Clone the Repository
```bash
git clone https://github.com/mschunke/nextjs-firebase-template.git
cd nextjs-template
```

### 3. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 4. Firebase Setup
1. **Create a Firebase project** at [console.firebase.google.com](https://console.firebase.google.com/).
2. **Enable Authentication** (Google Sign-In) and Firestore in your Firebase project.
3. **Get your Firebase config** (from Project Settings > General > Your apps > Firebase SDK snippet).
4. **Configure the client SDK:**
   - Edit `lib/firebase/index.ts` and replace the placeholder values in `firebaseConfig` with your actual Firebase config.
5. **Configure the Admin SDK:**
   - Go to Project Settings > Service Accounts > Generate new private key.
   - Download the JSON and save it as `firebase-credentials.json` in the project root. (Do **not** commit this file!)

### 5. Environment Variables
- No `.env` file is required by default. All sensitive config is handled via `firebase-credentials.json` and `lib/firebase/index.ts`.

### 6. Authentication Cookie
- Open the `app/auth/token/route.ts` file.
- On line #18, replace the placeholder with a cookie for server-side authentication.

### 7. Run the Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### 8. Linting & Formatting
- **BiomeJS:**
  ```bash
  npx biome check .
  npx biome format .
  ```
- **ESLint:**
  ```bash
  npm run lint
  ```

### 9. Build for Production
```bash
npm run build
npm start
```

---

## 🔐 Authentication
- Google Sign-In via Firebase Auth (`/auth` page)
- Session management with secure cookies
- Server-side session validation using Firebase Admin SDK

---

## 🧩 State Management
- [Jotai](https://jotai.org/) is used for global state (see `lib/store.ts` for user store example).

---

## 🖌️ UI Components
- Shadcn UI primitives in `components/ui/` (Button, Input, Sidebar, etc.)
- Modular components: Sidebar, Loader, UserBadge, Login, etc.
- Easily extendable for your own UI needs.

---

## ☁️ Serverless Functions
- Write Firebase Cloud Functions in `/functions/src/` (TypeScript)
- Example function provided (see `functions/src/index.ts`)
- Deploy with Firebase CLI

---

## 🤝 Contributing
- Use BiomeJS and ESLint for code style and formatting.
- PRs are welcome! Please open an issue first for major changes.

---

## 📝 License

[MIT](LICENSE)
