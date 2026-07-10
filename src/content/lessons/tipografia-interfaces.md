---
title: 'Tipografía en interfaces'
description: 'Domina jerarquía, escalas y legibilidad tipográfica para que el texto de tu interfaz se lea sin esfuerzo.'
category: ui
order: 2
exercises:
    - id: tipografia-mc-1
      type: multiple-choice
      prompt: '¿Qué se recomienda generalmente para el cuerpo de texto de una interfaz web pensada para lectura prolongada?'
      allowMultiple: false
      options:
          - text: 'Un tamaño base de al menos 16px, con una altura de línea generosa (aprox. 1.4 a 1.6 veces el tamaño de fuente).'
            correct: true
            explanation: 'Correcto. Por debajo de 16px el texto obliga a acercarse a la pantalla, y una altura de línea ajustada dificulta seguir la lectura de una línea a la siguiente.'
          - text: 'Un tamaño base de 10px para aprovechar mejor el espacio de la pantalla.'
            correct: false
            explanation: '10px es demasiado pequeño para lectura cómoda en la mayoría de dispositivos y perfiles de usuario.'
          - text: 'Una altura de línea de 1.0 (sin espacio extra entre líneas) para que el texto ocupe menos alto.'
            correct: false
            explanation: 'Una altura de línea tan ajustada hace que las líneas se sientan apelmazadas y dificulta seguir la lectura.'
    - id: tipografia-mc-2
      type: multiple-choice
      prompt: "¿Cuál es la diferencia principal entre una tipografía 'serif' y una 'sans-serif'?"
      allowMultiple: false
      options:
          - text: 'Las serif tienen pequeños remates o trazos decorativos al final de las letras; las sans-serif no.'
            correct: true
            explanation: "Correcto. 'Sans-serif' significa literalmente 'sin remates'. Las sans-serif suelen preferirse en pantalla por su claridad a tamaños pequeños."
          - text: 'Las serif solo existen en mayúsculas.'
            correct: false
            explanation: 'Ambas familias tipográficas incluyen mayúsculas y minúsculas; esa no es la diferencia entre ellas.'
          - text: 'Las sans-serif son siempre más grandes que las serif.'
            correct: false
            explanation: 'El tamaño es una propiedad independiente del estilo tipográfico; no distingue a una familia de la otra.'
    - id: tipografia-order-1
      type: ordering
      prompt: 'Ordena estos niveles de una escala tipográfica típica, del texto más pequeño al más grande.'
      items:
          - 'Texto auxiliar / leyenda (caption)'
          - 'Cuerpo de texto (body)'
          - 'Subtítulo (h3/h4)'
          - 'Título principal (h1)'
      explanation: 'Una escala tipográfica bien definida crea jerarquía visual clara: el ojo sabe instintivamente qué leer primero según el tamaño relativo de cada nivel.'
    - id: tipografia-free-1
      type: free-text
      prompt: '¿Cómo se llama la medida (normalmente en píxeles, ems o un múltiplo del tamaño de fuente) que indica el espacio vertical entre líneas consecutivas de texto?'
      acceptedAnswers:
          - 'interlineado'
          - 'altura de linea'
          - 'altura de línea'
          - 'line height'
          - 'line-height'
      explanation: "El interlineado (line-height) controla cuánto 'respiran' las líneas de texto entre sí; muy poco y el texto se ve apelmazado, demasiado y pierde cohesión visual."
---

## La tipografía es interfaz, no decoración

En una interfaz digital, la inmensa mayoría de la información se transmite mediante texto, así que la tipografía es, en la práctica, una de las herramientas de diseño más importantes que existen, aunque a menudo pase desapercibida cuando está bien resuelta (y salte a la vista en cuanto falla). Elegir bien una tipografía no es solo cuestión de estilo: afecta directamente a la velocidad de lectura, a la comprensión y al esfuerzo que le exige a los ojos del usuario.

## Legibilidad: tamaño, interlineado y longitud de línea

Tres factores determinan si un bloque de texto se lee con comodidad. El **tamaño** de fuente debe adaptarse al contexto: para cuerpo de texto en pantalla, 16px suele considerarse el mínimo razonable para lectura prolongada, aunque el tamaño ideal depende también de la tipografía elegida. El **interlineado** (o _line-height_), el espacio vertical entre líneas, necesita ser lo bastante generoso como para que el ojo distinga claramente una línea de la siguiente sin perderse; un valor entre 1.4 y 1.6 veces el tamaño de fuente suele funcionar bien para párrafos. Y la **longitud de línea**, el número de caracteres por línea, no debería ser ni demasiado corta (obliga a saltar de línea constantemente) ni demasiado larga (el ojo pierde la línea al volver al margen izquierdo); entre 50 y 75 caracteres por línea es una referencia habitual.

## Jerarquía con una escala tipográfica

Una interfaz rara vez usa un solo tamaño de texto: usa una **escala tipográfica**, un conjunto limitado y coherente de tamaños (por ejemplo 12, 14, 16, 20, 24, 32px) que se reutiliza en toda la aplicación para crear jerarquía visual. El título más importante de una pantalla debe destacar claramente sobre los subtítulos, y estos sobre el cuerpo de texto, de modo que el usuario pueda escanear la pantalla y entender en segundos qué es lo más importante sin tener que leer cada palabra. Limitar la escala a pocos tamaños (en vez de improvisar un tamaño distinto en cada pantalla) también facilita mantener consistencia cuando el producto crece y lo trabajan varias personas.
