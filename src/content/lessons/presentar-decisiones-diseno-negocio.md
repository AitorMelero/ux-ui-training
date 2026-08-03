---
title: 'Cómo presentar decisiones de diseño en términos de negocio'
description: 'Estructura y lenguaje para que una propuesta de diseño se entienda y se apruebe en una sala donde la mayoría no piensa en píxeles, sino en resultados.'
category: business
level: advanced
order: 12
subcategory: comunicacion-stakeholders
exercises:
    - id: presentar-mc-1
      type: multiple-choice
      prompt: 'Al presentar un rediseño a dirección, ¿cuál de estas aperturas suele funcionar mejor que empezar mostrando directamente las pantallas nuevas?'
      allowMultiple: false
      options:
          - text: 'Empezar recordando el problema medido (por ejemplo, "el 40% de los usuarios abandona en este paso") antes de mostrar la solución, para que la sala entienda primero por qué importa.'
            correct: true
            explanation: 'Correcto. Presentar primero el problema y su magnitud (con datos) da contexto y urgencia a la solución; mostrar pantallas sin ese contexto previo obliga a la audiencia a evaluar estética antes de entender el problema que resuelve.'
          - text: 'Empezar mostrando las pantallas nuevas, porque son lo más visual y capta la atención de inmediato.'
            correct: false
            explanation: 'Captar la atención no es el objetivo principal de la apertura; sin contexto del problema, la audiencia evalúa las pantallas por gusto estético en lugar de por si resuelven algo relevante.'
          - text: 'Empezar explicando en detalle el proceso de investigación con usuarios que se siguió, paso a paso.'
            correct: false
            explanation: 'El proceso de investigación es información de apoyo valiosa, pero rara vez es lo primero que necesita saber una audiencia orientada a negocio; el problema y su impacto deben ir primero.'
    - id: presentar-mc-2
      type: multiple-choice
      prompt: 'Un stakeholder pregunta "¿y esto cuánto va a mejorar las ventas?" sobre un rediseño centrado en accesibilidad. ¿Cuál es la mejor forma de responder?'
      allowMultiple: false
      options:
          - text: 'Conectar la mejora de accesibilidad con una métrica de negocio relevante que sí se pueda estimar (por ejemplo, ampliación del mercado direccionable, reducción de riesgo legal, o retención de usuarios que hoy abandonan por barreras de uso), en lugar de evitar la pregunta.'
            correct: true
            explanation: 'Correcto. Incluso cuando el objetivo principal no es directamente "vender más", casi siempre existe una conexión de negocio razonable que se puede articular; evitar la pregunta o responder solo en términos éticos suele perder a una audiencia orientada a resultados.'
          - text: 'Responder que las ventas no son relevantes cuando se trata de accesibilidad, y que la pregunta está fuera de lugar.'
            correct: false
            explanation: 'Descalificar la pregunta suele cerrar la conversación en lugar de avanzarla; es más efectivo traducir el valor de accesibilidad a términos que esa audiencia entienda, sin renunciar a la razón ética de fondo.'
          - text: 'Inventar una cifra de mejora de ventas aproximada para dar una respuesta rápida y cerrar el tema.'
            correct: false
            explanation: 'Dar una cifra sin base real daña la credibilidad si luego no se cumple; es mejor ser honesto sobre qué se puede estimar y qué no, y ofrecer una métrica proxy razonable en su lugar.'
    - id: presentar-order-1
      type: ordering
      prompt: 'Ordena estas partes de una presentación de una propuesta de diseño a stakeholders, de la primera a la última.'
      items:
          - 'El problema, con datos que muestren su magnitud e impacto'
          - 'La propuesta de solución, con ejemplos visuales concretos'
          - 'Por qué esta solución concreta, frente a las alternativas consideradas'
          - 'Qué resultado se espera y cómo se va a medir tras el lanzamiento'
      explanation: 'Esta estructura —problema, solución, justificación de la solución elegida, medición esperada— responde en orden a las preguntas que de forma natural se hace una audiencia orientada a negocio: ¿por qué importa?, ¿qué se propone?, ¿por qué esto y no otra cosa?, ¿cómo sabremos si funcionó?'
---

## La sala no evalúa lo mismo que el equipo de diseño

Cuando una propuesta de diseño se presenta a un equipo de diseño, se evalúa con criterios de diseño: coherencia visual, usabilidad, consistencia con el sistema de diseño. Cuando esa misma propuesta se presenta a dirección o a stakeholders de negocio, se evalúa con otros criterios: ¿qué problema resuelve?, ¿cuánto cuesta construirlo?, ¿qué resultado se espera? Presentar de la misma forma en ambos contextos es uno de los errores más comunes que hacen que buenas propuestas de diseño no se aprueben, no porque sean malas, sino porque se presentan en el idioma equivocado.

## Estructura que funciona: problema, solución, justificación, medición

Una estructura fiable para presentar una propuesta a una audiencia de negocio sigue este orden:

1. **El problema, con datos**: qué está fallando y cuánto cuesta (usuarios perdidos, tickets de soporte, tiempo desperdiciado), no solo "esto es confuso".
2. **La solución propuesta**: mostrada de forma visual y concreta, no como concepto abstracto.
3. **Por qué esta solución y no otra**: qué alternativas se consideraron y por qué se descartaron, demostrando que hubo criterio, no solo gusto personal.
4. **Cómo se medirá el resultado**: qué métrica concreta se espera mover, y en qué plazo se podrá comprobar si funcionó.

Empezar por el problema, no por la solución, es el cambio más importante: da a la audiencia un motivo para que le importe la solución antes de juzgarla.

## Traducir el lenguaje de diseño a lenguaje de negocio

Términos como "jerarquía visual", "carga cognitiva" o "affordance" son precisos dentro de un equipo de diseño, pero pueden sonar a jerga irrelevante fuera de él. No hace falta evitarlos por completo, pero sí acompañarlos siempre de su traducción a un efecto medible: en lugar de "mejora la jerarquía visual del formulario", decir "hace más fácil ver qué campos son obligatorios, lo que debería reducir los errores de envío que hoy generan tickets de soporte".

## Responder preguntas de negocio sin perder el criterio de diseño

Es habitual recibir preguntas orientadas puramente a negocio ("¿esto sube las ventas?") sobre propuestas que no tienen ese objetivo directo. La mejor respuesta no es defenderse ni ignorar la pregunta, sino encontrar la conexión de negocio real que sí existe (reducción de riesgo, ampliación de mercado, retención) y presentarla con honestidad sobre lo que se puede y no se puede prometer con certeza.

## Anticipar objeciones antes de que aparezcan

Una presentación sólida anticipa las objeciones más probables de la audiencia (coste de desarrollo, riesgo de retrasar el lanzamiento, si de verdad hace falta) y las aborda de forma proactiva dentro de la propia presentación, en lugar de esperar a que surjan como ataque en la sesión de preguntas. Esto se prepara mejor conociendo de antemano las prioridades habituales de cada stakeholder presente.
