---
title: 'Crítica de diseño y entrega a desarrollo (handoff)'
description: 'Da y recibe feedback de diseño de forma constructiva, y entrega especificaciones a desarrollo sin ambigüedad ni fricción.'
category: ui
level: advanced
order: 11
exercises:
    - id: critica-mc-1
      type: multiple-choice
      prompt: 'En una sesión de crítica de diseño, un compañero dice: "no me gusta este botón". ¿Por qué este feedback es poco útil, y cómo se podría reformular mejor?'
      allowMultiple: false
      options:
          - text: 'Es una opinión sin criterio explícito ni relación con un objetivo; sería más útil algo como "el botón no destaca como acción principal frente al resto de la pantalla, y eso puede hacer que los usuarios no lo encuentren".'
            correct: true
            explanation: 'Correcto. El buen feedback de diseño se ancla en un objetivo del usuario o del negocio ("¿esto ayuda a completar la tarea?"), no en el gusto personal de quien opina, que no es accionable ni discutible con criterios objetivos.'
          - text: 'Es un feedback perfecto tal cual, porque la opinión personal siempre es válida en una crítica de diseño.'
            correct: false
            explanation: 'La opinión personal sin criterio explícito es difícil de accionar: el diseñador no sabe si "no me gusta" se refiere al color, la forma, la jerarquía o algo completamente distinto.'
          - text: 'El problema es que se dio en voz alta en lugar de por escrito.'
            correct: false
            explanation: 'El formato (oral o escrito) no es el problema central; el problema es la falta de criterio explícito y de conexión con un objetivo de diseño.'
    - id: critica-mc-2
      type: multiple-choice
      prompt: 'Un archivo de diseño se entrega a desarrollo sin especificar los espaciados exactos, los estados de hover/focus/error de los componentes, ni el comportamiento en pantallas pequeñas. ¿Qué consecuencia es más probable?'
      allowMultiple: false
      options:
          - text: 'El equipo de desarrollo tendrá que improvisar esos detalles, lo que probablemente produzca un resultado distinto de la intención original del diseño y genere idas y vueltas para corregirlo después.'
            correct: true
            explanation: 'Correcto. Cada decisión no especificada explícitamente en el handoff se convierte en una decisión que toma otra persona, sin el contexto completo con el que se diseñó originalmente esa pantalla.'
          - text: 'Ninguna consecuencia relevante: desarrollo siempre interpreta correctamente la intención del diseño sin necesidad de especificaciones.'
            correct: false
            explanation: 'Sin especificaciones explícitas, es habitual que desarrollo tome decisiones razonables pero distintas de las que el diseño pretendía, generando trabajo de corrección posterior.'
          - text: 'El proyecto se cancela automáticamente.'
            correct: false
            explanation: 'No hay ninguna consecuencia automática de cancelación; el efecto real es de calidad de la implementación final y de retrabajo.'
    - id: critica-order-1
      type: ordering
      prompt: 'Ordena estos pasos de una entrega (handoff) de diseño a desarrollo bien hecha, del primero al último.'
      items:
          - 'Documentar los componentes usados, con enlace al sistema de diseño'
          - 'Anotar espaciados, tamaños y comportamiento responsive de cada sección'
          - 'Especificar todos los estados relevantes (hover, focus, error, vacío, carga)'
          - 'Revisar la implementación real junto a desarrollo antes de dar por cerrada la tarea (QA de diseño)'
      explanation: 'El handoff no termina al entregar el archivo: cerrar el ciclo con una revisión conjunta de la implementación final es lo que detecta discrepancias entre la intención del diseño y el resultado construido, antes de que lleguen a producción.'
    - id: critica-free-1
      type: free-text
      prompt: '¿Cómo se llama, en inglés, el proceso de entregar un diseño terminado al equipo de desarrollo con toda la información necesaria para implementarlo fielmente?'
      acceptedAnswers:
          - 'handoff'
          - 'design handoff'
          - 'entrega'
      explanation: 'El handoff es el puente entre diseño y desarrollo: cuanta más ambigüedad quede sin resolver en ese momento, más decisiones de diseño terminan tomándose, de forma implícita y sin contexto completo, durante la programación.'
---

## La crítica de diseño no es un juicio personal

Una sesión de **crítica de diseño** (_design critique_ o _design review_) bien llevada es una de las herramientas más infravaloradas para mejorar la calidad de un producto, y también una de las más fáciles de hacer mal. El objetivo no es que cada persona del equipo dé su opinión estética sobre si algo "le gusta" o "no le gusta": ese tipo de feedback no es accionable, porque no explica qué problema resuelve o qué problema genera el elemento en cuestión. Una crítica útil ancla cada comentario en un objetivo compartido: ¿esta decisión ayuda al usuario a completar su tarea? ¿es coherente con el resto del sistema de diseño? ¿resuelve el problema que se planteó al principio del proyecto?

## Cómo dar feedback útil

El feedback más valioso sigue un patrón reconocible: describe una **observación concreta**, la conecta con un **posible efecto en el usuario o el negocio**, y (opcionalmente, no siempre es necesario) sugiere una **dirección**, sin imponer la solución exacta. Comparar estos dos comentarios sobre la misma pantalla deja clara la diferencia: _"No me gusta este botón"_ frente a _"El botón de acción principal tiene el mismo peso visual que los enlaces secundarios de alrededor; es posible que a algunos usuarios les cueste identificarlo como la acción prioritaria de la pantalla."_ El segundo comentario es discutible con criterios objetivos (se puede verificar con un test de jerarquía visual, o directamente con datos de clics), mientras que el primero solo se puede aceptar o descartar según la autoridad de quien lo dice.

## Cómo recibir feedback sin ponerse a la defensiva

Recibir crítica sobre un trabajo en el que se ha invertido tiempo y cuidado es, comprensiblemente, incómodo. Ayuda separar mentalmente la crítica de la decisión: escuchar todo el feedback antes de responder o justificar, hacer preguntas de clarificación en lugar de argumentos defensivos inmediatos ("¿qué problema concreto ves con este flujo?" en vez de "no, eso no es así porque..."), y recordar que el objetivo compartido de todo el equipo es que el producto final sea mejor, no que una versión particular del diseño "gane" la discusión. No todo el feedback recibido debe implementarse tal cual —el diseñador sigue siendo quien sintetiza y decide—, pero descartar feedback sin haberlo entendido primero suele significar perder información valiosa.

## Handoff: de la intención al archivo que usa desarrollo

El **handoff** (entrega) es el momento en que un diseño pasa de la fase de exploración y decisión a la fase de implementación técnica. Un handoff incompleto obliga al equipo de desarrollo a rellenar los huecos por su cuenta —qué espaciado exacto usar, qué pasa en pantallas pequeñas, cómo se ve un campo con error— tomando decisiones razonables pero que casi nunca coinciden exactamente con la intención original del diseño, lo que genera un ciclo de correcciones después de implementado, mucho más caro que resolver esa ambigüedad antes de empezar a programar. Un handoff completo suele incluir, como mínimo:

- **Componentes usados**, con enlace directo al sistema de diseño, en lugar de reproducir manualmente cada elemento desde cero.
- **Espaciados y medidas exactas** de cada sección, no aproximaciones "a ojo".
- **Todos los estados relevantes** de cada componente interactivo (normal, hover, focus, error, vacío, carga), no solo el estado ideal mostrado en la maqueta principal.
- **Comportamiento responsive**: cómo se reorganiza cada sección en los distintos anchos de pantalla soportados.
- **Copy final**, no texto de relleno (_lorem ipsum_ o placeholders), porque el texto real casi siempre tiene una longitud distinta a la de prueba, y eso puede romper un layout ajustado.

## El handoff no termina al entregar el archivo

El error final más común es tratar el handoff como un evento único: se entrega el archivo de diseño y el diseñador pasa a otra tarea, sin volver a mirar la implementación hasta que ya está en producción. La práctica recomendada es cerrar el ciclo con una **revisión de QA de diseño**: comparar la implementación real, ya construida, con la intención original, idealmente antes de que llegue a producción. Esta revisión detecta de forma sistemática discrepancias de espaciado, estados olvidados o comportamientos responsive no implementados, que son mucho más baratos de corregir en ese momento que después del lanzamiento, cuando ya han sido vistos por usuarios reales.
