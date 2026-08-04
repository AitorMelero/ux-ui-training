# 🎓 ux-ui-training

Plataforma de lecciones interactivas en español para aprender UX/UI, construida con [Astro](https://astro.build/) y TypeScript.

Cada lección combina teoría con ejercicios interactivos (ordenar pasos, texto libre, opción múltiple) y guarda el progreso del alumno en el navegador.

---

## 📑 Table of Contents

- [🎓 ux-ui-training](#-ux-ui-training)
- [🧰 Tech Stack](#-tech-stack)
- [📚 Categorías de lecciones](#-categorías-de-lecciones)
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
- 📦 Astro Content Collections + Zod (contenido y ejercicios de las lecciones)
- 🧪 Vitest

---

## 📚 Categorías de lecciones

Las lecciones (`src/content/lessons/`) se organizan en seis categorías, cada una con niveles (principiante, intermedio, avanzado) y subcategorías:

- **UX** — Experiencia de Usuario
- **UI** — Interfaz de Usuario
- **Componentes** — Componentes de Interfaz
- **Negocio** — Lógica de Negocio
- **Proyectos** — Proyectos de Diseño UX/UI
- **Empleo** — Búsqueda de Empleo

Cada lección puede incluir ejercicios interactivos (ordenar, texto libre u opción múltiple) definidos en su frontmatter y validados con Zod.

---

## 📁 Project Structure

```
src/
│── __tests__/           # Tests (Vitest), agrupados aquí en lugar de junto al código fuente
│── components/           # Componentes Astro reutilizables (tarjetas, filtros, sidebar...)
│    └── exercises/       # Componentes de los tres tipos de ejercicio interactivo
│── content/
│    └── lessons/         # Contenido de las lecciones (Markdown + frontmatter)
│── layouts/               # Layouts compartidos (base y con sidebar)
│── lib/                   # Lógica de dominio: categorías, niveles, búsqueda, progreso...
│── pages/                 # Rutas de la web (incluye rutas dinámicas por categoría y lección)
│── scripts/               # Scripts de cliente, uno por componente interactivo
│── styles/                # Estilos globales
│── types/                 # Tipos compartidos
│── content.config.ts      # Definición y validación (Zod) de la colección de lecciones
public/
```

---

## ⚙️ Installation

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone git@github.com:AitorMelero/ux-ui-training.git

# Navigate into the folder
cd ux-ui-training

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
