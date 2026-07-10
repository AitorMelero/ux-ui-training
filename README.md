# 📦 mele-astro-template

Astro + TypeScript starter template with linting, formatting, and testing pre-configured.

Based on the same conventions as [mele-vite-react-typescript-template](https://github.com/AitorMelero/mele-vite-react-typescript-template), adapted for [Astro](https://astro.build/) instead of React.

---

## 📑 Table of Contents

- [📦 mele-astro-template](#-mele-astro-template)
- [🧰 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Installation](#️-installation)
- [🧪 Available Scripts](#-available-scripts)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🧰 Tech Stack

This project is built with:

- 🚀 Astro
- 🟦 TypeScript
- 🧪 Vitest

---

## 📁 Project Structure

```
src/
│── __tests__/
│── pages/
│    └── index.astro
public/
```

---

## ⚙️ Installation

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone <REPO_URL>

# Navigate into the folder
cd <PROJECT_NAME>

# Install dependencies
pnpm install
```

This project targets the Node.js and pnpm versions pinned in `.nvmrc` and `package.json#packageManager`.

---

## 🧪 Available Scripts

In the project directory, you can run:

```bash
pnpm dev                # Start development server
pnpm build              # Type-check (astro check) and build for production
pnpm preview            # Preview production build
pnpm format:check       # Run Prettier to check format errors
pnpm format:fix         # Run Prettier to fix format errors
pnpm lint:js:check      # Run ESLint to check lint errors
pnpm lint:js:fix        # Run ESLint to fix lint errors
pnpm test               # Run tests
pnpm test:coverage      # Run tests coverage
pnpm test:ui            # Run tests interface
pnpm check              # Run all formatters, linters and tests with coverage
```

---

## 🤝 Contributing

Contributions are welcome 🎉

Steps:

1. Fork the project
2. Create a branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to your branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## 📄 License

Specify the project license here.

Example:

MIT © Your Name
