---
title: 'Trade-offs entre negocio y usuario'
description: 'Qué hacer cuando lo mejor para el usuario a corto plazo y lo que pide el negocio no coinciden, y cómo distinguir un trade-off razonable de un mal patrón.'
category: business
level: intermediate
order: 6
subcategory: priorizacion-decisiones
exercises:
    - id: trade-offs-mc-1
      type: multiple-choice
      prompt: 'Un objetivo de negocio pide "reducir a un clic el proceso de suscripción a la newsletter, preseleccionando la casilla por defecto". ¿Por qué este trade-off concreto es problemático, más allá de la conversión que pueda ganar?'
      allowMultiple: false
      options:
          - text: 'Preseleccionar una casilla de consentimiento sin que el usuario la marque activamente vulnera el principio de consentimiento informado y puede incumplir normativa de protección de datos.'
            correct: true
            explanation: 'Correcto. Este no es un trade-off razonable de fricción a cambio de conversión: es un patrón que compromete el consentimiento genuino del usuario y probablemente la legalidad, lo cual va más allá de una simple decisión de diseño discutible.'
          - text: 'Porque los usuarios nunca leen las casillas de consentimiento de todas formas.'
            correct: false
            explanation: 'Que algunos usuarios no lean con atención no legitima preseleccionar el consentimiento por ellos; el problema es de principio (consentimiento informado), no de cuánta gente se fija.'
          - text: 'No es problemático, siempre que aumente la tasa de suscripción.'
            correct: false
            explanation: 'Un aumento de métrica no justifica cualquier medio para conseguirlo; cuando el "coste" recae en el consentimiento genuino del usuario, no es un trade-off aceptable, sino un patrón oscuro.'
    - id: trade-offs-mc-2
      type: multiple-choice
      prompt: '¿Cuál de estas situaciones describe mejor un trade-off razonable entre negocio y usuario (no un patrón oscuro)?'
      allowMultiple: false
      options:
          - text: 'Añadir un paso adicional al checkout para confirmar la dirección de envío, lo que añade algo de fricción pero reduce significativamente los envíos fallidos y las reclamaciones posteriores.'
            correct: true
            explanation: 'Correcto. Aquí la fricción adicional beneficia también al usuario (menos envíos perdidos, menos disgustos), aunque a primera vista "más pasos" suene negativo; el trade-off está justificado porque ambas partes ganan a medio plazo.'
          - text: 'Ocultar el botón de cancelar la suscripción en un submenú difícil de encontrar para reducir el churn declarado.'
            correct: false
            explanation: 'Esto no es un trade-off razonable: reduce el churn de forma artificial dificultando una acción legítima del usuario, sin ofrecerle ningún beneficio a cambio. Es un patrón oscuro, no una decisión de diseño defendible.'
          - text: 'Enviar un correo cada día en lugar de uno a la semana para "mantener el engagement alto".'
            correct: false
            explanation: 'Aumentar la frecuencia de contacto sin que aporte valor adicional al usuario probablemente daña la confianza y aumenta las bajas de la lista a medio plazo; no es un trade-off equilibrado, es priorizar una métrica a corto plazo sobre la relación a largo plazo.'
    - id: trade-offs-free-1
      type: free-text
      prompt: 'Cuando una decisión de diseño beneficia a una métrica de negocio a corto plazo pero perjudica la confianza o satisfacción del usuario a largo plazo, ¿qué término usa esta lección para nombrar la palanca temporal que se está sacrificando?'
      acceptedAnswers:
          - 'confianza'
          - 'confianza del usuario'
          - 'largo plazo'
      explanation: 'La confianza del usuario es el activo que casi siempre está en juego en un mal trade-off: se puede ganar una métrica puntual a costa de ella, pero recuperarla después, si se pierde, suele costar mucho más que lo que se ganó.'
---

## No todo desacuerdo es un conflicto real

Es fácil caer en la narrativa de "negocio contra usuario", como si fueran bandos siempre opuestos. En la mayoría de los casos, lo mejor para el usuario y lo mejor para el negocio coinciden a medio plazo: un producto que resuelve bien la necesidad de sus usuarios retiene mejor, recomienda más y cuesta menos en soporte. El verdadero trabajo de un diseñador con criterio de negocio es distinguir los casos en los que de verdad hay una tensión real de aquellos en los que solo parece haberla porque se está mirando un horizonte de tiempo demasiado corto.

## Cómo reconocer un trade-off razonable

Un trade-off razonable tiene estas características: añade algo de fricción o coste en un punto, pero genera un beneficio real (para el usuario, para el negocio, o para ambos) que compensa ese coste, y es transparente —el usuario entiende por qué existe ese paso, aunque le resulte algo menos cómodo—. El ejemplo del paso de confirmación de dirección de envío en un checkout es un buen caso: cuesta un clic extra, pero reduce errores costosos para ambas partes.

## Cómo reconocer un trade-off que no lo es (patrón oscuro)

Un trade-off deja de ser razonable cuando el "coste" que se impone al usuario no le aporta ningún beneficio a él, solo al negocio, y además se oculta o dificulta deliberadamente para que el usuario no lo note (una casilla premarcada, un botón de cancelar escondido). En ese punto ya no se trata de una decisión de diseño discutible: es un patrón oscuro, y esta categoría le dedica una lección propia porque merece un tratamiento distinto al de un trade-off normal.

## Preguntas útiles antes de aceptar un trade-off

Antes de aceptar una petición de negocio que añade fricción o reduce transparencia para el usuario, conviene hacer explícitas estas preguntas al equipo: ¿el usuario entiende por qué existe este paso, o se siente engañado si se detiene a pensarlo?, ¿este cambio beneficia solo al negocio a corto plazo, o también protege al usuario de algo (errores, malentendidos, decisiones apresuradas)?, ¿aceptaríamos explicar esta decisión públicamente al usuario sin que sonara mal? Si la respuesta a la última pregunta es no, probablemente no es un trade-off razonable.

## Negociar el trade-off, no solo aceptarlo o rechazarlo

Cuando aparece una tensión real, el trabajo de diseño no termina en un "sí" o un "no": a menudo existe una tercera vía que reduce el coste para el usuario sin renunciar al objetivo de negocio. Por ejemplo, si negocio pide reducir a toda costa los pasos del checkout, una alternativa de diseño puede ser simplificar el contenido de cada paso en lugar de eliminar pasos que protegen al usuario de errores. Proponer esa alternativa, en lugar de aceptar o vetar sin más, es donde un diseñador aporta más valor en esta conversación.
