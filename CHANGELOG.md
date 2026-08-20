# Changelog

Todos los cambios relevantes de este proyecto se documentan en este fichero.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
y este proyecto sigue [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2026-08-20

### Added

- Lección "Nomenclatura tipográfica" en la categoría UI, sobre los nueve roles tipográficos usados en sistemas de diseño (display, headline, heading, title, subtitle, body, caption, overline y label).

### Changed

- El agente `release-manager` ahora analiza también si `README.md` necesita actualizarse a raíz de los cambios de cada nueva versión.

### Fixed

- El README se actualiza para reflejar la categoría "Psicología UX" y el script `pnpm sync`, que faltaban desde su incorporación.

## [1.2.0] - 2026-08-17

### Added

- Categoría "Psicología UX", con tres subcategorías (memoria y carga cognitiva, toma de decisiones y sesgos, percepción) y seis lecciones nuevas.
- Subcategoría "Comercio y conversión" dentro de Proyectos de diseño UX/UI, con cuatro lecciones nuevas: diseñar un e-commerce, diseñar banca y fintech, diseñar una landing page y diseñar flujos transversales (login, onboarding y checkout).
- Agente `release-manager` para gestionar el ciclo completo de una nueva versión: análisis de cambios, CHANGELOG, versión, PRs y Release de GitHub.
- Integración de CodeGraph para que los agentes de IA que trabajan en este repo puedan consultar la estructura del código en vez de recurrir a búsquedas por texto.

### Changed

- El favicon por defecto de Astro se sustituye por el logo propio (dos pantallas/tarjetas superpuestas).

## [1.1.0] - 2026-08-12

### Added

- Botón para ir a la siguiente lección de la misma categoría sin salir de la lección actual.
- El enlace "volver a todas las lecciones" ahora lleva a la categoría de origen de la lección en vez de al inicio.
- Logo/cabecera persistente visible en todas las páginas, incluidas las lecciones, que lleva a la página de inicio.

## [1.0.0] - 2026-08-04

### Added

- Plataforma de lecciones interactivas de UX/UI, con ejercicios de ordenar pasos, texto libre y opción múltiple.
- Seguimiento del progreso del alumno guardado en `localStorage`.
- Currículo ampliado a 24 lecciones organizadas por nivel (principiante, intermedio, avanzado).
- Rutas por categoría (`/ux`, `/ui`) y página 404 a medida.
- Sidebar de navegación entre categorías.
- Buscador de lecciones en la home y en las páginas de categoría.
- Filtro de lecciones por nivel.
- Categoría de Componentes de Interfaz, con las buenas prácticas de los elementos de UI más habituales.
- Categoría de Lógica de Negocio, sobre cómo las decisiones de diseño se conectan con objetivos de negocio.
- Categoría de Proyectos de Diseño, con ejercicios guiados de principio a fin.
- Categoría de Búsqueda de Empleo, con consejos para preparar la candidatura como diseñador/a UX/UI.
- Flujo `/nueva-tarea` y agente `task-workflow` para automatizar el ciclo tarea → Pull Request de este repo.

### Changed

- Traducción de todos los textos de la interfaz al español.
- El sidebar de categorías pasa de lista fija a menú desplegable colapsable.
- La cabecera de cada página de categoría se reordena (título por encima del buscador y los filtros) e incorpora una descripción de la categoría.
- Los estilos CSS y los scripts de cliente de cada componente se separan en ficheros independientes, y se amplía la cobertura de tests.
- El README se actualiza para describir la plataforma real, en castellano.

### Fixed

- El badge de "lección completada" ya no aparece en tarjetas de lecciones que no se han completado.
