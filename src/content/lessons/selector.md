---
title: 'Selector (Select)'
description: 'Cómo elegir entre el select nativo y un dropdown personalizado, y qué buenas prácticas evitan un selector confuso.'
category: components
level: intermediate
order: 9
subcategory: formularios
exercises:
    - id: selector-mc-1
      type: multiple-choice
      prompt: '¿Cuándo tiene sentido usar un "select" (nativo del navegador/sistema) en lugar de dejar que el usuario escriba libremente?'
      allowMultiple: false
      options:
          - text: 'Cuando las opciones válidas son un conjunto cerrado y conocido de antemano (un país, una talla, un mes), evitando errores de formato o valores inventados.'
            correct: true
            explanation: 'Correcto. Un select restringe la respuesta a valores válidos, eliminando errores tipográficos y variaciones de formato que sí pueden ocurrir con texto libre.'
          - text: 'Siempre que haya más de dos opciones posibles, sin importar si son un conjunto cerrado o abierto.'
            correct: false
            explanation: 'El número de opciones no es lo que determina la elección; lo determina si el conjunto de valores válidos es cerrado y conocido de antemano.'
          - text: 'Nunca; el texto libre siempre da más flexibilidad y es preferible en cualquier caso.'
            correct: false
            explanation: 'El texto libre introduce el riesgo de errores de formato y de valores no válidos que un select evita por diseño.'
    - id: selector-mc-2
      type: multiple-choice
      prompt: '¿Cuál es la principal ventaja de usar el select nativo del sistema operativo frente a un dropdown completamente personalizado?'
      allowMultiple: false
      options:
          - text: 'Hereda gratis el comportamiento de accesibilidad y las convenciones de interacción que la persona usuaria ya conoce de su sistema operativo (teclado, lector de pantalla, buscar por letra inicial).'
            correct: true
            explanation: 'Correcto. Reimplementar un select desde cero obliga a reconstruir manualmente toda esa accesibilidad, algo fácil de hacer mal.'
          - text: 'Permite un diseño visual idéntico en todos los navegadores y sistemas operativos.'
            correct: false
            explanation: 'Es justo lo contrario: el select nativo se adapta al estilo visual de cada sistema operativo, por lo que su apariencia varía entre plataformas.'
          - text: 'Es la única forma de mostrar más de diez opciones en una lista.'
            correct: false
            explanation: 'Tanto el select nativo como un dropdown personalizado pueden mostrar listas largas; la cantidad de opciones no es la diferencia entre ambos.'
    - id: selector-free-1
      type: free-text
      prompt: 'Cuando un selector permite escribir para filtrar las opciones a medida que se teclea, en lugar de solo desplegar una lista fija, ¿cómo se conoce habitualmente este patrón?'
      acceptedAnswers:
          - 'combobox'
          - 'autocompletar'
          - 'autocomplete'
      explanation: 'Un combobox combina un campo de texto con una lista filtrable de opciones; es útil cuando el conjunto de opciones es demasiado largo para desplazarse cómodamente (por ejemplo, un país entre 195).'
---

## Por qué existe: elegir sin equivocarse

Un selector (select) permite elegir un valor de entre un conjunto cerrado de opciones, en lugar de escribirlo libremente. Es el control adecuado cuando las respuestas válidas ya están definidas de antemano —un país, una talla, un método de envío— porque elimina de raíz los errores de formato ("Espana" sin ñ, "ES" en vez de "España") que sí pueden aparecer con un campo de texto libre.

## Select nativo frente a dropdown personalizado

<div style="display:flex;flex-wrap:wrap;gap:1.5rem;margin:1.25rem 0;">
    <div style="flex:1;min-width:220px;">
        <p style="margin:0 0 0.5rem;font-weight:700;font-size:0.85rem;">Select nativo</p>
        <select style="width:100%;padding:0.6rem 0.9rem;border:1px solid #d8dbe3;border-radius:0.5rem;" disabled>
            <option>España</option>
        </select>
        <p style="margin:0.5rem 0 0;font-size:0.8rem;color:#495057;">Usa el estilo del sistema operativo; accesibilidad garantizada de fábrica.</p>
    </div>
    <div style="flex:1;min-width:220px;">
        <p style="margin:0 0 0.5rem;font-weight:700;font-size:0.85rem;">Dropdown personalizado</p>
        <div style="padding:0.6rem 0.9rem;border:1px solid #364fc7;border-radius:0.5rem;display:flex;justify-content:space-between;">
            <span>España</span><span>▾</span>
        </div>
        <p style="margin:0.5rem 0 0;font-size:0.8rem;color:#495057;">Diseño totalmente propio (con imágenes, búsqueda...), pero hay que reconstruir su accesibilidad a mano.</p>
    </div>
</div>

- **Control cerrado (trigger)**: muestra el valor seleccionado y un indicador (normalmente una flecha) de que al pulsarlo se despliegan más opciones.
- **Panel de opciones**: la lista que aparece al abrir el selector, con la opción actual resaltada.
- **Opción**: cada elemento seleccionable de la lista, con su propio estado de hover/foco/seleccionado.
- **Buscador interno (opcional)**: un campo de filtro dentro del panel, imprescindible cuando hay muchas opciones (por ejemplo, un listado de países).

## Buenas prácticas de diseño

- **Usa el select nativo por defecto.** Solo pasa a un dropdown personalizado (ver la lección de "Menú" para la variante de acciones) cuando necesites algo que el nativo no ofrece, como imágenes junto a cada opción o selección múltiple con etiquetas visibles.
- **Si hay más de diez o quince opciones, añade un buscador dentro del panel** en lugar de obligar a desplazarse por una lista larga.
- **Muestra siempre un valor por defecto con sentido**, o un placeholder claro ("Selecciona un país"), nunca un selector vacío sin ninguna pista.
- **Ordena las opciones de forma predecible** (alfabético, o por frecuencia de uso con las más comunes arriba), nunca en un orden arbitrario.
- **Para selección múltiple, muestra claramente cuántas opciones están seleccionadas** (por ejemplo, con etiquetas visibles o un contador), no solo un texto genérico como "Varios seleccionados".
- **Todo el panel debe ser navegable por teclado**: flechas para moverse entre opciones, Intro para confirmar, Escape para cerrar sin cambiar el valor.
