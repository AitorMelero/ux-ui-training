---
title: 'Sistemas de diseño y componentes'
description: 'Comprende qué es un design system, por qué se organiza en componentes reutilizables y cómo escala el trabajo de un equipo.'
category: ui
order: 3
exercises:
    - id: sistemas-mc-1
      type: multiple-choice
      prompt: "¿Qué es un 'sistema de diseño' (design system)?"
      allowMultiple: false
      options:
          - text: 'Un archivo de Figma con la última pantalla diseñada.'
            correct: false
            explanation: 'Un archivo de pantallas es un diseño puntual; el sistema de diseño es la infraestructura reutilizable detrás de todas esas pantallas.'
          - text: 'Un conjunto de estándares (componentes, patrones, principios y documentación) reutilizables que aseguran consistencia entre distintos productos o pantallas.'
            correct: true
            explanation: 'Correcto. Un sistema de diseño define piezas reutilizables (botones, inputs, colores, tipografía) y las reglas para combinarlas, para que el producto se sienta coherente sin reinventar cada pantalla desde cero.'
          - text: 'Una librería exclusiva para desarrolladores que los diseñadores nunca consultan.'
            correct: false
            explanation: 'Un buen sistema de diseño lo comparten diseño y desarrollo: el mismo lenguaje visual y de comportamiento en ambos lados.'
    - id: sistemas-order-1
      type: ordering
      prompt: 'Según la metodología Atomic Design, ordena estos niveles de composición del más pequeño al más grande.'
      items:
          - 'Átomos (ej. un botón, una etiqueta, un input)'
          - 'Moléculas (ej. un campo de búsqueda: input + botón)'
          - 'Organismos (ej. una barra de navegación completa)'
          - 'Plantillas y páginas (la composición final con contenido real)'
      explanation: 'Atomic Design, propuesto por Brad Frost, compara el diseño de interfaces con la química: elementos simples (átomos) se combinan en unidades funcionales (moléculas), que a su vez forman secciones completas (organismos), hasta llegar a pantallas reales.'
    - id: sistemas-mc-2
      type: multiple-choice
      prompt: "Un equipo tiene el mismo botón 'Guardar' diseñado de siete formas distintas en siete pantallas diferentes. ¿Qué problema revela esto?"
      allowMultiple: false
      options:
          - text: 'Falta de un sistema de diseño con componentes reutilizables y documentados.'
            correct: true
            explanation: 'Correcto. Sin componentes centralizados, cada persona del equipo termina reinventando (y variando ligeramente) los mismos elementos, lo que rompe la consistencia y multiplica el trabajo de mantenimiento.'
          - text: 'Que el equipo es muy creativo y eso es positivo.'
            correct: false
            explanation: 'La variación involuntaria en elementos que deberían ser idénticos no es creatividad: es inconsistencia, y confunde al usuario y ralentiza al equipo.'
          - text: 'Que faltan más colores en la paleta.'
            correct: false
            explanation: 'El problema descrito es de consistencia de componentes, no de variedad de colores disponibles.'
    - id: sistemas-free-1
      type: free-text
      prompt: '¿Cómo se llama a una pieza de interfaz reutilizable y autocontenida (como un botón, una tarjeta o un campo de formulario) que se documenta y se usa repetidamente en distintas pantallas?'
      acceptedAnswers:
          - 'componente'
          - 'componente de ui'
          - 'component'
      explanation: 'Los componentes son los bloques de construcción reutilizables de un sistema de diseño: se diseñan (y a menudo se programan) una sola vez y se reutilizan en todo el producto, en lugar de recrearse pantalla a pantalla.'
---

## Dejar de reinventar la rueda en cada pantalla

Cuando un producto crece, y sobre todo cuando lo trabaja más de una persona, resulta prácticamente imposible mantener la consistencia visual y de comportamiento a base de buena voluntad. Un botón terminará teniendo tres tonos de azul ligeramente distintos, un formulario usará bordes redondeados en una pantalla y rectos en otra, y cada quien acabará resolviendo los mismos problemas de interacción de formas distintas. Un **sistema de diseño** existe para evitar justamente eso: es un conjunto documentado de estándares (componentes visuales, patrones de interacción, principios de diseño, reglas de contenido) que se reutiliza en todo el producto, de modo que cualquier pantalla nueva se construye combinando piezas ya probadas, en lugar de partir de cero.

## Componentes: los bloques reutilizables

La pieza central de cualquier sistema de diseño es el **componente**: un elemento de interfaz autocontenido —un botón, un campo de texto, una tarjeta, un menú desplegable— que se diseña y documenta una única vez, con todas sus variantes (tamaños, estados: normal, hover, deshabilitado, con error) y se reutiliza en todas las pantallas que lo necesiten. Una metodología muy citada para organizar estos componentes es **Atomic Design**, de Brad Frost, que toma prestada la metáfora de la química: los **átomos** son los elementos más básicos e indivisibles (un botón, una etiqueta), las **moléculas** combinan átomos en unidades funcionales simples (un campo de búsqueda es un input más un botón), y los **organismos** combinan moléculas en secciones completas de interfaz (una cabecera con logo, buscador y menú).

## El sistema de diseño como lenguaje común

Más allá de ahorrar trabajo, un sistema de diseño cumple una función de comunicación: se convierte en el vocabulario compartido entre diseño y desarrollo. Cuando ambos equipos hablan del mismo "componente de tarjeta" con las mismas variantes definidas, se eliminan ambigüedades y malentendidos en la implementación. Además, cuando hay que corregir un problema (por ejemplo, mejorar el contraste de un botón para cumplir accesibilidad), basta con corregirlo una vez en el componente para que el cambio se propague automáticamente a todas las pantallas que lo usan, en lugar de tener que localizar y corregir manualmente cada aparición individual del botón por todo el producto.
