---
name: nueva-tarea
description: Ejecuta el flujo completo de este repo para implementar una tarea nueva - plan de acción sin editar nada, elección de rama base (develop o la rama de la última PR abierta), creación de rama git-flow, implementación, verificación con pnpm check/pnpm build, commit y push sin rastro de Claude, y apertura de Pull Request hacia develop. Actívalo al escribir /nueva-tarea, o cuando el usuario pida implementar una tarea siguiendo "el flujo habitual" de este repo.
---

# /nueva-tarea

Punto de entrada al flujo de trabajo de este repo. El procedimiento completo, paso a paso, está
definido en el agente `.claude/agents/task-workflow.md` — este skill existe para asegurar que se
ejecuta **en este mismo hilo de conversación**, no en un subagente aparte, porque el flujo
necesita poder preguntarte cosas (aprobación del plan, rama base) y un subagente invocado con la
herramienta `Agent` se ejecuta de forma autónoma y solo devuelve un mensaje final al terminar.

## Cómo proceder

1. Lee `.claude/agents/task-workflow.md` si no lo tienes ya en contexto.
2. Toma los requisitos de la tarea de `$ARGUMENTS`; si no se han dado, pídeselos al usuario.
3. Sigue tú mismo, en esta conversación, los pasos 1 a 7 descritos en ese documento —
   incluidas las preguntas al usuario de los pasos 1 (aprobación del plan) y 2 (rama base). No
   uses la herramienta `Agent` para ejecutar esos pasos interactivos.
4. Respeta la restricción de modelos del documento: tú trabajas con el modelo Sonnet por defecto
   de esta conversación; si delegas alguna sub-tarea mecánica de implementación con la
   herramienta `Agent`, hazlo siempre con `model: haiku`. Nunca uses `model: opus` ni
   `model: fable`, ni para ti ni al delegar.
