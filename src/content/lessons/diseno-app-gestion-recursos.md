---
title: 'Diseñar una aplicación de gestión de recursos (tipo Jira)'
description: 'Los retos específicos de diseñar herramientas de gestión de tareas y proyectos: densidad de información, vistas múltiples de los mismos datos y estados que cambian constantemente.'
category: projects
level: advanced
order: 5
subcategory: herramientas-y-plataformas
exercises:
    - id: gestion-recursos-mc-1
      type: multiple-choice
      prompt: 'En una aplicación de gestión de tareas como Jira o Trello, ¿por qué suele ser buena idea ofrecer varias vistas (tablero Kanban, lista, calendario) de los mismos datos?'
      allowMultiple: false
      options:
          - text: 'Porque distintos roles y momentos del trabajo necesitan distintas formas de ver la misma información: un desarrollador quiere ver el flujo de estados, mientras que un responsable de proyecto puede necesitar ver fechas límite en un calendario.'
            correct: true
            explanation: 'Correcto. La misma tarea es relevante de formas distintas según quién la mira y para qué: el dato es el mismo, pero la vista óptima cambia según la pregunta que se está respondiendo.'
          - text: 'Porque así se pueden mostrar más anuncios publicitarios en la interfaz.'
            correct: false
            explanation: 'Las vistas múltiples responden a necesidades reales de distintos roles y flujos de trabajo, no a un objetivo publicitario.'
          - text: 'Porque los usuarios se aburren de ver siempre la misma pantalla.'
            correct: false
            explanation: 'No es una cuestión de variedad por aburrimiento, sino de que cada vista responde mejor a preguntas distintas sobre el mismo conjunto de datos.'
    - id: gestion-recursos-mc-2
      type: multiple-choice
      prompt: 'Este tipo de aplicaciones suele mostrar mucha información densa (estado, asignado, prioridad, fecha) en poco espacio. ¿Qué principio de UI ayuda a que esa densidad no se convierta en caos visual?'
      allowMultiple: false
      options:
          - text: 'Una jerarquía visual clara: usar tamaño, color y peso tipográfico de forma consistente para que el ojo distinga de un vistazo lo más importante (por ejemplo, prioridad alta) de lo secundario (por ejemplo, un identificador interno).'
            correct: true
            explanation: 'Correcto. Con mucha información en poco espacio, una jerarquía visual consistente es lo que permite escanear la pantalla rápido en lugar de leer cada dato uno a uno.'
          - text: 'Eliminar todos los colores para que la interfaz sea completamente monocromática.'
            correct: false
            explanation: 'El color, usado con criterio (por ejemplo, para indicar prioridad o estado), suele ser una herramienta útil en este tipo de interfaces, no algo a eliminar.'
          - text: 'Reducir el tamaño de fuente al mínimo legal para caber más información.'
            correct: false
            explanation: 'Reducir el tamaño de fuente al límite perjudica la legibilidad; la densidad se gestiona con jerarquía y organización, no reduciendo el texto hasta el límite.'
    - id: gestion-recursos-free-1
      type: free-text
      prompt: 'El tipo de vista visual, con columnas que representan estados (por ejemplo "Por hacer", "En curso", "Hecho") y tarjetas que se mueven entre ellas, muy habitual en herramientas de gestión de tareas, se llama tablero...'
      acceptedAnswers:
          - 'kanban'
      explanation: 'Un tablero Kanban organiza las tareas en columnas por estado, permitiendo ver de un vistazo cuánto trabajo hay en cada fase y detectar cuellos de botella (por ejemplo, muchas tarjetas acumuladas en "En revisión").'
---

## Un dominio con datos complejos y usuarios exigentes

Diseñar una herramienta de gestión de tareas o proyectos (tipo Jira, Trello o Asana) tiene un reto particular: los datos son relacionales y complejos (una tarea tiene estado, asignado, prioridad, fecha, dependencias con otras tareas...) y los usuarios suelen ser personas que usan la herramienta muchas horas al día, por lo que valoran la eficiencia por encima de la estética llamativa.

## Paso 1: Modelar el dominio antes de diseñar pantallas

Antes de dibujar nada, conviene tener claro el modelo de datos: qué es una tarea, cómo se agrupa (en proyectos, sprints, épicas), qué estados puede tener y qué transiciones son válidas entre ellos. Diseñar sin este modelo claro produce pantallas que luego no encajan con cómo funciona realmente el trabajo que se gestiona.

## Paso 2: Diseñar varias vistas de los mismos datos

Este tipo de producto rara vez tiene una sola forma "correcta" de ver la información. Un tablero Kanban muestra el flujo de estados; una vista de lista permite ordenar y filtrar con precisión; un calendario o línea de tiempo (Gantt) muestra fechas y dependencias. El reto de diseño no es elegir una vista, sino diseñar un modelo de datos y de interacción que funcione bien representado de varias formas.

## Paso 3: Gestionar la densidad de información

Con muchos campos por tarea, la tentación es mostrarlo todo siempre. Es mejor definir una jerarquía clara: qué campos se ven siempre en la vista compacta (título, asignado, estado) y qué campos solo aparecen al abrir el detalle. El color y el peso tipográfico ayudan a distinguir lo urgente de lo secundario sin necesidad de leer cada palabra.

## Paso 4: Diseñar para la edición rápida, no solo para la lectura

A diferencia de un blog o un portfolio, aquí los usuarios editan constantemente: cambian un estado arrastrando una tarjeta, reasignan una tarea, ajustan una fecha. Cada una de estas acciones debe poder hacerse con el mínimo de clics posible, con confirmación visual inmediata (por ejemplo, la tarjeta se mueve al instante, sin esperar a recargar la página).

## Un ejemplo rápido

Al diseñar la tarjeta de tarea que aparece en un tablero Kanban: se decide mostrar siempre el título, un avatar de la persona asignada y una etiqueta de prioridad con color; la fecha límite solo se muestra si está próxima o vencida (para no saturar visualmente tareas sin urgencia); y el resto de campos (descripción, comentarios, historial) se reserva para la vista de detalle al hacer clic.

## Ejemplos de herramientas de gestión de recursos reales

- [Linear](https://linear.app) — ejemplo de interfaz densa en información pero muy cuidada en jerarquía visual y velocidad de interacción.
- [Trello](https://trello.com) — referencia clásica del patrón de tablero Kanban con tarjetas arrastrables.
