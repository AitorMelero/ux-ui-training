---
title: 'Tooltip'
description: 'La ayuda contextual más ligera de todas: cuándo usarla, cómo activarla en pantallas táctiles y qué nunca debe llevar dentro.'
category: components
level: advanced
order: 14
subcategory: overlays-feedback
exercises:
    - id: tooltip-mc-1
      type: multiple-choice
      prompt: '¿Qué tipo de contenido es apropiado poner dentro de un tooltip?'
      allowMultiple: false
      options:
          - text: 'Una aclaración breve y secundaria, como el nombre completo de un icono o la unidad de una cifra, nunca información imprescindible para completar la tarea.'
            correct: true
            explanation: 'Correcto. Un tooltip se muestra solo bajo demanda (al pasar el ratón o recibir el foco), por lo que cualquier información esencial que solo esté ahí puede pasar completamente desapercibida.'
          - text: 'Un formulario completo con varios campos que la persona debe rellenar.'
            correct: false
            explanation: 'Un formulario requiere permanencia e interacción sostenida; eso corresponde a un popover o un modal, no a un tooltip, que desaparece en cuanto se deja de interactuar con su disparador.'
          - text: 'La única explicación de cómo usar una función crítica de la aplicación, sin que exista en ningún otro lugar.'
            correct: false
            explanation: 'Si la explicación es crítica, debe estar disponible de forma más permanente (un texto de ayuda visible, la propia etiqueta); un tooltip no es fiable como único canal para información imprescindible.'
    - id: tooltip-mc-2
      type: multiple-choice
      prompt: '¿Por qué el tooltip es uno de los componentes más difíciles de adaptar a pantallas táctiles?'
      allowMultiple: false
      options:
          - text: 'Porque su activación habitual depende del hover (pasar el cursor por encima), un gesto que no existe en pantallas táctiles, donde solo hay toque directo.'
            correct: true
            explanation: 'Correcto. En táctil hay que rediseñar su activación (por ejemplo, mostrarlo con una pulsación larga, o sustituirlo por texto siempre visible) porque no existe equivalente directo al hover.'
          - text: 'Porque las pantallas táctiles no permiten mostrar texto adicional en ningún caso.'
            correct: false
            explanation: 'Las pantallas táctiles sí pueden mostrar texto adicional; el problema concreto del tooltip es la falta de un gesto de hover, no una limitación general de mostrar contenido.'
          - text: 'Porque los tooltips requieren obligatoriamente conexión a internet para mostrarse.'
            correct: false
            explanation: 'Un tooltip es contenido local de la interfaz, no depende de ninguna conexión de red.'
    - id: tooltip-free-1
      type: free-text
      prompt: 'Además de con el ratón (hover), ¿con qué otra forma de interacción de teclado debería poder activarse un tooltip para ser accesible?'
      acceptedAnswers:
          - 'foco'
          - 'foco de teclado'
          - 'tabulador'
          - 'tab'
      explanation: 'Un tooltip accesible debe aparecer tanto al pasar el ratón por encima (hover) como al llegar al elemento con el teclado (foco/tabulador), para no depender exclusivamente del ratón.'
---

## Por qué existe: la aclaración más pequeña posible

Un tooltip es un mensaje breve que aparece junto a un elemento cuando se pasa el cursor por encima (o se llega a él con el teclado), y desaparece en cuanto se deja de interactuar con ese elemento. Es el overlay menos intrusivo de todos: no bloquea nada, no requiere ninguna acción para cerrarlo, y su única función es aclarar algo puntual —qué significa un icono, qué unidad tiene una cifra— sin que la persona tenga que abandonar lo que estaba haciendo.

## Anatomía de un tooltip

<div style="margin:1.25rem 0;position:relative;display:inline-block;">
    <button style="width:2.25rem;height:2.25rem;border-radius:50%;border:1px solid #d8dbe3;background:#fff;">ℹ️</button>
    <div style="position:absolute;top:-2.75rem;left:50%;transform:translateX(-50%);background:#1c1f26;color:#fff;padding:0.4rem 0.75rem;border-radius:0.4rem;font-size:0.8rem;white-space:nowrap;">
        Precio sin impuestos incluidos
        <div style="position:absolute;bottom:-0.3rem;left:50%;transform:translateX(-50%);width:0;height:0;border-left:0.3rem solid transparent;border-right:0.3rem solid transparent;border-top:0.3rem solid #1c1f26;"></div>
    </div>
</div>

- **Disparador (trigger)**: el elemento sobre el que se pasa el cursor o al que se llega con el teclado (un icono, un texto truncado, un botón).
- **Globo de texto**: el mensaje breve, con fondo contrastado respecto al resto de la interfaz.
- **Flecha o pico**: apunta visualmente hacia el disparador, dejando claro a qué elemento pertenece la aclaración.
- **Retardo de aparición**: un pequeño tiempo de espera antes de mostrarse, para no saturar la pantalla con tooltips al mover el cursor de paso.

## Buenas prácticas de diseño

- **Manténlo breve, una frase corta como máximo.** Si el mensaje necesita varias líneas o un enlace, probablemente sea mejor un popover.
- **Nunca pongas ahí la única fuente de información imprescindible para usar la interfaz.** Al mostrarse solo bajo demanda, no es fiable como canal principal de información crítica.
- **Actívalo tanto con hover como con el foco de teclado**, nunca solo con uno de los dos: quien navega sin ratón también necesita poder verlo.
- **Añade un pequeño retardo antes de mostrarlo** (habitualmente unos cientos de milisegundos), para que no aparezca en cada movimiento accidental del cursor.
- **En pantallas táctiles, sustitúyelo por otro mecanismo** (una pulsación larga, o texto siempre visible), ya que no existe un equivalente directo al hover.
- **No lo uses sobre elementos ya deshabilitados sin más contexto**; si el tooltip explica por qué algo está deshabilitado, asegúrate de que sigue siendo alcanzable con el teclado a pesar de estar inactivo.
