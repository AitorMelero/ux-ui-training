# 🎓 ux-ui-training

Plataforma de lecciones interactivas en español para aprender UX/UI, construida con [Astro](https://astro.build/) y TypeScript.

Cada lección combina teoría con ejercicios interactivos (ordenar pasos, texto libre, opción múltiple) y guarda el progreso del alumno en el navegador.

---

## 📑 Índice

- [🎓 ux-ui-training](#-ux-ui-training)
- [🧰 Tecnologías](#-tecnologías)
- [📚 Categorías de lecciones](#-categorías-de-lecciones)
- [📁 Estructura del proyecto](#-estructura-del-proyecto)
- [⚙️ Instalación](#️-instalación)
- [🧪 Scripts disponibles](#-scripts-disponibles)
- [🤝 Contribuir](#-contribuir)

---

## 🧰 Tecnologías

Este proyecto está construido con:

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

## 📁 Estructura del proyecto

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

## ⚙️ Instalación

Sigue estos pasos para ejecutar el proyecto en local:

```bash
# Clona el repositorio
git clone git@github.com:AitorMelero/ux-ui-training.git

# Entra en la carpeta
cd ux-ui-training

# Instala las dependencias
pnpm install
```

Este proyecto usa las versiones de Node.js y pnpm fijadas en `.nvmrc` y `package.json#packageManager`.

---

## 🧪 Scripts disponibles

En el directorio del proyecto puedes ejecutar:

```bash
pnpm dev                # Inicia el servidor de desarrollo
pnpm build              # Comprueba tipos (astro check) y compila para producción
pnpm preview            # Previsualiza la build de producción
pnpm format:check       # Ejecuta Prettier para comprobar errores de formato
pnpm format:fix         # Ejecuta Prettier para corregir errores de formato
pnpm lint:js:check      # Ejecuta ESLint para comprobar errores de lint
pnpm lint:js:fix        # Ejecuta ESLint para corregir errores de lint
pnpm test               # Ejecuta los tests
pnpm test:coverage      # Ejecuta los tests con cobertura
pnpm test:ui            # Ejecuta la interfaz de tests
pnpm check              # Ejecuta formateadores, linters y tests con cobertura
```

---

## 🤝 Contribuir

Las contribuciones son bienvenidas 🎉

Pasos:

1. Haz un fork del proyecto
2. Crea una rama (`git checkout -b feature/new-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add new feature'`)
4. Haz push a tu rama (`git push origin feature/new-feature`)
5. Abre un Pull Request
