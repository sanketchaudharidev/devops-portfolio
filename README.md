# Sanket Chaudhari — DevOps Engineer Portfolio

A production-quality personal portfolio website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Three.js / React Three Fiber**.

This portfolio communicates engineering discipline, zero-downtime release management, AWS cloud infrastructure orchestration, and CI/CD pipelines.

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- **Node.js** v18+ (tested on v20 and v22)
- **npm** v9+

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/GITHUB_USERNAME/REPOSITORY_NAME.git
cd REPOSITORY_NAME

# Install dependencies
npm install
```

### 3. Run Dev Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build Production Bundle
```bash
npm run build
```
The compiled, production-ready static assets will be output to `./dist`.

---

## 🌐 Deploy to GitHub Pages

### Step-by-Step GitHub Pages Setup:

1. **Create GitHub Repository:**
   - Create a new public/private repository on GitHub (e.g. `devops-portfolio` or `username.github.io`).

2. **Configure Base Path (if deploying to subpath):**
   - If your repository is hosted at `https://USERNAME.github.io/REPOSITORY_NAME/`, the `vite.config.ts` uses relative paths (`./`) by default, so it works out-of-the-box in both root and subdirectories.
   - Alternatively, pass the environment variable during build:
     ```bash
     VITE_BASE_PATH=/REPOSITORY_NAME/ npm run build
     ```

3. **Enable GitHub Pages:**
   - Go to your GitHub repository **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.

4. **Push to Main Branch:**
   ```bash
   git init
   git add .
   git commit -m "Initial release of DevOps portfolio"
   git branch -M main
   git remote add origin https://github.com/GITHUB_USERNAME/REPOSITORY_NAME.git
   git push -u origin main
   ```

5. **Automated CI/CD:**
   - The included workflow `.github/workflows/deploy.yml` automatically triggers on every push to `main`, builds the TypeScript application, and deploys the bundle to GitHub Pages.

---

## 🛠️ How to Customize & Update Profile Data

### 1. Update Profile Data (`src/data/profile.ts`)
All text, work experiences, skills, impact metrics, and project details are centrally defined in [`src/data/profile.ts`](./src/data/profile.ts). Modifying this file immediately updates all sections across the website.

### 2. Replace Resume PDF
- Place your new resume PDF into `public/Sanket_Chaudhari_DevOps_Engineer_Resume.pdf`.
- If your filename is different, update `resumeFilename` and `resumeUrl` in `src/data/profile.ts`.

### 3. Add GitHub and LinkedIn Links
In `src/data/profile.ts`, update the `placeholders` object:
```typescript
placeholders: {
  github: {
    text: "github.com/yourusername",
    url: "https://github.com/yourusername",
    isPlaceholder: false,
  },
  linkedin: {
    text: "linkedin.com/in/yourprofile",
    url: "https://linkedin.com/in/yourprofile",
    isPlaceholder: false,
  },
}
```

### 4. 3D Topology Customization or Fallback
- **Topology Nodes & Connections:** Configured in `src/components/three/InfrastructureHeroScene.tsx`.
- **Reduced Motion & Fallback:** Users with `prefers-reduced-motion` or devices without WebGL automatically receive a lightweight static SVG topology diagram (`src/components/three/StaticFallbackTopology.tsx`).

### 5. Color Theme & Accents
- Color tokens are defined in `tailwind.config.js` and `src/styles/index.css`.
- Accents:
  - Sky Blue: `#38bdf8` (Primary brand / CI/CD)
  - Emerald Green: `#10b981` (Telemetry / Production status)
  - Amber: `#f59e0b` (AWS Cloud)

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deploy workflow
├── public/
│   ├── Sanket_Chaudhari_DevOps_Engineer_Resume.pdf
│   ├── favicon.svg
│   └── ...
├── src/
│   ├── components/
│   │   ├── common/                 # Button, Badge, Modal, SectionHeading
│   │   ├── layout/                 # Navbar, Footer, Container
│   │   ├── three/                  # 3D Infrastructure Hero Scene & Fallback
│   │   └── terminal/               # Interactive Easter Egg terminal
│   ├── sections/                   # Hero, About, Experience, Pipeline, Skills, Impact, Projects, Contact
│   ├── data/
│   │   └── profile.ts              # Structured single-source-of-truth data
│   ├── hooks/                      # useReducedMotion, useScrollSpy
│   ├── styles/                     # Tailwind & design system tokens
│   ├── types/                      # TypeScript definitions
│   ├── App.tsx                     # Main layout
│   └── main.tsx                    # React DOM entry
├── index.html                      # SEO metadata & JSON-LD Person schema
├── vite.config.ts                  # Vite configuration for GitHub Pages
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🔒 Security & Quality Standards
- No secrets or API keys are required or committed.
- Factual representation: 100% verified against primary resume data.
- Accessible: Screen-reader friendly semantic HTML, full keyboard navigation, and `prefers-reduced-motion` support.
