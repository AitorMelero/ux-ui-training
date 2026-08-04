---
title: 'El coste de una mala decisión de diseño'
description: 'Por qué un mal diseño no es solo "feo", sino caro: coste de desarrollo, coste de soporte, coste de oportunidad y coste de confianza perdida.'
category: business
level: beginner
order: 4
subcategory: fundamentos-negocio
exercises:
    - id: coste-diseno-mc-1
      type: multiple-choice
      prompt: 'Un equipo lanza una funcionalidad con un flujo confuso. Como consecuencia, el equipo de soporte recibe el triple de tickets sobre esa pantalla. ¿A qué tipo de coste corresponde este efecto?'
      allowMultiple: false
      options:
          - text: 'Coste de soporte: un diseño poco claro traslada trabajo de explicación al equipo de atención al cliente, que es un coste real y recurrente para la empresa.'
            correct: true
            explanation: 'Correcto. Cuando la interfaz no resuelve las dudas del usuario por sí misma, ese trabajo no desaparece: se traslada a soporte, y ese coste es medible en horas de trabajo y en satisfacción del cliente.'
          - text: 'Coste de oportunidad, porque el equipo podría haber construido otra funcionalidad en su lugar.'
            correct: false
            explanation: 'El coste de oportunidad se refiere a qué se dejó de hacer por invertir tiempo en esto; el aumento de tickets de soporte es un coste distinto y adicional, directamente causado por la confusión del diseño.'
          - text: 'No tiene coste, porque la funcionalidad ya está construida y en producción.'
            correct: false
            explanation: 'El coste no termina cuando algo se lanza: un diseño confuso sigue generando trabajo (tickets, correcciones, frustración) mientras siga así, y a menudo ese coste continuado supera al coste inicial de construcción.'
    - id: coste-diseno-mc-2
      type: multiple-choice
      prompt: '¿Qué significa "coste de oportunidad" aplicado a una decisión de diseño?'
      allowMultiple: false
      options:
          - text: 'El valor de lo que el equipo podría haber conseguido si hubiera dedicado ese mismo tiempo a otra iniciativa distinta.'
            correct: true
            explanation: 'Correcto. Todo el tiempo de un equipo es limitado; construir algo siempre significa no construir otra cosa en ese mismo periodo, y ese "algo más" no construido es el coste de oportunidad.'
          - text: 'El precio que se cobra al usuario por usar una funcionalidad de diseño premium.'
            correct: false
            explanation: 'Eso sería un modelo de monetización, no el concepto de coste de oportunidad, que se refiere a alternativas no elegidas por el propio equipo, no a un precio para el usuario.'
          - text: 'El coste de contratar a un diseñador adicional.'
            correct: false
            explanation: 'Ese sería un coste directo de personal, distinto del coste de oportunidad, que mide el valor de la alternativa no elegida con los recursos ya disponibles.'
    - id: coste-diseno-free-1
      type: free-text
      prompt: 'Cuando un usuario tiene una mala experiencia con un producto y decide no volver a usarlo (o dejar de pagar por él), ¿cómo se llama a la métrica de negocio que sube como consecuencia directa?'
      acceptedAnswers:
          - 'churn'
          - 'tasa de cancelacion'
          - 'tasa de cancelación'
          - 'tasa de abandono'
      explanation: 'El churn (tasa de cancelación o abandono) es probablemente el coste más silencioso de una mala experiencia: el usuario no se queja activamente, simplemente deja de usar el producto o cancela su suscripción, y ese coste rara vez se atribuye correctamente a la decisión de diseño que lo originó.'
---

## El mito del diseño "gratis"

Es tentador pensar que una mala decisión de diseño solo cuesta "verse peor". En la práctica, casi siempre tiene un coste medible en dinero, tiempo o confianza, incluso si nadie lo registra explícitamente como tal. Aprender a nombrar esos costes es una de las herramientas más útiles para justificar por qué invertir en diseño no es un capricho estético, sino una decisión con impacto financiero directo.

## Cuatro tipos de coste que genera un mal diseño

- **Coste de desarrollo repetido**: un diseño mal validado antes de construirse a menudo hay que rehacerlo después de lanzado, cuando ya se ha comprobado que no funciona. Rehacer algo cuesta más que hacerlo bien la primera vez, porque además hay que deshacer lo anterior.
- **Coste de soporte**: cuando la interfaz no explica algo por sí sola, ese trabajo se traslada al equipo de atención al cliente en forma de tickets, chats y llamadas, un gasto recurrente mientras el problema no se arregle.
- **Coste de oportunidad**: el tiempo dedicado a construir (o corregir) algo mal diseñado es tiempo que el equipo no dedicó a otra iniciativa que quizás habría generado más valor.
- **Coste de confianza**: una mala experiencia repetida erosiona la confianza del usuario en el producto, lo que se traduce, más adelante, en menor retención, peores reseñas y más churn. Este coste es el más difícil de medir en el momento, pero suele ser el más caro a largo plazo.

## Un ejemplo con números aproximados

Imagina un flujo de pago con un error de validación mal comunicado: el usuario introduce su tarjeta correctamente, pero un mensaje de error genérico le hace pensar que algo falló, y abandona la compra. Si ese error afecta al 5% de los intentos de compra de un producto con 10.000 intentos al mes, son 500 compras perdidas cada mes, de forma silenciosa y recurrente, hasta que alguien lo detecte y lo arregle. Comparar ese coste continuado con el coste puntual de arreglar el mensaje de error (unas pocas horas de diseño y desarrollo) suele hacer evidente por qué merece la pena priorizarlo.

## De la queja vaga al argumento con coste

La diferencia entre "esto es confuso" y "esto probablemente nos está costando X compras/registros/tickets al mes" es enorme para quien tiene que decidir qué priorizar. No siempre se dispone de datos exactos, pero incluso una estimación razonada ("si el 3% de los usuarios abandona en este paso, y recibimos N usuarios al mes, son aproximadamente...") convierte una intuición de diseño en un argumento que compite en igualdad de condiciones con cualquier otra propuesta de negocio.
