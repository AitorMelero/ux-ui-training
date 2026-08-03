---
title: 'Introducción a la lógica de negocio en diseño'
description: 'Por qué un diseñador que entiende el negocio toma mejores decisiones, y el vocabulario básico para hablar el mismo idioma que producto y dirección.'
category: business
level: beginner
order: 1
exercises:
    - id: intro-negocio-mc-1
      type: multiple-choice
      prompt: '¿Por qué debería un diseñador de UX/UI entender la lógica de negocio del producto en el que trabaja?'
      allowMultiple: false
      options:
          - text: 'Porque toda decisión de diseño tiene un coste y un efecto sobre el negocio, y entenderlo permite defender y priorizar mejor las propuestas.'
            correct: true
            explanation: 'Correcto. El diseño no ocurre en el vacío: cada pantalla, flujo o componente consume tiempo de desarrollo y afecta a métricas que le importan al negocio. Entender esa relación es lo que convierte una opinión de diseño en una decisión informada.'
          - text: 'Porque el diseñador debe encargarse de fijar el precio del producto.'
            correct: false
            explanation: 'Fijar precios suele ser responsabilidad de producto o de negocio, no del diseño. Entender la lógica de negocio no significa asumir esas funciones, sino diseñar con ese contexto en mente.'
          - text: 'Porque así se pueden ignorar las heurísticas de usabilidad si el negocio lo pide.'
            correct: false
            explanation: 'Al contrario: entender el negocio ayuda a defender mejor la usabilidad, mostrando cómo una mala experiencia perjudica también los resultados de negocio a medio plazo.'
    - id: intro-negocio-mc-2
      type: multiple-choice
      prompt: 'Un equipo de diseño propone eliminar tres campos de un formulario de registro porque los tests de usabilidad muestran que confunden a los usuarios. ¿Qué argumento conecta mejor esa mejora con el negocio?'
      allowMultiple: false
      options:
          - text: '"Cada campo de más reduce la tasa de finalización del registro; menos fricción debería traducirse en más usuarios registrados."'
            correct: true
            explanation: 'Correcto. Traduce un hallazgo de usabilidad (confusión, fricción) a una métrica que el negocio vigila directamente (tasa de finalización de registro), lo que hace el argumento mucho más persuasivo para quien decide con criterios de negocio.'
          - text: '"El formulario se ve más bonito con menos campos."'
            correct: false
            explanation: 'La estética por sí sola rara vez convence a quien prioriza con criterios de negocio; falta la conexión con un resultado medible.'
          - text: '"Los usuarios se van a quejar si no lo cambiamos."'
            correct: false
            explanation: 'Es un argumento vago y anecdótico. Conectar el cambio con una métrica de negocio concreta (conversión, abandono) es mucho más convincente que apelar a quejas hipotéticas.'
    - id: intro-negocio-free-1
      type: free-text
      prompt: 'En el vocabulario de negocio, ¿cómo se llama la métrica clave que un equipo usa para saber si está progresando hacia un objetivo concreto (por ejemplo, "aumentar el registro de usuarios en un 20%")?'
      acceptedAnswers:
          - 'kpi'
          - 'indicador clave de rendimiento'
          - 'indicador clave'
      explanation: 'KPI (Key Performance Indicator, indicador clave de rendimiento) es la métrica concreta que un equipo elige para saber si se está acercando a un objetivo. En diseño es habitual que un cambio de interfaz se justifique explicando cómo espera mover un KPI concreto.'
---

## Diseñar no es una actividad aislada del negocio

Toda organización que construye un producto digital necesita que ese producto genere un resultado: ingresos, usuarios activos, reducción de costes de soporte, retención de clientes. El diseño de UX/UI es una de las palancas más directas para conseguir ese resultado, porque decide cómo se comporta la gente dentro del producto: si completa el registro, si encuentra lo que busca, si vuelve al día siguiente. Un diseñador que entiende esto dejar de pensar solo en "¿esto se ve bien y es usable?" y empieza a preguntarse también "¿esto ayuda a que el negocio consiga lo que necesita, sin sacrificar al usuario?". Esta categoría trata precisamente de esa segunda pregunta: cómo pensar y comunicar el diseño en términos que el resto de la organización —producto, negocio, dirección— también entiende.

## Vocabulario mínimo para hablar el mismo idioma

Estos términos aparecen constantemente en conversaciones de negocio y conviene manejarlos con soltura:

- **KPI (indicador clave de rendimiento)**: una métrica concreta elegida para medir el progreso hacia un objetivo (por ejemplo, tasa de conversión del checkout).
- **ROI (retorno de la inversión)**: cuánto beneficio genera una inversión en relación a su coste. Un rediseño también puede evaluarse en estos términos: ¿el coste de construirlo se compensa con el resultado que produce?
- **Stakeholder**: cualquier persona con interés o poder de decisión sobre el producto (dirección, ventas, soporte, legal), no solo el equipo de diseño y desarrollo.
- **Funnel (embudo)**: la secuencia de pasos que sigue un usuario hasta completar un objetivo de negocio (por ejemplo, ver el producto → añadirlo al carrito → pagar), y en qué paso se pierde gente.
- **Business case**: el documento o argumento que justifica por qué merece la pena invertir tiempo y dinero en una iniciativa concreta, comparando coste esperado con beneficio esperado.

## El diseño como inversión, no como decoración

Un error habitual en equipos jóvenes es presentar el diseño como un lujo estético que se aplica "al final", cuando en realidad cada decisión de diseño tiene un coste de oportunidad: el tiempo que un equipo de desarrollo dedica a construir una pantalla es tiempo que no dedica a otra cosa. Pensar el diseño como una inversión significa preguntarse, antes de proponer un cambio, qué problema de negocio resuelve y cómo se sabrá si ha funcionado. No se trata de justificar cada botón con una hoja de cálculo, sino de tener siempre a mano la respuesta a "¿por qué esto y no otra cosa?" en términos que el resto de la organización entienda.

## Qué no cambia: el usuario sigue en el centro

Entender el negocio no significa subordinar al usuario a cualquier objetivo comercial a corto plazo. Las mejores decisiones de diseño son las que benefician a ambos a la vez: un checkout más claro reduce la frustración del usuario y, al mismo tiempo, sube la conversión del negocio. Las lecciones de esta categoría —desde la priorización hasta la monetización ética— tratan justamente de encontrar ese punto de encuentro, y de reconocer cuándo un objetivo de negocio a corto plazo entra en conflicto con la confianza del usuario a largo plazo.
