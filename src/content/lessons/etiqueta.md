---
title: 'Etiqueta (Label)'
description: 'El texto que identifica cada campo o control: por qué es imprescindible para la accesibilidad y cómo redactarlo bien.'
category: components
level: beginner
order: 3
subcategory: acciones-contenido
exercises:
    - id: etiqueta-mc-1
      type: multiple-choice
      prompt: '¿Por qué es un problema usar solo el "placeholder" de un campo (el texto gris de ejemplo) en lugar de una etiqueta visible?'
      allowMultiple: true
      options:
          - text: 'El placeholder desaparece en cuanto el usuario empieza a escribir, así que pierde de vista qué campo estaba rellenando.'
            correct: true
            explanation: 'Correcto. Sin una etiqueta persistente, un usuario que se distrae a mitad de rellenar el campo puede olvidar qué dato se le pedía.'
          - text: 'Su contraste suele ser más bajo que el de un texto normal, lo que dificulta su lectura a personas con baja visión.'
            correct: true
            explanation: 'Correcto. Los placeholders suelen diseñarse con un gris claro para diferenciarse del texto introducido, lo que reduce su legibilidad.'
          - text: 'Los lectores de pantalla nunca pueden leer el contenido de un placeholder.'
            correct: false
            explanation: 'Algunos lectores de pantalla sí anuncian el placeholder, pero de forma inconsistente entre programas; el problema real es que no sustituye a una etiqueta persistente y asociada correctamente.'
    - id: etiqueta-mc-2
      type: multiple-choice
      prompt: '¿Qué hace que una etiqueta esté "asociada" correctamente a su campo, más allá de estar cerca visualmente?'
      allowMultiple: false
      options:
          - text: 'Un vínculo semántico en el código (el atributo "for"/"id" en HTML) que permite que un lector de pantalla anuncie la etiqueta al enfocar el campo, y que al pulsar la etiqueta se active el campo.'
            correct: true
            explanation: 'Correcto. La cercanía visual no es suficiente por sí sola: sin esa asociación en el código, una persona que navega con lector de pantalla no sabrá qué campo está rellenando.'
          - text: 'Que ambas usen la misma tipografía y tamaño de fuente.'
            correct: false
            explanation: 'Compartir estilo tipográfico es una cuestión visual, no crea ninguna relación funcional entre etiqueta y campo.'
          - text: 'Que estén dentro del mismo contenedor visual (la misma tarjeta o fila).'
            correct: false
            explanation: 'Compartir contenedor ayuda visualmente, pero sin el vínculo semántico correcto la asociación sigue sin existir para tecnologías de asistencia.'
    - id: etiqueta-free-1
      type: free-text
      prompt: 'Cuando un campo es obligatorio, es habitual marcarlo junto a su etiqueta con un símbolo. ¿Cuál es el más común?'
      acceptedAnswers:
          - '*'
          - 'asterisco'
      explanation: 'El asterisco (*) es la convención más extendida para marcar campos obligatorios, siempre acompañado de una nota que explique su significado la primera vez que aparece.'
---

## Por qué existe: sin etiqueta no hay contexto

Una etiqueta (label) es el texto que identifica qué información se espera en un campo, o qué representa un control. Puede parecer el elemento más simple de toda la interfaz, pero es también uno de los que más impacto tiene en la accesibilidad: es lo que permite que una persona —vea la pantalla o la escuche con un lector de pantalla— sepa qué se le está pidiendo antes de interactuar con el campo.

## Anatomía de una etiqueta

<div style="max-width:20rem;margin:1.25rem 0;">
    <label style="display:block;font-size:0.85rem;font-weight:700;color:#1c1f26;margin-block-end:0.35rem;">Correo electrónico <span style="color:#e03131;">*</span></label>
    <input type="email" placeholder="tú@ejemplo.com" style="width:100%;padding:0.6rem 0.9rem;border:1px solid #d8dbe3;border-radius:0.5rem;" disabled />
    <p style="margin:0.35rem 0 0;font-size:0.8rem;color:#495057;">Te enviaremos la confirmación a esta dirección.</p>
</div>

- **Texto de la etiqueta**: describe el dato en pocas palabras, siempre visible (no solo como placeholder).
- **Indicador de obligatoriedad**: un asterisco u otro marcador cuando el campo es obligatorio (o, mejor aún, marcando solo los opcionales si la mayoría son obligatorios).
- **Asociación con el control**: el vínculo semántico que conecta la etiqueta con su campo, para que un clic en la etiqueta enfoque el campo y un lector de pantalla anuncie ambos juntos.
- **Texto de ayuda (opcional)**: una aclaración adicional debajo, para formatos concretos o contexto extra, sin sustituir a la etiqueta.

## Buenas prácticas de diseño

- **La etiqueta siempre visible, nunca solo como placeholder.** El placeholder desaparece al escribir y tiene menos contraste; úsalo como ejemplo de formato, no como la única identificación del campo.
- **Asocia etiqueta y campo en el código**, no solo por proximidad visual, para que funcione con lectores de pantalla y al hacer clic sobre el texto.
- **Redacta la etiqueta desde la perspectiva del dato, no de la instrucción**: "Correo electrónico" en lugar de "Introduce tu correo electrónico aquí".
- **Sé consistente marcando obligatoriedad**: si la mayoría de campos de un formulario son obligatorios, marca solo los opcionales ("(opcional)") en lugar de llenar el formulario de asteriscos.
- **Coloca la etiqueta encima del campo, no a la izquierda**, siempre que sea posible: es el patrón que se lee y se escanea más rápido, y escala mejor a pantallas estrechas.
- **No abrevies ni uses tecnicismos internos** que la persona usuaria no reconozca ("ID de cliente" en lugar de "customer_ref").
