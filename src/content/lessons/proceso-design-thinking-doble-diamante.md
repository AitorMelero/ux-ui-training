---
title: 'Design thinking y el doble diamante'
description: 'Aprende a alternar entre pensamiento divergente y convergente con el modelo del doble diamante, la columna vertebral de cualquier proceso de diseño serio.'
category: ux
level: beginner
order: 2
exercises:
    - id: doble-diamante-mc-1
      type: multiple-choice
      prompt: 'En la fase de "Descubrir" del doble diamante, ¿qué tipo de pensamiento predomina?'
      allowMultiple: false
      options:
          - text: 'Pensamiento convergente: se elige la mejor idea entre varias opciones.'
            correct: false
            explanation: 'Converger (reducir opciones) es propio de "Definir" y "Entregar", las fases que cierran cada diamante, no de "Descubrir".'
          - text: 'Pensamiento divergente: se exploran muchas perspectivas y posibilidades del problema, sin descartar nada todavía.'
            correct: true
            explanation: 'Correcto. "Descubrir" ensancha el diamante: investigación abierta, muchas fuentes, sin filtrar ni juzgar ideas aún.'
          - text: 'Pensamiento puramente técnico, centrado en la viabilidad de desarrollo.'
            correct: false
            explanation: 'La viabilidad técnica entra más adelante; "Descubrir" se centra en entender el problema y el contexto del usuario.'
    - id: doble-diamante-order-1
      type: ordering
      prompt: 'Ordena las cuatro fases del doble diamante del British Design Council, de principio a fin.'
      items:
          - 'Descubrir (investigación abierta del problema)'
          - 'Definir (síntesis: se acota un problema concreto a resolver)'
          - 'Desarrollar (se generan y exploran muchas posibles soluciones)'
          - 'Entregar (se selecciona, refina y lanza una solución)'
      explanation: 'Cada diamante alterna divergencia y convergencia: primero se abre el problema y se cierra en una definición clara; después se abren las soluciones posibles y se cierra en una solución concreta y validada.'
    - id: doble-diamante-free-1
      type: free-text
      prompt: '¿Cómo se llama el tipo de pensamiento que consiste en generar el mayor número posible de ideas u opciones, sin filtrarlas todavía, típico de las fases "Descubrir" y "Desarrollar"?'
      acceptedAnswers:
          - 'pensamiento divergente'
          - 'divergente'
          - 'divergencia'
      explanation: 'El pensamiento divergente amplía el abanico de posibilidades; el pensamiento convergente, su opuesto, lo reduce hasta quedarse con la mejor opción. Un buen proceso de diseño alterna deliberadamente entre ambos.'
    - id: doble-diamante-mc-2
      type: multiple-choice
      prompt: 'Un equipo tiene una solución en mente desde el primer día y salta directamente a construirla, sin pasar por "Descubrir" ni "Definir". ¿Qué riesgo principal corre?'
      allowMultiple: false
      options:
          - text: 'Ninguno: empezar a construir rápido siempre ahorra tiempo.'
            correct: false
            explanation: 'Construir rápido una solución equivocada suele costar más tiempo que invertir unos días en entender bien el problema primero.'
          - text: 'Resolver muy bien un problema que quizás no sea el problema real de los usuarios.'
            correct: true
            explanation: 'Correcto. Sin la fase de descubrimiento, el equipo asume qué problema hay que resolver en lugar de confirmarlo con evidencia, y corre el riesgo de construir una solución técnicamente excelente para un problema que no existe (o no es el prioritario).'
          - text: 'Que el diseño visual final sea peor.'
            correct: false
            explanation: 'El riesgo no es principalmente estético, sino estratégico: resolver el problema equivocado.'
---

## Un proceso, no una lista de tareas

"Design thinking" es el nombre que se le da a un enfoque para resolver problemas centrado en las personas, que combina empatía con el usuario, generación amplia de ideas y validación rápida mediante prototipos. No es una receta rígida de pasos numerados, sino una forma de pensar que se puede aplicar a un rediseño completo de producto o a un simple ajuste de un formulario. Lo que distingue a un proceso de diseño maduro de una improvisación no es la cantidad de post-its de colores, sino la disciplina de **no comprometerse con una solución antes de haber entendido bien el problema**.

## El doble diamante: divergir y converger, dos veces

El modelo más citado para visualizar este proceso es el **doble diamante**, publicado por el British Design Council en 2005. Representa el proceso de diseño como dos rombos consecutivos, cada uno alternando entre pensamiento **divergente** (ensanchar: explorar muchas posibilidades sin descartar nada) y pensamiento **convergente** (estrechar: filtrar y quedarse con lo mejor).

<div style="display:flex;gap:0.75rem;align-items:flex-start;margin:1.5rem 0;flex-wrap:wrap;">
    <div style="text-align:center;">
        <div style="width:90px;height:90px;background:#748ffc;clip-path:polygon(0% 50%,50% 0%,100% 50%,50% 100%);"></div>
        <p style="margin:0.4rem 0 0;font-size:0.8rem;font-weight:700;">1. Descubrir</p>
        <p style="margin:0;font-size:0.72rem;color:#495057;">Diverge: investigar el problema</p>
    </div>
    <div style="text-align:center;">
        <div style="width:90px;height:90px;background:#4263eb;clip-path:polygon(100% 50%,50% 0%,0% 50%,50% 100%);"></div>
        <p style="margin:0.4rem 0 0;font-size:0.8rem;font-weight:700;">2. Definir</p>
        <p style="margin:0;font-size:0.72rem;color:#495057;">Converge: acotar el problema</p>
    </div>
    <div style="text-align:center;">
        <div style="width:90px;height:90px;background:#748ffc;clip-path:polygon(0% 50%,50% 0%,100% 50%,50% 100%);"></div>
        <p style="margin:0.4rem 0 0;font-size:0.8rem;font-weight:700;">3. Desarrollar</p>
        <p style="margin:0;font-size:0.72rem;color:#495057;">Diverge: explorar soluciones</p>
    </div>
    <div style="text-align:center;">
        <div style="width:90px;height:90px;background:#4263eb;clip-path:polygon(100% 50%,50% 0%,0% 50%,50% 100%);"></div>
        <p style="margin:0.4rem 0 0;font-size:0.8rem;font-weight:700;">4. Entregar</p>
        <p style="margin:0;font-size:0.72rem;color:#495057;">Converge: validar y lanzar</p>
    </div>
</div>

El primer diamante resuelve la pregunta "¿cuál es el problema correcto?": se **descubre** mediante investigación abierta (entrevistas, datos, observación) y se **define** sintetizando esos hallazgos en un problema concreto y accionable (a menudo formulado como un "how might we..." o "¿cómo podríamos..."). El segundo diamante resuelve "¿cuál es la mejor solución?": se **desarrollan** muchas ideas y prototipos posibles, y se **entrega** la solución elegida tras validarla con usuarios reales.

## El error más caro: saltarse el primer diamante

El fallo más común y más costoso en equipos sin experiencia es saltarse por completo el primer diamante: alguien tiene una idea de solución el primer día ("necesitamos un chatbot") y el equipo se lanza directamente a construirla, sin haber confirmado que resuelve el problema real de los usuarios. El doble diamante existe precisamente para frenar ese impulso: obliga a demostrar, con evidencia, que el problema que se va a resolver es el correcto, antes de invertir tiempo y presupuesto en construir una solución. Corregir la dirección durante el primer diamante cuesta una conversación y un post-it; corregirla después de haber lanzado el producto cuesta meses de desarrollo.

## No es tan lineal como parece en el dibujo

Aunque se dibuje como dos diamantes limpios y consecutivos, en la práctica el proceso es iterativo: es habitual volver de "Desarrollar" a "Definir" al descubrir, durante un prototipo, que el problema estaba mal planteado, o repetir un ciclo completo del segundo diamante varias veces antes de dar con una solución que funcione. El valor del modelo no está en seguirlo al pie de la letra, sino en el hábito mental que inculca: separar conscientemente los momentos de "abrir posibilidades sin juzgar" de los momentos de "decidir y comprometerse", en lugar de mezclar ambos y acabar convergiendo demasiado pronto en la primera idea que se le ocurre a alguien del equipo.
