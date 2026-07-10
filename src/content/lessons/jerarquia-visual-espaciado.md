---
title: 'Jerarquía visual, espaciado y grid'
description: 'Usa tamaño, espaciado y una retícula consistente para guiar la mirada del usuario por la pantalla.'
category: ui
order: 4
exercises:
    - id: jerarquia-mc-1
      type: multiple-choice
      prompt: "¿Qué es la 'jerarquía visual' en el diseño de una interfaz?"
      allowMultiple: false
      options:
          - text: 'El orden en el que se organizan los archivos de diseño en carpetas.'
            correct: false
            explanation: 'Eso es organización de archivos de trabajo, no tiene relación con cómo percibe el usuario la pantalla.'
          - text: 'El orden en el que los elementos de una pantalla captan la atención del usuario, guiado por tamaño, color, contraste y posición.'
            correct: true
            explanation: 'Correcto. Una buena jerarquía visual hace que el ojo del usuario se dirija primero a lo más importante, sin necesidad de leer todo el texto para entender qué es prioritario.'
          - text: 'La cantidad total de elementos que caben en una pantalla.'
            correct: false
            explanation: 'La cantidad de elementos no define por sí sola la jerarquía; lo importante es cómo se diferencian entre sí en importancia visual.'
    - id: jerarquia-mc-2
      type: multiple-choice
      prompt: '¿Para qué sirve principalmente el espacio en blanco (whitespace) en una interfaz?'
      allowMultiple: true
      options:
          - text: 'Para agrupar visualmente elementos relacionados y separar los que no lo están.'
            correct: true
            explanation: 'Correcto. Según el principio de proximidad, los elementos cercanos entre sí se perciben como relacionados.'
          - text: "Para reducir la carga cognitiva, dando a los ojos del usuario zonas de 'descanso' entre bloques de contenido."
            correct: true
            explanation: 'Correcto. Una interfaz saturada, sin espacios de respiro, resulta más difícil y cansada de procesar.'
          - text: 'Para rellenar espacio vacío que sobra cuando no hay suficiente contenido.'
            correct: false
            explanation: 'El espacio en blanco es una decisión de diseño intencionada, no un simple relleno para ocupar huecos.'
    - id: jerarquia-order-1
      type: ordering
      prompt: "Ordena estas técnicas de menor a mayor 'peso visual' que aportan a un elemento (de la que menos destaca a la que más destaca)."
      items:
          - 'Texto en gris claro, tamaño pequeño'
          - 'Texto en negro, tamaño normal'
          - 'Texto en negrita, tamaño grande'
          - 'Botón con fondo de color sólido y alto contraste'
      explanation: 'El peso visual se construye combinando tamaño, contraste, color y forma; un botón con fondo sólido de color destaca mucho más que texto simple, incluso en negrita.'
    - id: jerarquia-free-1
      type: free-text
      prompt: '¿Cómo se llama la estructura invisible de columnas (y a veces filas) que ayuda a alinear y distribuir los elementos de una página de forma consistente?'
      acceptedAnswers:
          - 'grid'
          - 'retícula'
          - 'reticula'
          - 'cuadrícula'
          - 'cuadricula'
      explanation: 'El grid (o retícula) es un sistema de columnas invisibles que actúa como guía para alinear elementos, mantener márgenes consistentes y crear orden visual en toda la interfaz.'
---

## Guiar la mirada, no solo llenar la pantalla

Cuando alguien mira una pantalla por primera vez, no lee palabra por palabra: la escanea en un abrir y cerrar de ojos buscando pistas sobre qué es importante. La **jerarquía visual** es el diseño deliberado de esas pistas: usar tamaño, peso tipográfico, color, contraste y posición para indicar, sin palabras, qué elemento debería mirar primero, cuál después, y cuál puede ignorar si no le interesa. Una pantalla sin jerarquía —donde todo tiene el mismo tamaño y el mismo peso— obliga al usuario a leer todo el contenido para descubrir qué era lo importante, lo cual cansa y hace que abandone antes de encontrarlo.

## El espacio en blanco también diseña

Es tentador pensar que el espacio vacío de una interfaz es espacio "desperdiciado", pero ocurre justo lo contrario: el espacio en blanco (o _whitespace_) es una herramienta de diseño activa. Por el principio de proximidad de la Gestalt, los elementos que están cerca entre sí se perciben como relacionados, y los que están separados por más espacio se perciben como grupos distintos. Un formulario con las etiquetas pegadas a sus campos, pero con más separación entre un grupo de campos y el siguiente, comunica esa agrupación sin necesidad de líneas divisorias ni cajas. Además, el espacio en blanco da a los ojos del usuario zonas de descanso, reduciendo la sensación de saturación en pantallas con mucho contenido.

## El grid como columna vertebral

Para que el espaciado y la alineación se mantengan consistentes en toda una aplicación, la mayoría de los sistemas de diseño se apoyan en un **grid** (retícula): una estructura invisible de columnas, y a veces filas, con un ancho de margen y un espacio (_gutter_) entre columnas definidos de antemano. En vez de decidir a ojo dónde va cada elemento en cada pantalla, el diseñador alinea los elementos a las columnas del grid, lo que produce composiciones ordenadas y predecibles de forma casi automática. Los grids también facilitan el diseño responsive: una retícula de 12 columnas en escritorio puede colapsar a 4 columnas en móvil siguiendo reglas consistentes, en lugar de rediseñar cada pantalla desde cero para cada tamaño.
