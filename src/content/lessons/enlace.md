---
title: 'Enlace (Link)'
description: 'Cómo distinguir un enlace de un botón, qué estados necesita y cómo diseñarlo para que se reconozca sin dudarlo.'
category: components
level: beginner
order: 4
subcategory: acciones-contenido
exercises:
    - id: enlace-mc-1
      type: multiple-choice
      prompt: '¿Cuál es la diferencia semántica fundamental entre un enlace y un botón?'
      allowMultiple: false
      options:
          - text: 'El enlace lleva a otro lugar (otra URL, otra pantalla, otra sección de la misma página); el botón ejecuta una acción en el sitio actual.'
            correct: true
            explanation: 'Correcto. Esta diferencia no es solo visual: afecta a cómo se comportan (los enlaces se pueden abrir en pestaña nueva, tienen historial de navegador) y a qué esperan encontrar los lectores de pantalla.'
          - text: 'El enlace siempre es azul y el botón siempre tiene fondo de color; es una diferencia puramente de estilo.'
            correct: false
            explanation: 'El azul y el subrayado son una convención visual habitual, no la definición del componente. La diferencia real es funcional: navegación frente a acción.'
          - text: 'No hay diferencia real; son intercambiables en cualquier contexto.'
            correct: false
            explanation: 'No son intercambiables: usar un enlace donde se espera una acción (o al revés) rompe las expectativas del usuario y de las tecnologías de asistencia.'
    - id: enlace-mc-2
      type: multiple-choice
      prompt: '¿Por qué no basta con diferenciar un enlace del texto normal únicamente por el color?'
      allowMultiple: false
      options:
          - text: 'Porque las personas con daltonismo o baja visión pueden no percibir esa diferencia de color, y necesitan otra pista (como el subrayado) para identificarlo.'
            correct: true
            explanation: 'Correcto. Confiar solo en el color para transmitir información es un problema de accesibilidad habitual; el subrayado (o un icono) añade una pista que no depende de distinguir colores.'
          - text: 'Porque los enlaces solo pueden diferenciarse mediante un icono, nunca mediante texto.'
            correct: false
            explanation: 'El subrayado es la convención más extendida y no requiere un icono adicional.'
          - text: 'Porque el color no se puede aplicar a texto dentro de un párrafo.'
            correct: false
            explanation: 'El color sí puede aplicarse dentro de un párrafo; el problema no es técnico sino de accesibilidad si es la única señal.'
    - id: enlace-order-1
      type: ordering
      prompt: 'Ordena estos estados de un enlace de texto de menor a mayor grado de interacción con él.'
      items:
          - 'No visitado: el usuario todavía no ha hecho clic'
          - 'Hover / foco: el cursor está encima o ha llegado por teclado'
          - 'Visitado: el usuario ya hizo clic en algún momento anterior'
      explanation: 'Distinguir el estado "visitado" (normalmente con un color más apagado) ayuda al usuario a saber, de un vistazo, qué enlaces de una lista larga ya ha explorado.'
---

## Por qué existe: la navegación explícita

Un enlace lleva a la persona usuaria de un lugar a otro: a otra página, a otra sección de la misma página, o a un recurso externo. Es el componente que hace posible la navegación libre por una aplicación o un sitio web, y su comportamiento tiene expectativas muy asentadas: se puede abrir en una pestaña nueva, se puede copiar su dirección, aparece en el historial del navegador. Ninguna de esas expectativas aplica a un botón, por eso confundir ambos componentes rompe el modelo mental de quien navega.

## Anatomía de un enlace

<p style="margin:1.25rem 0;">Consulta nuestra <a href="#" style="color:#364fc7;text-decoration:underline;">política de privacidad</a> antes de continuar.</p>

- **Texto del enlace**: describe el destino, no la acción de pulsar ("Política de privacidad", no "Haz clic aquí").
- **Señal visual de que es interactivo**: normalmente un color distinto al del texto que lo rodea y un subrayado, para no depender solo del color.
- **Destino**: la URL o el ancla a la que lleva; debe coincidir con lo que el texto promete.
- **Indicador de contexto externo (opcional)**: un icono pequeño cuando el enlace abre un sitio distinto o un archivo descargable, para avisar de que se sale del flujo actual.

## Buenas prácticas de diseño

- **No uses "haz clic aquí" ni "leer más" como único texto del enlace.** Fuera de contexto (por ejemplo, en una lista de enlaces leída por un lector de pantalla) ese texto no dice nada; describe el destino: "Leer el artículo completo sobre accesibilidad".
- **No confíes solo en el color para señalar que un texto es un enlace.** Añade subrayado o algún otro indicador que no dependa de distinguir colores.
- **Diseña el estado "visitado"** en listas largas de enlaces (resultados de búsqueda, artículos), para que la persona no vuelva a abrir lo que ya vio.
- **Un enlace que abre una pestaña nueva o descarga un archivo debe avisarlo**, con un icono o texto adicional, porque rompe la expectativa por defecto de navegar en la misma pestaña.
- **El área de clic debe ser suficiente**, especialmente en móvil: un enlace de un par de palabras en medio de un párrafo largo es difícil de acertar con el dedo.
- **Nunca conviertas un enlace en la única forma de completar una acción destructiva o irreversible** ("Eliminar cuenta" como enlace de texto discreto es un patrón oscuro clásico); reserva eso para un botón claramente visible.
