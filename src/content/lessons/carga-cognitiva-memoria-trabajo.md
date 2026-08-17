---
title: 'Carga cognitiva y memoria de trabajo'
description: 'Aplica la teoría de la carga cognitiva de Sweller y el modelo de memoria de trabajo de Baddeley para simplificar interfaces y flujos complejos.'
category: psychology
level: intermediate
subcategory: memoria-carga-cognitiva
order: 2
exercises:
    - id: carga-mc-1
      type: multiple-choice
      prompt: 'Según la Cognitive Load Theory de John Sweller, ¿qué es la "carga extrínseca" (extraneous load)?'
      allowMultiple: false
      options:
          - text: 'El esfuerzo mental que genera la forma en que se presenta la información —un diseño confuso, ruido visual, pasos innecesarios— y que no aporta nada a la comprensión de la tarea en sí.'
            correct: true
            explanation: 'Correcto. La carga extrínseca es "desperdiciada": no ayuda a entender la tarea, solo la dificulta, y es la que el diseño de interfaz puede y debe reducir casi a cero.'
          - text: 'La dificultad inherente al propio contenido o tarea, que no puede eliminarse por completo.'
            correct: false
            explanation: 'Esa es la carga intrínseca (intrinsic load): la complejidad propia de la tarea, independiente de cómo se presente.'
          - text: 'El esfuerzo dedicado a construir y automatizar esquemas mentales útiles a largo plazo.'
            correct: false
            explanation: 'Esa es la carga germana (germane load): el esfuerzo "bueno" que ayuda al aprendizaje real, no el que se debe eliminar.'
    - id: carga-mc-2
      type: multiple-choice
      prompt: 'Un editor de diseño muestra, en todo momento y en una sola barra lateral, más de cuarenta opciones de formato (tipografía, color, sombra, animación, exportación...) sin agrupar ni ocultar nada. ¿Qué principio de memoria de trabajo se está ignorando?'
      allowMultiple: false
      options:
          - text: 'La memoria de trabajo tiene una capacidad muy limitada para mantener y manipular información activa a la vez; mostrar todo simultáneamente sobrecarga el "central ejecutivo" del modelo de Baddeley y Hitch en lugar de apoyarlo.'
            correct: true
            explanation: 'Correcto. El modelo de memoria de trabajo de Baddeley y Hitch (1974) describe un sistema de capacidad limitada que coordina información activa; la divulgación progresiva (mostrar solo lo relevante en cada momento) respeta ese límite en vez de saturarlo.'
          - text: 'Se está ignorando la ley de Fitts sobre el tamaño de los objetivos táctiles.'
            correct: false
            explanation: 'La ley de Fitts trata sobre el tiempo para alcanzar un objetivo según su tamaño y distancia, no sobre cuánta información se muestra a la vez.'
          - text: 'Se está ignorando el principio de contraste de color de la accesibilidad WCAG.'
            correct: false
            explanation: 'El problema descrito es de sobrecarga de opciones simultáneas, no de contraste de color.'
    - id: carga-order-1
      type: ordering
      prompt: 'Ordena estas técnicas de reducción de carga extrínseca, de la que actúa más pronto en el flujo (antes de que la persona vea nada) a la que actúa más tarde (una vez ya está interactuando).'
      items:
          - 'Eliminar del flujo los pasos y campos que no son estrictamente necesarios'
          - 'Agrupar la información restante en secciones o pasos más pequeños (chunking)'
          - 'Aplicar divulgación progresiva: ocultar opciones avanzadas hasta que se pidan explícitamente'
          - 'Dar feedback inmediato ante cada acción para que no haya que recordar si algo se guardó o no'
      explanation: 'La reducción de carga empieza por decidir qué información es realmente necesaria, sigue por organizarla en unidades manejables, continúa ocultando lo secundario, y termina con feedback en tiempo real que evita mantener estado "en la cabeza" de la persona usuaria mientras interactúa.'
    - id: carga-free-1
      type: free-text
      prompt: 'Baddeley y Hitch dividieron la memoria de trabajo en varios componentes especializados. ¿Cómo se llama el componente que se encarga específicamente de la información visual y espacial (formas, posiciones, colores)?'
      acceptedAnswers:
          - 'agenda visoespacial'
          - 'agenda visuoespacial'
          - 'bucle visoespacial'
          - 'esbozo visoespacial'
          - 'visuospatial sketchpad'
          - 'visospatial sketchpad'
      explanation: 'La "agenda" o "esbozo visoespacial" (visuospatial sketchpad) procesa y retiene temporalmente información visual y espacial, mientras que el "bucle fonológico" hace lo propio con la información verbal y auditiva, y el "ejecutivo central" coordina ambos.'
---

## Memoria de trabajo: la "mesa de trabajo" mental

Mientras la memoria a corto plazo describe _cuánta_ información se retiene brevemente, el modelo de **memoria de trabajo de Baddeley y Hitch (1974)** describe _cómo_ esa información se manipula activamente mientras se realiza una tarea. Propusieron un sistema con varios componentes: el **bucle fonológico** (información verbal/auditiva), la **agenda visoespacial** (información visual y espacial) y un **ejecutivo central** que coordina ambos y dirige la atención. Este sistema es el que se usa, por ejemplo, al comparar precios de dos productos manteniendo ambos valores "en mente" mientras se decide, o al seguir los pasos de un asistente de configuración. Su capacidad es limitada y se agota con facilidad: cuantos más elementos deba coordinar simultáneamente, más probable es el error o el abandono.

## La teoría de la carga cognitiva de Sweller

**John Sweller (1988)** formalizó esta idea en la **Cognitive Load Theory**, distinguiendo tres tipos de carga mental:

1. **Carga intrínseca**: la complejidad inherente a la tarea (declarar impuestos es intrínsecamente más complejo que enviar un mensaje). No puede eliminarse del todo, pero sí puede fraccionarse en pasos más simples.
2. **Carga extrínseca**: el esfuerzo "desperdiciado" causado por una mala presentación de la información —jerarquía visual confusa, jerga innecesaria, pasos redundantes—. Es la que el diseño de interfaz debe reducir de forma agresiva, porque no aporta nada a la comprensión de la tarea.
3. **Carga germana**: el esfuerzo que sí ayuda a construir un modelo mental útil y duradero de cómo funciona el producto. Un poco de carga germana es deseable; toda carga extrínseca es coste puro.

## Técnicas de diseño para reducir carga extrínseca

- **Divulgación progresiva (progressive disclosure)**: mostrar solo las opciones necesarias en cada momento y ocultar lo avanzado tras una acción explícita ("Más opciones"), en vez de presentar todo de golpe.
- **Chunking**: agrupar campos relacionados en secciones o pasos (nombre y apellidos juntos, dirección de envío en su propio bloque) en lugar de un formulario plano larguísimo.
- **Eliminar pasos y campos no esenciales**: cada campo o decisión adicional en un flujo es carga extrínseca si no aporta valor directo a completar la tarea.
- **Feedback inmediato y persistente**: mostrar de forma visible el estado actual (qué está guardado, qué campo falta) evita que la persona tenga que mantener ese estado en su propia memoria de trabajo mientras interactúa.

## Un caso típico: los asistentes multi-paso (wizards)

Los flujos de varios pasos (onboarding, checkout, configuración inicial) son, en esencia, una estrategia de gestión de carga cognitiva: en vez de exigir que la memoria de trabajo sostenga veinte decisiones a la vez, se fracciona la tarea en subtareas de dos o tres decisiones cada una, reduciendo la carga intrínseca "efectiva" en cada pantalla. El riesgo del lado opuesto también existe: fragmentar en exceso un flujo simple añade carga extrínseca (más clics, más pantallas que recordar en secuencia), así que el número de pasos debe calibrarse según la complejidad real de la tarea, no aplicarse como regla fija.

## Aplicación práctica: el test de la "mesa de trabajo"

Una heurística rápida para auditar un flujo es preguntarse cuántos elementos debe mantener "activos en la cabeza" la persona usuaria en cada pantalla para tomar la siguiente decisión. Si la respuesta supera 3-4 elementos simultáneos (un precio, una fecha, una condición, una comparación), es una señal de que conviene reestructurar la pantalla —mostrando esos datos de forma persistente y visible— en lugar de confiar en que la memoria de trabajo de la persona los sostenga por sí sola.
