---
title: 'Menú (Menu)'
description: 'El panel de acciones u opciones que se abre desde un botón: diferencias con el select y con el popover, y buenas prácticas.'
category: components
level: intermediate
order: 13
subcategory: navegacion
exercises:
    - id: menu-mc-1
      type: multiple-choice
      prompt: '¿Cuál es la diferencia principal entre un menú (por ejemplo, el que se abre con un botón de "⋮" o "más opciones") y un selector (select)?'
      allowMultiple: false
      options:
          - text: 'El menú ofrece acciones a ejecutar (editar, duplicar, eliminar); el select ofrece valores a elegir para rellenar un campo. Aunque ambos abren un panel flotante, su propósito es distinto.'
            correct: true
            explanation: 'Correcto. Aunque comparten patrón visual —un trigger que abre un panel flotante—, el menú dispara acciones inmediatas y el select fija el valor de un campo del formulario.'
          - text: 'El menú solo puede contener texto, mientras que el select puede contener imágenes.'
            correct: false
            explanation: 'No es una diferencia real; ambos pueden combinar texto e iconos. La diferencia está en su propósito: acciones frente a selección de un valor.'
          - text: 'No hay ninguna diferencia real entre ambos; son el mismo componente con distinto nombre.'
            correct: false
            explanation: 'Su patrón visual de apertura es similar, pero su función —ejecutar una acción frente a fijar un valor— es distinta, y eso condiciona su diseño y su comportamiento tras seleccionar una opción.'
    - id: menu-mc-2
      type: multiple-choice
      prompt: '¿Cómo debe comportarse un menú al elegir una acción destructiva, como "Eliminar", desde su lista de opciones?'
      allowMultiple: false
      options:
          - text: 'Cerrar el menú y, si la acción es irreversible, mostrar una confirmación adicional antes de ejecutarla, en lugar de eliminar directamente al pulsar la opción del menú.'
            correct: true
            explanation: 'Correcto. Un clic accidental sobre "Eliminar" dentro de un menú es fácil que ocurra; una confirmación adicional evita una pérdida de datos irreversible por error.'
          - text: 'Ejecutar la acción inmediatamente sin ningún paso adicional, igual que el resto de opciones del menú.'
            correct: false
            explanation: 'Tratar una acción destructiva igual que el resto de opciones (sin confirmación) aumenta el riesgo de eliminaciones accidentales.'
          - text: 'Deshabilitar la opción "Eliminar" de forma permanente para evitar cualquier riesgo.'
            correct: false
            explanation: 'Deshabilitarla por completo eliminaría una funcionalidad legítima; la solución es añadir una confirmación, no quitar la opción.'
    - id: menu-order-1
      type: ordering
      prompt: 'Ordena estos pasos de la interacción típica con un menú contextual, del primero al último.'
      items:
          - 'La persona pulsa el botón "más opciones" (trigger)'
          - 'Se despliega el panel con la lista de acciones disponibles'
          - 'La persona navega las opciones con el ratón o el teclado'
          - 'Se selecciona una opción, se ejecuta la acción y el menú se cierra'
      explanation: 'Un menú siempre sigue este ciclo: abrir desde un trigger, mostrar opciones, permitir navegación, y cerrarse tras ejecutar (o cancelar) una acción.'
---

## Por qué existe: agrupar acciones sin saturar la pantalla

Un menú es un panel flotante de opciones —normalmente acciones a ejecutar— que se abre al pulsar un botón (a menudo un icono de tres puntos o "más opciones"). Permite agrupar acciones secundarias o poco frecuentes sin mostrarlas todas como botones permanentes en la pantalla, evitando saturar la interfaz con acciones que la mayoría de veces no se usan.

Comparte patrón visual de apertura con el select y con el popover, pero su propósito es distinto: aquí lo importante es entender esa diferencia y diseñar el comportamiento adecuado según qué tipo de opción contiene el menú.

## Anatomía de un menú

<div style="position:relative;margin:1.25rem 0;max-width:12rem;">
    <button style="padding:0.4rem 0.75rem;border:1px solid #d8dbe3;border-radius:0.4rem;background:#fff;">⋮ Más opciones</button>
    <div style="margin-top:0.4rem;border:1px solid #d8dbe3;border-radius:0.5rem;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
        <p style="margin:0;padding:0.6rem 0.9rem;font-size:0.85rem;">✏️ Editar</p>
        <p style="margin:0;padding:0.6rem 0.9rem;font-size:0.85rem;">📋 Duplicar</p>
        <hr style="border:none;border-top:1px solid #eef0f4;margin:0;" />
        <p style="margin:0;padding:0.6rem 0.9rem;font-size:0.85rem;color:#e03131;">🗑️ Eliminar</p>
    </div>
</div>

- **Trigger**: el botón que abre el menú, normalmente un icono reconocible de "más opciones".
- **Panel**: el contenedor flotante que aparece al abrir, posicionado junto al trigger.
- **Elemento de menú**: cada acción individual, con icono opcional y su propio estado de hover/foco.
- **Separador (opcional)**: una línea que agrupa acciones relacionadas y distingue las más sensibles (como "Eliminar") del resto.

## Buenas prácticas de diseño

- **Agrupa las acciones destructivas visualmente separadas del resto** (con un separador y, a menudo, color distinto), para reducir el riesgo de pulsarlas por error.
- **Pide confirmación adicional para acciones irreversibles** ejecutadas desde un menú; un solo clic accidental no debería poder borrar algo sin remedio.
- **Ordena las opciones por frecuencia de uso**, con las más comunes arriba, no alfabéticamente si eso separa acciones relacionadas.
- **Cierra el menú al seleccionar una opción, al pulsar fuera de él, o al pulsar Escape.** Un menú que no se cierra de forma predecible genera frustración.
- **Haz que sea completamente navegable por teclado**: flechas para moverse entre opciones, Intro para ejecutar, Escape para cerrar sin ejecutar nada.
- **No mezcles en el mismo menú acciones y navegación a otra sección** sin diferenciarlas claramente; ambas cierran el menú, pero el usuario espera resultados distintos de cada una.
