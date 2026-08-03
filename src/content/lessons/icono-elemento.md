---
title: 'Icono (Icon)'
description: 'El icono como componente interactivo: cuándo basta un icono solo, cómo dimensionarlo y cómo mantenerlo accesible.'
category: components
level: beginner
order: 5
subcategory: acciones-contenido
exercises:
    - id: icono-mc-1
      type: multiple-choice
      prompt: '¿Cuándo es seguro usar un icono sin texto como único botón de una acción?'
      allowMultiple: false
      options:
          - text: 'Solo cuando el icono es universalmente reconocido en el contexto del producto (una lupa para buscar, una papelera para eliminar) y, aun así, sigue llevando una etiqueta accesible para lectores de pantalla.'
            correct: true
            explanation: 'Correcto. Incluso los iconos más reconocibles deben acompañarse de un texto accesible (visible o solo para lectores de pantalla) porque su significado no siempre es evidente para todo el mundo.'
          - text: 'Siempre, porque un icono ocupa menos espacio que un icono con texto.'
            correct: false
            explanation: 'Ahorrar espacio no compensa la ambigüedad: muchos iconos (por ejemplo, tres puntos o un "hamburguesa") no comunican una acción concreta sin contexto adicional.'
          - text: 'Nunca; todo icono interactivo debe llevar siempre texto visible junto a él.'
            correct: false
            explanation: 'Para iconos muy establecidos (cerrar, buscar, papelera) y en interfaces con poco espacio, es aceptable prescindir del texto visible siempre que se mantenga una etiqueta accesible.'
    - id: icono-mc-2
      type: multiple-choice
      prompt: '¿Por qué es importante mantener un tamaño y un grosor de trazo consistentes entre todos los iconos de una interfaz?'
      allowMultiple: true
      options:
          - text: 'Iconos de distinto grosor o estilo (algunos rellenos, otros de líneas) generan una sensación de inconsistencia visual, como si pertenecieran a productos distintos.'
            correct: true
            explanation: 'Correcto. Mezclar librerías o estilos de icono es uno de los errores de coherencia visual más comunes en productos que crecen rápido.'
          - text: 'Iconos con tamaños muy dispares entre sí rompen el alineamiento con el texto que los acompaña y dificultan escanear la interfaz.'
            correct: true
            explanation: 'Correcto. Un icono desproporcionado respecto al texto de su etiqueta parece un error de maquetación, no una decisión de diseño.'
          - text: 'Porque los navegadores no permiten renderizar iconos de tamaños distintos en la misma página.'
            correct: false
            explanation: 'No hay ninguna limitación técnica de ese tipo; el motivo es puramente de coherencia visual.'
    - id: icono-free-1
      type: free-text
      prompt: 'Cuando un icono no tiene texto visible junto a él, ¿qué tipo de etiqueta se le añade en el código para que un lector de pantalla pueda anunciar su función?'
      acceptedAnswers:
          - 'etiqueta accesible'
          - 'aria-label'
          - 'texto alternativo'
          - 'texto oculto'
      explanation: 'Un atributo tipo "aria-label" (o un texto visualmente oculto pero presente en el código) describe la función del icono para tecnologías de asistencia, sin necesidad de mostrar texto en pantalla.'
---

## Por qué existe: comunicación instantánea

Un icono comunica una idea de un solo vistazo, más rápido de lo que se tarda en leer una palabra, y ocupa una fracción del espacio de un texto equivalente. Por eso son omnipresentes en barras de navegación, botones de acción y listas de opciones. Pero esa misma economía de espacio es también su mayor riesgo: un icono ambiguo, sin contexto ni etiqueta accesible, puede convertirse en el elemento menos comprensible de toda la interfaz.

Esta lección se centra en el icono como **componente interactivo** (icono como botón, icono acompañando una etiqueta); si buscas los principios de estilo y consistencia visual de una librería de iconos completa, esa parte está cubierta en la lección de iconografía de la categoría UI.

## Anatomía de un icono como componente

<div style="display:flex;gap:1.5rem;margin:1.25rem 0;align-items:center;flex-wrap:wrap;">
    <button style="display:inline-flex;align-items:center;justify-content:center;width:2.75rem;height:2.75rem;border:1px solid #d8dbe3;border-radius:0.5rem;background:#fff;font-size:1.1rem;" aria-label="Buscar">🔍</button>
    <button style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.6rem 1rem;border:1px solid #d8dbe3;border-radius:0.5rem;background:#fff;font-size:0.9rem;">🗑️ Eliminar</button>
</div>

- **Glifo**: la forma visual del icono en sí, idealmente de un set consistente (mismo grosor de trazo, mismo estilo relleno/lineal).
- **Área táctil**: el espacio pulsable alrededor del glifo, siempre mayor que el propio dibujo para facilitar el toque.
- **Etiqueta accesible**: un texto —visible o solo para lectores de pantalla— que describe la acción, imprescindible cuando el icono va solo.
- **Estado**: color y opacidad cambian en reposo, hover, activo y deshabilitado, igual que en un botón de texto.

## Buenas prácticas de diseño

- **Un icono sin etiqueta accesible es una trampa para la accesibilidad.** Aunque no muestres texto visible, añade siempre una descripción en el código para que un lector de pantalla anuncie su función.
- **Usa un único set/librería de iconos en todo el producto.** Mezclar estilos (unos rellenos, otros de líneas finas) es uno de los errores de coherencia visual más comunes.
- **Reserva los iconos sin texto para acciones muy reconocidas** (buscar, cerrar, más opciones); para acciones menos comunes, acompaña siempre el icono de una palabra.
- **Mantén el tamaño proporcional al texto que lo acompaña.** Un icono demasiado grande o pequeño respecto a su etiqueta rompe la alineación visual.
- **Cuida el contraste del icono contra su fondo**, igual que harías con un texto: un icono gris claro sobre blanco puede resultar invisible para personas con baja visión.
- **No inventes metáforas visuales propias para acciones críticas.** Un disquete para "guardar" o una papelera para "eliminar" se reconocen globalmente; un icono original para la misma acción obliga al usuario a aprenderlo desde cero.
