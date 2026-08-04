# Changelog

Todos los cambios relevantes de este proyecto se documentan en este fichero.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
y este proyecto sigue [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
