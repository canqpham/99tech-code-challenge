# 99Tech Code Challenge

[![Deploy Status](https://github.com/canqpham/99tech-code-challenge/workflows/Deploy%20Vite%20App%20to%20GitHub%20Pages/badge.svg)](https://github.com/canqpham/99tech-code-challenge/actions)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://canqpham.github.io/99tech-code-challenge/)

A comprehensive React TypeScript project showcasing solutions to three technical challenges, built with modern web development best practices.

## Features

### **Problem 1: Three Ways to Sum to N**

- **O(1) Mathematical Formula** - Instant calculation using arithmetic series
- **O(n) Recursion** - Functional recursive approach
- **O(n) Iteration** - Traditional loop-based solution
- Real-time performance comparison

### **Problem 2: Currency Swap Form**

- **Real-time Exchange Rates** - Live data from Fawaz Ahmed API
- **Animated UI** - Smooth swap animations with Framer Motion
- **Optimized Performance** - React.memo and useMemo implementations
- **Responsive Design** - Mobile-first responsive layout

### **Problem 3: Code Review & Refactoring**

- **Interactive Code Analysis** - Monaco Editor integration
- **Performance Improvements** - 95% reduction in computational overhead
- **Best Practice Implementation** - TypeScript and React patterns
- **Detailed Documentation** - Comprehensive refactoring analysis

## Technology Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** TailwindCSS 4, shadcn/ui components
- **Animation:** Framer Motion
- **Code Editor:** Monaco Editor
- **Icons:** Lucide React
- **Build Tool:** Vite 7
- **Deployment:** GitHub Actions + GitHub Pages

## Prerequisites

Before setting up the project, ensure you have:

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0 (or **yarn** >= 1.22.0)
- **Git** for version control

### Check Your Versions

```bash
node --version   # Should be >= 18.0.0
npm --version    # Should be >= 8.0.0
git --version    # Any recent version
```

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/canqpham/99tech-code-challenge.git
cd 99tech-code-challenge
```

### 2. Install Dependencies

```bash
# Using npm (recommended)
npm install

# Or using yarn
yarn install
```

### 3. Start Development Server

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

### 4. Open in Browser

```bash
# Development server will start at:
http://localhost:5173
```

## Available Scripts

| Script    | Description              | Usage             |
| --------- | ------------------------ | ----------------- |
| `dev`     | Start development server | `npm run dev`     |
| `build`   | Build for production     | `npm run build`   |
| `preview` | Preview production build | `npm run preview` |
| `lint`    | Run ESLint checks        | `npm run lint`    |

### Development Workflow

```bash
# Start development
npm run dev

# In another terminal, check for linting issues
npm run lint

# Build and test production version
npm run build
npm run preview
```

## 📁 Project Structure

```
99tech-code-challenge/
├── 📂 .github/
│   └── workflows/           # GitHub Actions deployment
├── 📂 public/              # Static assets
├── 📂 src/
│   ├── 📂 components/      # Reusable UI components
│   │   └── ui/            # shadcn/ui components
│   ├── 📂 features/       # Feature-specific components
│   │   ├── fancyForm/     # Currency swap functionality
│   │   ├── messyReact/    # Code review & refactoring
│   │   └── sumToN/        # Mathematical algorithms
│   ├── 📂 lib/            # Utility functions
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── 📄 CODE_REFACTORING_ANALYSIS.md  # Detailed code analysis
├── 📄 package.json                  # Dependencies and scripts
├── 📄 tailwind.config.js           # TailwindCSS configuration
├── 📄 tsconfig.json                # TypeScript configuration
└── 📄 vite.config.ts               # Vite build configuration
```

## How to Use

### **1. Sum to N Calculator**

1. Navigate to the "Sum to N" section
2. Enter any positive integer
3. Compare performance across three algorithms:
   - Mathematical formula (fastest)
   - Recursion (functional approach)
   - Iteration (traditional loops)

### **2. Currency Swap Form**

1. Go to the "Currency Swap" section
2. Enter amount in the "From" field
3. Select currencies from dropdowns
4. Watch real-time conversion
5. Click swap button for animated currency exchange
6. Confirm the swap to complete transaction

### **3. Code Review Analysis**

1. Visit the "Messy React" section
2. Review the original buggy code
3. Compare with optimized version
4. Read detailed analysis in [CODE_REFACTORING_ANALYSIS.md](./CODE_REFACTORING_ANALYSIS.md)

## API Integration

### Exchange Rates API

- **Endpoint:** `https://interview.switcheo.com/prices.json`
- **Rate Limit:** None (free tier)

## Configuration

### Environment Variables

Create a `.env` file for local development:

```bash
VITE_CURRENCY_API_URL=https://interview.switcheo.com/prices.json
```

### Vite Configuration

Key settings in `vite.config.ts`:

```typescript
export default defineConfig({
  base: "/99tech-code-challenge/", // GitHub Pages base path
  plugins: [react()],
  // Additional optimizations...
});
```

## 🚀 Deployment

### Automatic Deployment (GitHub Pages)

This project automatically deploys to GitHub Pages when you push to `main` branch.

**Live Demo:** [https://canqpham.github.io/99tech-code-challenge/](https://canqpham.github.io/99tech-code-challenge/)

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist folder to your hosting provider
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 📄 License

This project is created for the 99Tech code challenge and is available under the MIT License.

## 👤 Author

**Can Pham**

- GitHub: [@canqpham](https://github.com/canqpham)

---

**⭐ If you found this project helpful, please consider giving it a star!**
