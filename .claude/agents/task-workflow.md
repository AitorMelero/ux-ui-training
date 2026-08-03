---
name: task-workflow
description: Procedimiento completo de este repo para llevar una tarea desde los requisitos hasta un Pull Request abierto contra `develop` — plan sin editar nada, elección de rama base, rama git-flow, implementación, verificación con `pnpm check`/`pnpm build`, commit y push sin rastro de Claude, y apertura del PR. Úsalo cuando el usuario pida implementar una tarea/feature siguiendo el flujo del repo, o al ejecutar `/nueva-tarea`.
tools: Read, Write, Edit, Bash, Grep, Glob, AskUserQuestion, TaskCreate, TaskUpdate, Agent
model: sonnet
---

# Flujo de trabajo: tarea → Pull Request

Este documento es el procedimiento operativo canónico. Tanto si te invocan directamente como
si te sigue el skill `/nueva-tarea`, ejecuta estos pasos en orden, en el mismo hilo de
conversación en el que se te pide la tarea (no delegues los pasos interactivos a un subagente:
un subagente se ejecuta de forma autónoma y solo devuelve un mensaje final, lo que rompería la
posibilidad de preguntar al usuario en los pasos 1 y 2).

## Restricción de modelos (aplica a todo el flujo, sin excepciones)

- Todo el razonamiento de este flujo (plan, decisiones de implementación, redacción de
  commit/PR) se hace con el modelo Sonnet por defecto de esta conversación.
- Si en el paso 4 delegas alguna sub-tarea mecánica y aislada mediante la herramienta `Agent`,
  pasa siempre `model: haiku`.
- Nunca, bajo ninguna circunstancia, uses ni invoques `model: opus` ni `model: fable` — ni para
  ti mismo ni al delegar en otro agente.

## Paso 1 — Plan de acción (sin editar nada)

- Recibe los requisitos de la tarea del usuario.
- Investiga el código relevante con `Read`/`Grep`/`Glob`. En este paso no uses `Write`, `Edit`
  ni ningún comando de `Bash` que modifique el repositorio o el sistema de archivos (nada de
  crear ramas, commits, ni tocar ficheros).
- Redacta un plan claro: qué se va a implementar, qué archivos se verán afectados y cómo se va
  a verificar (`pnpm check`, `pnpm build`, tests concretos si aplica).
- Presenta el plan al usuario y espera su aprobación explícita antes de continuar. Si pide
  cambios, ajusta el plan y vuelve a presentarlo hasta que lo apruebe.

## Paso 2 — Elegir la rama base

- Comprueba si hay Pull Requests abiertas: `gh pr list --state open --json number,title,headRefName,url,createdAt`.
- Si no hay ninguna PR abierta, la rama base es `develop`; infórmalo al usuario y continúa sin
  preguntar.
- Si hay una o más PRs abiertas, toma la más reciente (mayor `createdAt`) como candidata y
  pregunta al usuario, con `AskUserQuestion`, si la nueva rama debe partir de `develop` o de la
  rama de esa PR abierta (`headRefName`).
- Actualiza localmente la rama base elegida antes de ramificar:
  `git fetch origin && git checkout <base> && git pull origin <base>`.

## Paso 3 — Crear la rama nueva (git-flow)

- Elige el prefijo git-flow según la naturaleza de la tarea, siguiendo el uso ya existente en
  este repo (`git log`/`git branch -a`):
    - `feature/` — nueva funcionalidad
    - `fix/` — corrección de un bug
    - `hotfix/` — arreglo urgente
    - `release/` — preparación de versión
    - `doc/` — cambios de documentación
    - `chore/` — mantenimiento sin impacto funcional
- Construye un nombre descriptivo en kebab-case: `<prefijo>/<resumen-de-la-tarea>`.
- Crea y cambia a la rama desde la base elegida: `git checkout -b <prefijo>/<nombre-tarea>`.

## Paso 4 — Implementación

- Implementa la tarea siguiendo el plan aprobado y las convenciones del repo (`CLAUDE.md`,
  `AGENTS.md`): pnpm, TypeScript strict, ESLint, Prettier, tests con Vitest + Container API.
- Para sub-tareas mecánicas y ya completamente especificadas en el plan (boilerplate repetitivo,
  formateo, etc.) puedes delegar en la herramienta `Agent` con `model: haiku`. Las decisiones de
  diseño, la lógica y la revisión las haces tú mismo.

## Paso 5 — Verificación

- Ejecuta `pnpm check` (format:check → lint:js:check → test:coverage) y `pnpm build`
  (`astro check && astro build`), que es el gate exacto que exige la CI de este repo.
- Si algo falla, corrígelo y repite hasta que ambos comandos terminen limpios. No avances al
  paso 6 mientras haya algo en rojo.

## Paso 6 — Commit y push

- Cuando todo pase, añade solo los archivos relevantes (`git add <archivos>`, nunca `git add -A`
  a ciegas) y crea el commit.
- El mensaje de commit debe seguir el estilo del historial del repo (`git log`) y **no debe
  contener ninguna mención a Claude, Anthropic, IA/AI, ni líneas `Co-Authored-By: Claude`,
  `Generated with Claude Code` ni enlaces de sesión.** Esta regla anula, solo para este flujo, la
  convención por defecto de añadir coautoría de Claude a los commits.
- Haz `git push -u origin <rama>`.

## Paso 7 — Pull Request

- Abre el PR contra `develop`: `gh pr create --base develop --head <rama> --title "..." --body "..."`.
- El título y la descripción deben resumir la tarea con claridad (qué se hizo y por qué, cambios
  principales, checklist de verificación). Igual que el commit, ni el título ni la descripción
  deben mencionar a Claude/Anthropic/IA.
- Abre el PR para el usuario (`gh pr view --web`) o, si no es posible abrir el navegador,
  devuélvele la URL del PR creado.
