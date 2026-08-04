---
title: 'Pestañas (Tabs)'
description: 'Cómo dividir contenido relacionado en secciones alternables sin perder de vista dónde está cada cosa.'
category: components
level: intermediate
order: 11
subcategory: navegacion
exercises:
    - id: tabs-mc-1
      type: multiple-choice
      prompt: '¿Cuándo son las pestañas (tabs) la solución adecuada frente a, por ejemplo, mostrar todo el contenido en una sola pantalla larga?'
      allowMultiple: false
      options:
          - text: 'Cuando el contenido se puede dividir en secciones del mismo nivel de importancia, relacionadas entre sí, pero que normalmente no se consultan todas a la vez.'
            correct: true
            explanation: 'Correcto. Las pestañas funcionan bien cuando alternar entre secciones es más habitual que verlas todas seguidas; si casi siempre hace falta ver todo junto, una página continua con scroll es mejor opción.'
          - text: 'Siempre que haya más de un bloque de contenido en la pantalla, sin excepción.'
            correct: false
            explanation: 'No toda combinación de bloques de contenido debe convertirse en pestañas; depende de si tiene sentido ocultar unos mientras se ve otro.'
          - text: 'Cuando se quiere ocultar información poco importante para que pase desapercibida.'
            correct: false
            explanation: 'Las pestañas organizan contenido de igual importancia en secciones alternables, no sirven para esconder información secundaria de forma deliberada.'
    - id: tabs-mc-2
      type: multiple-choice
      prompt: '¿Cuál es un error común al diseñar un conjunto de pestañas?'
      allowMultiple: true
      options:
          - text: 'Incluir demasiadas pestañas para el espacio disponible, obligando a truncar textos o a un scroll horizontal poco evidente.'
            correct: true
            explanation: 'Correcto. Más allá de cinco o seis pestañas, conviene reconsiderar la estructura (por ejemplo, agrupando en un menú desplegable) en lugar de forzarlas todas en una fila.'
          - text: 'No indicar con claridad cuál es la pestaña activa, dejando que el usuario tenga que hacer clic para descubrirlo.'
            correct: true
            explanation: 'Correcto. La pestaña activa debe distinguirse claramente en todo momento (color, subrayado, fondo), sin necesidad de interacción para saberlo.'
          - text: 'Usar el mismo componente de pestañas en distintas pantallas de la misma aplicación.'
            correct: false
            explanation: 'Reutilizar el mismo componente de forma consistente en toda la aplicación es una buena práctica, no un error.'
    - id: tabs-free-1
      type: free-text
      prompt: 'Cuando se navega por una pestaña con el teclado (flecha derecha/izquierda) sin que el contenido cambie hasta pulsar una tecla adicional, ¿qué patrón de activación se está usando frente a la activación automática al recibir el foco?'
      acceptedAnswers:
          - 'activacion manual'
          - 'activación manual'
          - 'manual'
      explanation: 'La "activación manual" (moverse entre pestañas con las flechas y confirmar con Intro o Espacio) es el patrón de accesibilidad recomendado cuando cambiar de pestaña implica cargar contenido nuevo, frente a la "activación automática" que cambia el contenido con solo mover el foco.'
---

## Por qué existen: varias secciones, un mismo espacio

Las pestañas (tabs) permiten mostrar varias secciones de contenido relacionado dentro del mismo espacio de pantalla, mostrando solo una a la vez. Son útiles cuando el contenido se divide de forma natural en categorías del mismo nivel de importancia —por ejemplo, "Descripción", "Especificaciones" y "Opiniones" en la ficha de un producto— que la persona usuaria consulta de una en una, no todas a la vez.

## Anatomía de las pestañas

<div style="margin:1.25rem 0;">
    <div role="tablist" style="display:flex;gap:1.5rem;border-bottom:2px solid #eef0f4;">
        <button style="padding:0.6rem 0;border:none;border-bottom:2px solid #364fc7;background:none;font-weight:700;color:#364fc7;margin-bottom:-2px;">Descripción</button>
        <button style="padding:0.6rem 0;border:none;background:none;color:#495057;">Especificaciones</button>
        <button style="padding:0.6rem 0;border:none;background:none;color:#495057;">Opiniones (128)</button>
    </div>
    <div style="padding:1rem 0;font-size:0.9rem;color:#495057;">Contenido del panel "Descripción"...</div>
</div>

- **Lista de pestañas (tablist)**: la fila de controles que permite cambiar de sección.
- **Pestaña (tab)**: cada control individual, con su estado activo/inactivo claramente diferenciado.
- **Panel**: el contenido asociado a la pestaña activa; solo un panel es visible a la vez.
- **Indicador de activa**: normalmente un subrayado o cambio de color en la pestaña seleccionada.

## Buenas prácticas de diseño

- **Limita el número de pestañas a lo que cabe cómodamente sin truncar texto** (en la práctica, entre tres y seis); más allá de eso, valora otra estructura, como un menú desplegable o subpáginas independientes.
- **La pestaña activa debe ser inequívoca de un vistazo**, no solo detectable pasando el ratón por encima.
- **Cada pestaña debe llevar a un contenido claramente distinto**, nunca variaciones mínimas del mismo contenido que confundan sobre qué cambió.
- **Haz que las pestañas sean navegables por teclado** con las flechas izquierda/derecha, y confirma el cambio de panel con Intro o Espacio (activación manual) si el contenido requiere carga.
- **Si el contenido de una pestaña puede compartirse con una URL propia** (por ejemplo, para enlazar directamente a "Opiniones"), refleja la pestaña activa en la URL.
- **No escondas dentro de una pestaña una acción crítica que la mayoría de usuarios necesita**; si casi todo el mundo tiene que visitar esa pestaña, probablemente no debería estar oculta detrás de un clic.
