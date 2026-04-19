


# 🚀 Sahil Sharma Portfolio

A modern, responsive, and interactive developer portfolio built with **React + Vite + TypeScript**, showcasing projects, skills, and experience.

🌐 Live Site: https://sahil-sharma-603.github.io/



## 🛠️ Tech Stack

* ⚛️ React (with TypeScript)
* ⚡ Vite
* 🎨 Tailwind CSS
* 🎞️ Framer Motion
* 🧩 Lucide Icons
* 📦 gh-pages (deployment)

---

## 📁 Project Structure

```
src/
 ├── components/
 ├── pages/
 ├── assets/
 ├── hooks/
 └── App.tsx
```

---

## 🚀 Features

* Responsive modern UI
* Smooth scrolling navigation
* Animated sections using Framer Motion
* Downloadable resume
* Project showcase section
* Skills & experience sections
* Mobile-friendly design

---

## 🌐 Deployment (GitHub Pages)

This project is deployed using **GitHub Pages** with Vite build output.

### 📌 Live Hosting URL:

👉 [https://sahil-sharma-603.github.io/](https://sahil-sharma-603.github.io/)

---

## ⚙️ How Deployment Works

This project uses:

* Vite for production build
* `gh-pages` package for deployment
* GitHub Pages for hosting static files

---

## 📦 Build & Deploy Steps

### 1️⃣ Install dependencies

```bash
npm install
```

---

### 2️⃣ Run locally

```bash
npm run dev
```

---

### 3️⃣ Build for production

```bash
npm run build
```

This generates the `dist/` folder.

---

### 4️⃣ Deploy to GitHub Pages

```bash
npm run deploy
```

This pushes the `dist` folder to the `gh-pages` branch automatically.

---

## ⚙️ Vite Configuration (Important)

For GitHub Pages deployment:

```ts
export default defineConfig({
  base: "/",
});
```

> Since this is a user site (`username.github.io`), base must be `/`.

---

## 🌿 GitHub Pages Setup

In your repository:

1. Go to **Settings**
2. Click **Pages**
3. Set:

   * Branch: `gh-pages`
   * Folder: `/ (root)`
4. Save

---

## 🔁 Update Workflow

Whenever you make changes:

```bash
git add .
git commit -m "update portfolio"
git push origin main

npm run build
npm run deploy
```

---

## 📜 Resume

Resume is available inside the project:

```
/public/Sahil_Sharma_Resume.pdf
```

---

## 🧠 Key Learnings

* Vite build system
* Component-based architecture in React
* GitHub Pages deployment workflow
* Responsive UI design
* Animation with Framer Motion

---

## 🙌 Author

**Sahil Sharma**

* GitHub: [Sahil-Sharma-603](https://github.com/Sahil-Sharma-603)
* Portfolio: [https://sahil-sharma-603.github.io](https://sahil-sharma-603.github.io)

---

## ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub!



