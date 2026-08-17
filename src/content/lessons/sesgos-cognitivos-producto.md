---
title: 'Sesgos cognitivos aplicados a producto: anclaje, aversión a la pérdida y framing'
description: 'Comprende tres sesgos cognitivos clave de la economía conductual de Tversky y Kahneman —anclaje, aversión a la pérdida y encuadre— y sus implicaciones éticas en precios, copy y decisiones de producto.'
category: psychology
level: advanced
subcategory: decisiones-sesgos
order: 5
exercises:
    - id: sesgos-mc-1
      type: multiple-choice
      prompt: 'Una página de precios muestra primero un plan tachado de 199 €/mes y, justo al lado, el "precio real" de 49 €/mes. ¿Qué sesgo cognitivo se está utilizando principalmente?'
      allowMultiple: false
      options:
          - text: 'El efecto anclaje: el primer número visto (199 €) actúa como punto de referencia mental, haciendo que el segundo número (49 €) se perciba como más barato de lo que se percibiría si se mostrara solo.'
            correct: true
            explanation: 'Correcto. El anclaje, descrito por Tversky y Kahneman (1974), muestra que los juicios numéricos posteriores se ven arrastrados hacia el primer valor de referencia presentado, incluso cuando ese valor es arbitrario o irrelevante para la decisión.'
          - text: 'La aversión a la pérdida: la persona teme perder el descuento.'
            correct: false
            explanation: 'La aversión a la pérdida se activa con mensajes de "vas a perder algo que ya tienes", no con la simple comparación de dos precios como referencia.'
          - text: 'El efecto de posición serial: el precio se recuerda mejor por estar al principio de la página.'
            correct: false
            explanation: 'El efecto de posición serial trata sobre el recuerdo de elementos en una lista, no sobre cómo un precio de referencia influye en la percepción de otro precio.'
    - id: sesgos-mc-2
      type: multiple-choice
      prompt: 'Dos mensajes comunican exactamente el mismo dato: A) "El 90% de nuestros clientes renueva su suscripción cada año" y B) "El 10% de nuestros clientes cancela su suscripción cada año". ¿Qué fenómeno ilustra la diferencia de impacto entre A y B, a pesar de ser matemáticamente equivalentes?'
      allowMultiple: false
      options:
          - text: 'El efecto de encuadre (framing effect): la misma información objetiva genera reacciones distintas según se presente en términos positivos (ganancia/permanencia) o negativos (pérdida/abandono).'
            correct: true
            explanation: 'Correcto. Tversky y Kahneman demostraron repetidamente que enmarcar la misma información como ganancia o como pérdida cambia sistemáticamente cómo se percibe y se decide, aunque el contenido factual sea idéntico.'
          - text: 'El anclaje: el primer número mencionado condiciona el resto de la percepción.'
            correct: false
            explanation: 'Ambos mensajes presentan un único número cada uno; el fenómeno relevante aquí es cómo se enmarca ese número (positivo vs. negativo), no un anclaje con un segundo valor de referencia.'
          - text: 'La carga cognitiva: el mensaje B es más difícil de procesar porque tiene más palabras.'
            correct: false
            explanation: 'Ambos mensajes tienen una longitud y complejidad similares; la diferencia de impacto no se debe a carga de procesamiento, sino al encuadre positivo o negativo del mismo dato.'
    - id: sesgos-free-1
      type: free-text
      prompt: 'Kahneman y Tversky demostraron que, en términos psicológicos, perder una cantidad de dinero duele aproximadamente el doble de lo que satisface ganar esa misma cantidad. ¿Cómo se llama este sesgo?'
      acceptedAnswers:
          - 'aversion a la perdida'
          - 'aversión a la pérdida'
          - 'loss aversion'
      explanation: 'La aversión a la pérdida (loss aversion), formulada dentro de la teoría de las perspectivas (prospect theory) de Kahneman y Tversky (1979), explica por qué mensajes como "no pierdas tu descuento" o "quedan 2 unidades" son psicológicamente más persuasivos que un mensaje equivalente formulado como ganancia potencial.'
    - id: sesgos-order-1
      type: ordering
      prompt: 'Asocia cada situación de producto con su sesgo cognitivo. Ordena estos tres pares (situación → sesgo) según el orden en que se han explicado en esta lección: anclaje, aversión a la pérdida, framing.'
      items:
          - 'Mostrar un precio tachado más alto junto al precio real para que este último parezca más barato (anclaje)'
          - 'Mostrar "quedan solo 2 plazas" para motivar una compra inmediata por miedo a perder la oportunidad (aversión a la pérdida)'
          - 'Anunciar una comisión como "gratis el primer mes" en vez de "de pago a partir del segundo mes" (framing)'
      explanation: 'Los tres sesgos están relacionados pero son distintos: el anclaje usa un número de referencia previo, la aversión a la pérdida apela al miedo a perder algo ya percibido como propio o disponible, y el framing cambia la valencia (positiva o negativa) con la que se presenta la misma información.'
---

## La economía del comportamiento aplicada a interfaces

**Amos Tversky y Daniel Kahneman**, a través de décadas de investigación resumidas en su **teoría de las perspectivas (prospect theory, 1979)**, demostraron que las personas no toman decisiones de forma perfectamente racional, tal y como asumía la economía clásica, sino que se apoyan en atajos mentales (heurísticas) sistemáticos y predecibles. Tres de esos sesgos son especialmente relevantes en el diseño de producto porque aparecen constantemente en precios, promociones y copy: el **anclaje**, la **aversión a la pérdida** y el **efecto de encuadre (framing)**.

## Anclaje: el primer número condiciona todo lo demás

El **efecto anclaje** (Tversky y Kahneman, 1974) muestra que, al estimar un valor, las personas se apoyan de forma desproporcionada en el primer número que ven, incluso cuando ese número es arbitrario. En producto, esto se traduce en patrones muy conocidos:

- Mostrar un **precio tachado más alto** junto al precio real, para que este último se perciba como una ganga por comparación (independientemente de si el precio tachado refleja un valor real de mercado).
- Presentar primero el **plan más caro** en una tabla de precios, para que los planes intermedios parezcan más razonables por comparación —una técnica conocida como "decoy pricing" o precio señuelo.
- Sugerir un **importe de propina o donación por defecto** relativamente alto, que ancla la percepción de lo que es "normal" dar.

## Aversión a la pérdida: perder duele más de lo que ganar satisface

Kahneman y Tversky encontraron que, psicológicamente, la pérdida de una cantidad se siente aproximadamente el doble de intensa que la satisfacción de ganar la misma cantidad. Este sesgo, la **aversión a la pérdida (loss aversion)**, explica por qué son tan efectivos —y tan usados— mensajes como:

- "Quedan solo 2 unidades en stock" (miedo a perder la oportunidad de compra).
- "Tu prueba gratuita termina en 24 horas: no pierdas el acceso" (enmarcar la finalización del trial como una pérdida inminente, no como el fin natural de un periodo).
- Barras de progreso de "envío gratis a partir de X €", donde no llegar al umbral se percibe como perder un beneficio ya casi conseguido.

## Framing: la misma información, distinto impacto según cómo se presente

El **efecto de encuadre (framing effect)** demuestra que datos matemáticamente idénticos generan decisiones distintas según se presenten en términos de ganancia o de pérdida. El ejemplo clásico de Tversky y Kahneman (1981) sobre un programa de salud pública mostró que las personas eligen opciones distintas según si el mismo resultado se describe como "salvará a 200 de 600 personas" o como "200 vivirán y 400 morirán", pese a ser equivalentes. En producto, el framing aparece en decisiones de copy aparentemente pequeñas pero con impacto real:

- "90% de éxito" se percibe mejor que el equivalente "10% de fracaso", aunque describan el mismo dato.
- "Ahorra 20 €" frente a "evita pagar 20 € de más" comunican el mismo beneficio con distinta carga emocional.
- Un cargo presentado como "cuota de mantenimiento" frente a "recargo" cambia la percepción de justicia del mismo importe.

## El límite ético: de la persuasión al patrón oscuro

Estos tres sesgos son herramientas neutras: pueden usarse para comunicar con más claridad (un framing positivo genuino y honesto es legítimo) o para manipular activamente en contra del interés de la persona usuaria (crear escasez falsa, anclar con precios inflados de forma engañosa, enmarcar una cancelación difícil como una "pérdida" para disuadirla). La diferencia no está en la técnica psicológica en sí, sino en si la información subyacente es veraz y si la decisión resultante beneficia también a quien la toma. Diseñar con conocimiento de estos sesgos exige, por tanto, un criterio ético explícito sobre dónde está esa línea antes de aplicarlos.

## Aplicación práctica: detectar sesgos en tu propio producto

Al revisar una pantalla de precios o una promoción, es útil identificar qué sesgo se está utilizando (anclaje, aversión a la pérdida, framing, o una combinación) y preguntarse explícitamente si la información mostrada es veraz y si el sesgo ayuda a la persona a decidir mejor o solo la empuja hacia una decisión que no tomaría con la misma información presentada de forma neutra.
