---
title: 'Principios de color y contraste'
description: 'Usa el color con intención y garantiza que el texto sea legible para todas las personas, incluidas las que tienen baja visión.'
category: ui
order: 1
exercises:
    - id: color-mc-1
      type: multiple-choice
      prompt: 'Según las pautas WCAG 2.1 (nivel AA), ¿cuál es la ratio de contraste mínima recomendada entre texto normal y su fondo?'
      allowMultiple: false
      options:
          - text: '1.5:1'
            correct: false
            explanation: 'Una ratio tan baja apenas se distingue del fondo; no cumple ningún nivel de WCAG para texto normal.'
          - text: '4.5:1'
            correct: true
            explanation: 'Correcto. WCAG 2.1 AA exige 4.5:1 para texto normal (y 3:1 para texto grande, a partir de 18pt o 14pt en negrita).'
          - text: '10:1'
            correct: false
            explanation: '10:1 supera incluso el nivel AAA (7:1); no es el mínimo exigido para el nivel AA habitual.'
    - id: color-mc-2
      type: multiple-choice
      prompt: 'Un formulario marca los campos con error solo cambiando el borde a color rojo, sin ningún otro indicador. ¿Qué problema de accesibilidad tiene?'
      allowMultiple: false
      options:
          - text: 'Ninguno, el rojo es un color universalmente reconocido como error.'
            correct: false
            explanation: 'Una persona con daltonismo (deficiencia en la percepción del rojo-verde) puede no distinguir ese cambio de color respecto al estado normal.'
          - text: 'Depende únicamente del color para transmitir información, lo cual excluye a personas con daltonismo o baja visión.'
            correct: true
            explanation: 'Correcto. Las pautas de accesibilidad piden no usar el color como único medio para transmitir información; hay que añadir un icono, un texto o un patrón adicional.'
          - text: 'El rojo es un color prohibido en interfaces web.'
            correct: false
            explanation: 'El rojo no está prohibido; el problema es usarlo como única señal, sin apoyo de texto o iconografía.'
    - id: color-order-1
      type: ordering
      prompt: 'Ordena estos tipos de paleta de color según su función habitual en un sistema de diseño, empezando por la que define la identidad de marca.'
      items:
          - 'Color primario (identidad de marca)'
          - 'Colores secundarios (apoyo y variedad visual)'
          - 'Colores semánticos (éxito, error, advertencia)'
          - 'Escala de grises (texto, fondos, bordes)'
      explanation: 'El color primario suele anclar la identidad visual; los secundarios aportan variedad; los semánticos comunican estado; y la escala de grises resuelve la mayoría del texto y los fondos neutros de una interfaz.'
    - id: color-free-1
      type: free-text
      prompt: '¿Cómo se llama la propiedad óptica que mide la diferencia de luminosidad entre un texto y su fondo, y que determina si ese texto es legible?'
      acceptedAnswers:
          - 'contraste'
          - 'ratio de contraste'
          - 'contraste de color'
      explanation: 'El contraste (o ratio de contraste) es la base de la legibilidad: sin suficiente diferencia de luminosidad entre texto y fondo, incluso una tipografía grande resulta difícil de leer.'
---

## El color comunica antes que decora

El color en una interfaz no es solo estética: es un lenguaje. Antes de que una persona lea una sola palabra, el color ya le está diciendo algo: que un botón es la acción principal, que un mensaje es un error, que un campo está deshabilitado. Un sistema de color bien diseñado asigna significado de forma consistente (rojo para error, verde para éxito, el color de marca para las acciones principales) y lo mantiene igual en toda la aplicación, para que el usuario no tenga que volver a aprenderlo en cada pantalla.

## Contraste: la base de la legibilidad

Por muy bonita que sea una paleta, si el texto no se distingue del fondo, la interfaz falla en su función más básica: comunicar. El **contraste** mide la diferencia de luminosidad entre un color de texto y su fondo, y se expresa como una ratio (por ejemplo, 4.5:1). Las Pautas de Accesibilidad para el Contenido Web (WCAG) establecen mínimos según el nivel de conformidad: el nivel AA, el más habitual en proyectos profesionales, exige una ratio de al menos 4.5:1 para texto normal y 3:1 para texto grande. Cumplir estos mínimos no es un capricho legal: garantiza que personas con baja visión, o simplemente alguien mirando la pantalla con luz solar directa, puedan leer el contenido sin esfuerzo.

## No dependas solo del color

Una regla de accesibilidad frecuentemente olvidada es que el color nunca debe ser el único medio para transmitir una información. Alrededor de un 8% de los hombres tiene alguna forma de daltonismo, y para ellos un simple cambio de color (de gris a rojo, por ejemplo) puede pasar completamente desapercibido. Por eso, un campo de formulario con error debería mostrar también un icono y un mensaje de texto, y un gráfico con varias series de datos debería diferenciarlas también por forma o patrón, no solo por tono. Diseñar así no solo ayuda a personas con daltonismo: también mejora la experiencia en pantallas de mala calidad o con brillo alto, donde los matices de color se pierden con facilidad.
