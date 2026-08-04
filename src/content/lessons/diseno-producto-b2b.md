---
title: 'Diseñar un producto B2B'
description: 'Cómo cambian las prioridades de diseño cuando el usuario y quien paga no son la misma persona: roles y permisos, configurabilidad y por qué la eficiencia gana a la estética.'
category: projects
level: advanced
order: 6
subcategory: herramientas-y-plataformas
exercises:
    - id: producto-b2b-mc-1
      type: multiple-choice
      prompt: 'En un producto B2B (empresa a empresa), ¿qué diferencia clave respecto a un producto de consumo (B2C) afecta directamente al diseño?'
      allowMultiple: false
      options:
          - text: 'Quien decide comprar el producto (un responsable de compras o dirección) y quien lo usa a diario (un empleado) suelen ser personas distintas, con necesidades y motivaciones diferentes.'
            correct: true
            explanation: 'Correcto. En B2B el comprador valora ROI, seguridad y soporte, mientras que el usuario final valora que la herramienta le facilite el trabajo diario; un buen diseño B2B atiende a ambos sin sacrificar al usuario final por impresionar al comprador.'
          - text: 'Los productos B2B no necesitan pruebas de usabilidad porque los usuarios son profesionales.'
            correct: false
            explanation: 'Ser un usuario profesional no elimina la necesidad de una buena experiencia; de hecho, herramientas B2B mal diseñadas generan igualmente frustración y errores costosos.'
          - text: 'En B2B nunca hay que preocuparse por el diseño visual, solo por la funcionalidad.'
            correct: false
            explanation: 'El diseño visual sigue importando en B2B; lo que cambia es la prioridad relativa frente a la eficiencia y la densidad de información, no que deje de importar.'
    - id: producto-b2b-mc-2
      type: multiple-choice
      prompt: 'Muchos productos B2B necesitan un sistema de "roles y permisos" (por ejemplo, administrador, editor, solo lectura). ¿Por qué esto es una decisión de UX y no solo una decisión técnica?'
      allowMultiple: false
      options:
          - text: 'Porque determina qué ve y puede hacer cada tipo de usuario, y una mala experiencia aquí puede mostrar opciones que un usuario no puede usar, o esconder las que sí necesita, generando confusión o errores.'
            correct: true
            explanation: 'Correcto. Los roles y permisos afectan directamente a qué interfaz ve cada persona; diseñarlo bien evita mostrar botones deshabilitados sin explicación o esconder funciones críticas para un rol que sí las necesita.'
          - text: 'Porque los permisos solo afectan a la base de datos, nunca a lo que se ve en pantalla.'
            correct: false
            explanation: 'Los permisos sí afectan directamente a la interfaz: qué se muestra, qué se oculta y qué aparece deshabilitado con una explicación.'
          - text: 'Porque cuantos más roles existan, mejor es siempre la experiencia.'
            correct: false
            explanation: 'Un exceso de roles y configuraciones puede complicar tanto el producto como su administración; el objetivo es cubrir las necesidades reales, no maximizar el número de roles.'
    - id: producto-b2b-free-1
      type: free-text
      prompt: 'En productos B2B se suele distinguir entre el "comprador" (quien decide adquirir el producto) y el usuario final. ¿Cómo se llama habitualmente, en inglés, a la persona o cargo que evalúa y aprueba la compra dentro de la empresa cliente?'
      acceptedAnswers:
          - 'decision maker'
          - 'buyer'
          - 'comprador'
      explanation: 'El "decision maker" (o buyer) es quien evalúa y aprueba la compra, y suele valorar criterios distintos a los del usuario final del día a día: retorno de la inversión, seguridad, soporte y facilidad de implantación en la organización.'
---

## Dos audiencias, no una

La diferencia estructural de un producto B2B (business to business, empresa a empresa) frente a uno de consumo es que casi nunca hay una sola audiencia: está quien decide comprar (dirección, un responsable de compras) y está quien lo usa cada día (un empleado). Diseñar bien un B2B significa satisfacer a ambos sin que uno perjudique al otro: un producto que solo impresiona en la demo de venta pero es tedioso de usar a diario genera cancelaciones a medio plazo.

## La eficiencia gana a la estética llamativa

Los usuarios de un producto B2B suelen usarlo muchas horas, a menudo como parte de su trabajo obligatorio, no por elección. Esto invierte algunas prioridades habituales de diseño de consumo: importa más reducir el número de clics para una tarea repetitiva que una animación vistosa, y una interfaz densa pero eficiente suele valorarse más que una vacía y "limpia" que obliga a navegar más para hacer lo mismo.

## Roles, permisos y configurabilidad

La mayoría de productos B2B necesitan adaptarse a estructuras organizativas: distintos roles (administrador, miembro del equipo, invitado con solo lectura), distintos permisos y, a menudo, cierta configurabilidad (qué campos son obligatorios, qué flujo de aprobación aplica). Diseñar esto bien implica pensar en estados de interfaz para cada rol, no en una sola pantalla que sirve para todos.

## Onboarding para equipos, no para individuos

En B2C, el onboarding suele centrarse en una sola persona. En B2B, con frecuencia hay que pensar en el onboarding de un equipo completo: quién invita a quién, cómo se configura la cuenta de la organización antes de que el resto de usuarios empiece a trabajar, y cómo se transmite el valor del producto tanto a quien lo compró como a quien lo usará sin haber participado en la decisión de compra.

## Un ejemplo rápido

Al diseñar la pantalla de configuración de un producto de facturación B2B: el administrador de la cuenta necesita configurar impuestos, usuarios con acceso y métodos de pago (una tarea puntual, puede tolerar más pasos); mientras que un empleado que solo necesita emitir facturas cada día necesita un flujo lo más corto posible, sin ver las opciones de configuración que no le corresponden por su rol.

## Ejemplos de productos B2B con buen diseño

- [Stripe](https://stripe.com) — ejemplo de cómo comunicar claridad y confianza a quien decide integrar un producto técnico complejo.
- [Notion](https://www.notion.so) — ejemplo de producto que equilibra configurabilidad para equipos con una curva de aprendizaje razonable para el usuario individual.
