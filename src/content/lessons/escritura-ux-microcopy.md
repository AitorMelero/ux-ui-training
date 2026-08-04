---
title: 'Escritura UX y microcopy'
description: 'El texto de una interfaz es parte del diseño: aprende a escribir microcopy claro, útil y con la voz adecuada para cada momento.'
category: ux
level: advanced
order: 11
exercises:
    - id: microcopy-mc-1
      type: multiple-choice
      prompt: 'Un mensaje de error dice: "Error 4032: fallo de validación." ¿Qué principio de buen microcopy incumple?'
      allowMultiple: false
      options:
          - text: 'No explica el problema en lenguaje humano ni sugiere cómo solucionarlo; se limita a mostrar un código técnico.'
            correct: true
            explanation: 'Correcto. Un buen mensaje de error dice qué pasó exactamente (con las palabras del usuario, no un código interno) y qué puede hacer la persona para solucionarlo.'
          - text: 'Es demasiado largo para un mensaje de error.'
            correct: false
            explanation: 'El problema no es la longitud (es muy corto), sino la falta de información útil y accionable.'
          - text: 'Usa mayúsculas, lo cual siempre es un error de UX writing.'
            correct: false
            explanation: 'El uso de mayúsculas no es el problema central aquí; el problema es la ausencia de una explicación clara y una solución.'
    - id: microcopy-mc-2
      type: multiple-choice
      prompt: '¿Por qué se recomienda evitar la jerga técnica interna en los textos de una interfaz orientada a usuarios no técnicos?'
      allowMultiple: false
      options:
          - text: 'Porque el usuario no comparte el modelo mental ni el vocabulario del equipo que construyó el producto, y un término interno puede no significar nada para él.'
            correct: true
            explanation: 'Correcto. Términos como "payload", "endpoint" o nombres de features internos tienen sentido para el equipo, pero generan confusión o ansiedad en usuarios que no conocen ese vocabulario.'
          - text: 'Porque está prohibido por la ley en interfaces digitales.'
            correct: false
            explanation: 'No es una cuestión legal, sino de claridad y empatía con el modelo mental real del usuario.'
          - text: 'Porque ocupa más espacio en pantalla que el lenguaje sencillo.'
            correct: false
            explanation: 'La jerga técnica no es necesariamente más larga; el problema es de comprensión, no de espacio.'
    - id: microcopy-order-1
      type: ordering
      prompt: 'Ordena estos elementos de un buen mensaje de error, del primero que debería leer el usuario al último.'
      items:
          - 'Qué ha pasado, en lenguaje claro (no un código técnico)'
          - 'Por qué ha pasado, si aporta contexto útil'
          - 'Qué puede hacer el usuario para solucionarlo'
          - 'Una vía de ayuda adicional si el problema persiste'
      explanation: 'Un mensaje de error útil resuelve primero la confusión inmediata (qué pasó) y termina dando una salida clara, en lugar de dejar al usuario con un diagnóstico pero sin ninguna acción posible.'
    - id: microcopy-free-1
      type: free-text
      prompt: '¿Cómo se llama al texto breve de una interfaz —etiquetas de botones, mensajes de error, textos de ayuda— diseñado con la misma intencionalidad que cualquier otro elemento visual?'
      acceptedAnswers:
          - 'microcopy'
          - 'micro-copy'
          - 'ux writing'
      explanation: 'El microcopy son esos fragmentos de texto breves pero decisivos: el nombre de un botón, un placeholder, un mensaje de confirmación, que en conjunto determinan buena parte de si una interfaz se siente clara o confusa.'
---

## El texto también es interfaz

Es habitual tratar el texto de una interfaz como un detalle de última hora: se diseñan las pantallas y, cuando ya casi está todo listo, alguien rellena los botones y mensajes con lo primero razonable que se le ocurre. El **UX writing** invierte esa prioridad: trata el texto —cada etiqueta, cada mensaje de error, cada placeholder— como una decisión de diseño tan intencionada como el color de un botón o la disposición de un formulario. El nombre que se le da a esos fragmentos breves y muy visibles se llama **microcopy**: textos cortos pero de alto impacto, porque suelen aparecer exactamente en el momento en el que el usuario está decidiendo qué hacer o entendiendo qué ha pasado.

## Claridad antes que ingenio

La tentación de escribir microcopy "con personalidad" (un chiste en un mensaje de error, una metáfora divertida en un estado vacío) es comprensible, porque puede diferenciar la voz de una marca. Pero la regla que debería primar siempre es: **claridad antes que ingenio**. Si un usuario tiene que releer un mensaje dos veces para entender qué se le pide, ese microcopy ha fallado, por muy ocurrente que sea. La creatividad tiene su sitio en microcopy de bajo riesgo (un estado vacío sin urgencia, una pantalla de éxito), pero en momentos críticos —errores, pasos de pago, confirmaciones irreversibles como "eliminar cuenta"— la prioridad absoluta es que no quede ninguna duda sobre qué está pasando y qué hacer a continuación.

## Anatomía de un buen mensaje de error

Comparar un mal mensaje de error con uno bueno deja claro el patrón:

- **Mal ejemplo**: _"Error 4032: fallo de validación."_ No dice qué campo falló, por qué, ni qué hacer. Obliga al usuario a adivinar o a probar al azar.
- **Buen ejemplo**: _"No hemos podido guardar tu tarjeta: el número parece incompleto. Comprueba que tenga 16 dígitos."_ Dice qué pasó, en lenguaje humano; da una pista de por qué; y sugiere una acción concreta.

Un buen mensaje de error responde, en este orden, a tres preguntas: **¿qué ha pasado?** (sin códigos internos), **¿por qué?** (si aporta información útil, no como excusa) y **¿qué puedo hacer ahora?** (una acción concreta, no un genérico "inténtalo más tarde" cuando existe una solución más específica). Cuando el error no tiene solución inmediata por parte del usuario, el microcopy debería al menos ofrecer una vía de ayuda (contacto con soporte, un enlace a documentación).

## Voz y tono: la misma marca, distintos volúmenes

**Voz** y **tono** no son lo mismo, aunque se confundan a menudo. La voz es la personalidad constante de una marca (formal o cercana, seria o desenfadada) y no debería cambiar entre pantallas. El tono, en cambio, se adapta al contexto emocional del momento: el mismo producto puede tener un tono ligero en una pantalla de bienvenida y un tono serio y directo en una pantalla de "se ha producido un cobro duplicado en tu tarjeta". Aplicar el mismo tono desenfadado a un momento de alto estrés del usuario (una alerta de seguridad, un pago fallido, una cuenta bloqueada) suele leerse como una falta de empatía, incluso si la voz de marca en general es informal.

## Evitar la jerga interna y el vocabulario ambiguo

El vocabulario que usa el equipo internamente (nombres en clave de funcionalidades, términos técnicos como "payload", "token" o "sync") rara vez coincide con el modelo mental del usuario final. Antes de publicar un texto de interfaz conviene preguntarse: ¿esta palabra tiene sentido para alguien que nunca ha trabajado en este producto? La investigación de usuarios (entrevistas, card sorting) es tan útil para calibrar el vocabulario del microcopy como lo es para calibrar la arquitectura de la información: en ambos casos, el objetivo es hablar el idioma del usuario, no el de la empresa.

## Un texto también se prueba

Como cualquier otra decisión de diseño, el microcopy se puede y se debe testear: mediante tests de usabilidad (¿el usuario entendió el mensaje sin ayuda?), mediante tests A/B en textos de alto impacto (etiquetas de botones de conversión, asuntos de email), o simplemente leyendo el texto en voz alta con el equipo antes de publicarlo, un método sorprendentemente eficaz para detectar frases que suenan naturales al escribirlas pero torpes al oírlas.
