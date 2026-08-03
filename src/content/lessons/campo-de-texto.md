---
title: 'Campo de texto (Input / Textarea)'
description: 'El control más usado en cualquier formulario: cuándo usar una línea o varias, sus estados y cómo comunicar errores.'
category: components
level: intermediate
order: 8
subcategory: formularios
exercises:
    - id: campo-texto-mc-1
      type: multiple-choice
      prompt: '¿Cuándo conviene usar un textarea (varias líneas) en lugar de un input de una sola línea?'
      allowMultiple: false
      options:
          - text: 'Cuando se espera una respuesta larga o de longitud variable, como un comentario o una descripción, donde ver varias líneas a la vez ayuda a revisar lo escrito.'
            correct: true
            explanation: 'Correcto. Forzar una respuesta larga dentro de una sola línea obliga a desplazarse horizontalmente para releerla, lo que dificulta revisar y corregir el texto.'
          - text: 'Siempre que el dato sea de tipo texto, sin importar su longitud esperada.'
            correct: false
            explanation: 'Un nombre, un correo o un código postal son texto pero de longitud corta y predecible; un input de una línea es más apropiado y ocupa menos espacio.'
          - text: 'Nunca; el textarea está en desuso a favor del input de una sola línea con scroll interno.'
            correct: false
            explanation: 'El textarea sigue siendo el control adecuado para texto largo, como comentarios, descripciones o mensajes.'
    - id: campo-texto-mc-2
      type: multiple-choice
      prompt: '¿Cuál es la forma más efectiva de comunicar un error de validación en un campo de texto?'
      allowMultiple: true
      options:
          - text: 'Cambiar el color del borde del campo a un tono de error, junto a un mensaje de texto específico debajo que explique qué corregir.'
            correct: true
            explanation: 'Correcto. El color aporta una señal rápida, pero el texto explica qué hacer exactamente; ninguno de los dos sustituye al otro.'
          - text: 'Mostrar el error únicamente cambiando el color del borde, sin ningún mensaje de texto adicional.'
            correct: false
            explanation: 'El color por sí solo no explica qué está mal ni cómo corregirlo, y es invisible para quienes no distinguen bien los colores o usan lector de pantalla.'
          - text: 'El mensaje de error debe describir específicamente el problema ("El correo debe incluir un @") en lugar de un genérico ("Campo inválido").'
            correct: true
            explanation: 'Correcto. Un mensaje específico permite corregir el error sin tener que adivinar qué es exactamente lo que falla.'
    - id: campo-texto-order-1
      type: ordering
      prompt: 'Ordena estos momentos de validación de un campo según cuándo ocurren, del primero al último.'
      items:
          - 'Mientras el usuario escribe (validación en tiempo real de formato, si aplica)'
          - 'Al salir del campo (blur), validando que el valor introducido sea correcto'
          - 'Al intentar enviar el formulario completo, revalidando todos los campos'
      explanation: 'Validar en cada uno de estos momentos, y no solo al enviar, permite que el usuario corrija errores lo antes posible en lugar de descubrirlos todos juntos al final.'
---

## Por qué existe: la puerta de entrada de la información

El campo de texto —de una sola línea (input) o de varias (textarea)— es el control que permite a la persona usuaria introducir información libre: su nombre, un comentario, una dirección. Es, junto al selector, la pieza fundamental de cualquier formulario, y el lugar donde más fricción se genera cuando algo va mal: un campo sin validación clara, sin formato explicado o con un error ambiguo puede hacer que alguien abandone el formulario entero.

## Anatomía de un campo de texto

<div style="max-width:22rem;margin:1.25rem 0;">
    <label style="display:block;font-size:0.85rem;font-weight:700;margin-block-end:0.35rem;">Mensaje</label>
    <textarea rows="3" placeholder="Escribe tu mensaje..." style="width:100%;padding:0.6rem 0.9rem;border:1px solid #e03131;border-radius:0.5rem;font:inherit;" disabled></textarea>
    <p style="margin:0.35rem 0 0;font-size:0.8rem;color:#e03131;">⚠ El mensaje no puede estar vacío.</p>
</div>

- **Etiqueta**: identifica el dato esperado (ver la lección de "Etiqueta").
- **Área de entrada**: la caja donde se escribe, de una línea (input) o varias (textarea), con su padding interno.
- **Texto de ayuda**: aclara formato o restricciones antes de que el usuario escriba ("Mínimo 8 caracteres").
- **Mensaje de validación**: aparece tras interactuar con el campo, en verde (correcto) o en rojo (error), siempre con texto explicativo.
- **Icono opcional**: como una lupa en un buscador, o un ojo para mostrar/ocultar una contraseña.

## Buenas prácticas de diseño

- **Elige input o textarea según la longitud esperada de la respuesta**, no por costumbre: un textarea para un nombre desperdicia espacio y confunde sobre cuánto texto se espera.
- **Muestra el formato esperado antes de que falle**, no solo después: un texto de ayuda ("DD/MM/AAAA") evita errores que un mensaje posterior solo corrige tarde.
- **Valida en el momento adecuado**: errores de formato evidentes se pueden validar mientras se escribe, pero no marques un campo como "incompleto" mientras el usuario todavía lo está rellenando por primera vez.
- **Los mensajes de error deben ser específicos y accionables** ("La contraseña necesita al menos un número"), nunca genéricos ("Valor inválido").
- **Nunca uses solo el color para indicar error o éxito.** Acompaña siempre de un icono o texto, para personas con daltonismo o baja visión.
- **Deja crecer el textarea con el contenido** (o al menos ofrece una altura inicial generosa) en lugar de forzar scroll interno constante para textos moderadamente largos.
