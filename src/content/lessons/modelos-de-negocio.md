---
title: 'Modelos de negocio y su impacto en el diseño'
description: 'Cómo cambia el trabajo de diseño según el producto se pague por suscripción, sea gratuito con publicidad, funcione como marketplace o se venda a otras empresas.'
category: business
level: beginner
order: 2
subcategory: fundamentos-negocio
exercises:
    - id: modelos-negocio-mc-1
      type: multiple-choice
      prompt: 'En un producto financiado por publicidad (el usuario no paga, los anunciantes sí), ¿qué tensión de diseño aparece con más frecuencia?'
      allowMultiple: false
      options:
          - text: 'El objetivo de maximizar el tiempo o la atención del usuario en la app puede entrar en conflicto con ayudarle a resolver su tarea de la forma más rápida posible.'
            correct: true
            explanation: 'Correcto. Cuando el ingreso depende de la atención (impresiones publicitarias), existe un incentivo a diseñar para retener más tiempo del necesario, lo que puede chocar con el principio de eficiencia y respeto por el tiempo del usuario.'
          - text: 'El diseño deja de importar porque el usuario no paga directamente por el producto.'
            correct: false
            explanation: 'Al contrario: cuando el usuario no paga, la experiencia sigue siendo crítica para retenerlo, porque es la propia atención y actividad del usuario lo que genera el ingreso.'
          - text: 'Los anunciantes diseñan la interfaz, no el equipo de producto.'
            correct: false
            explanation: 'Los anunciantes compran espacio o atención, pero el diseño de la interfaz sigue siendo responsabilidad del equipo de producto y diseño.'
    - id: modelos-negocio-mc-2
      type: multiple-choice
      prompt: 'Un producto B2B (se vende a otras empresas, no a consumidores individuales) suele tener un ciclo de decisión de compra distinto al de un producto B2C. ¿Qué implica esto para el diseño?'
      allowMultiple: true
      options:
          - text: 'A menudo hay que diseñar para varios roles distintos dentro de la misma cuenta (quien usa la herramienta a diario, quien administra permisos, quien decide la compra).'
            correct: true
            explanation: 'Correcto. En B2B es habitual que el comprador, el administrador y el usuario final del día a día sean personas distintas con necesidades distintas, y el diseño debe servir a los tres.'
          - text: 'Suele ser importante diseñar pantallas de administración, permisos y facturación que en un producto B2C individual no harían falta.'
            correct: true
            explanation: 'Correcto. La gestión de equipos, roles y facturación centralizada es habitual en herramientas B2B y forma parte del alcance de diseño, aunque no sea la funcionalidad "principal" del producto.'
          - text: 'El onboarding puede ignorarse porque las empresas siempre forman a sus empleados por su cuenta.'
            correct: false
            explanation: 'No asumas eso: un mal onboarding en B2B también provoca abandono, especialmente en herramientas de autoservicio donde no hay formación presencial garantizada.'
    - id: modelos-negocio-free-1
      type: free-text
      prompt: 'Un modelo de negocio en el que el producto conecta a dos tipos de usuarios distintos que se necesitan mutuamente (por ejemplo, conductores y pasajeros, o vendedores y compradores) se conoce como...'
      acceptedAnswers:
          - 'marketplace'
          - 'mercado de dos lados'
          - 'plataforma de dos lados'
      explanation: 'Un marketplace (o plataforma de dos lados) conecta oferta y demanda, y su diseño tiene que servir a ambos lados a la vez, a menudo con interfaces completamente distintas (por ejemplo, la app del conductor frente a la app del pasajero).'
---

## El modelo de negocio condiciona qué se optimiza

No existe un único "buen diseño" universal: lo que es una buena decisión de diseño depende de cómo gana dinero el producto y qué comportamiento necesita fomentar. Un mismo patrón de interfaz —por ejemplo, una notificación push agresiva— puede ser una buena decisión en un producto que vive de la actividad diaria del usuario, y una mala decisión en una herramienta profesional que se paga por valor entregado, no por tiempo de uso. Antes de proponer un cambio de diseño, conviene preguntarse: ¿cómo gana dinero este producto, y qué comportamiento del usuario beneficia directamente a ese modelo?

## Los modelos más habituales y su efecto en el diseño

- **Suscripción (SaaS, servicios de streaming)**: el ingreso depende de que el usuario siga pagando mes a mes, así que el diseño debe demostrar valor de forma recurrente, no solo en la primera visita. La retención importa más que la conversión puntual.
- **Freemium**: una versión gratuita coexiste con una de pago. El diseño tiene que dejar claro qué gana el usuario al pagar, sin hacer que la versión gratuita se sienta rota o deliberadamente limitada de forma frustrante.
- **Publicitario**: el usuario no paga, los anunciantes sí, y el ingreso suele depender del tiempo de atención o del volumen de interacciones. Aparece la tensión entre maximizar atención y respetar el tiempo del usuario.
- **Transaccional o marketplace**: el producto cobra una comisión por cada operación entre dos partes (comprador/vendedor, conductor/pasajero). El diseño debe servir a ambos lados del mercado, a menudo con necesidades opuestas.
- **B2B / empresa a empresa**: se vende a organizaciones, no a individuos, con ciclos de compra más largos, varios roles implicados (usuario final, administrador, comprador) y necesidad de funciones de gestión de equipos y permisos.
- **Producto físico con app de soporte**: la app no es el producto principal, sino que complementa un dispositivo o servicio físico; su éxito se mide por cómo mejora la experiencia del producto real, no por métricas de app aisladas.

## Una misma funcionalidad, decisiones distintas

Piensa en un simple recordatorio dentro de la app. En un producto de suscripción, un recordatorio bien calibrado ("no has usado tu plan esta semana") puede reducir la cancelación. En un producto publicitario, ese mismo mecanismo puede degenerar en notificaciones constantes diseñadas solo para traer de vuelta al usuario, dañando la confianza a medio plazo. La funcionalidad es la misma; lo que cambia es el criterio con el que se diseña, calibra y mide, en función de qué modelo de negocio hay detrás.

## Identifica el modelo antes de diseñar

Antes de empezar a diseñar una funcionalidad nueva, identifica explícitamente: ¿de dónde viene el ingreso de este producto?, ¿qué comportamiento del usuario beneficia directamente a ese ingreso?, ¿hay más de un tipo de usuario al que hay que servir? Esta identificación, aunque parezca obvia una vez hecha, rara vez se hace de forma explícita en equipos jóvenes, y es la base de la mayoría de las lecciones siguientes de esta categoría.
