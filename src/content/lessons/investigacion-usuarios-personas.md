---
title: 'Investigación de usuarios y personas'
description: 'Aprende a distinguir entre investigación cualitativa y cuantitativa, y cómo construir personas útiles a partir de datos reales.'
category: ux
order: 2
exercises:
    - id: investigacion-mc-1
      type: multiple-choice
      prompt: 'Un equipo quiere entender POR QUÉ los usuarios abandonan el proceso de registro, no solo cuántos lo abandonan. ¿Qué tipo de investigación es más adecuada?'
      allowMultiple: false
      options:
          - text: 'Investigación cuantitativa (analítica web, encuestas con escalas numéricas).'
            correct: false
            explanation: 'La analítica te dirá cuántas personas abandonan y en qué paso, pero no te explica sus motivos.'
          - text: 'Investigación cualitativa (entrevistas, tests de usabilidad).'
            correct: true
            explanation: 'Correcto. Las técnicas cualitativas, como entrevistar a un puñado de usuarios o observarlos completar la tarea, revelan el «por qué» detrás de los números.'
          - text: 'Ninguna: basta con preguntarle al equipo de diseño.'
            correct: false
            explanation: 'Las opiniones internas del equipo son útiles como hipótesis de partida, pero no sustituyen la evidencia recogida directamente de usuarios reales.'
    - id: investigacion-mc-2
      type: multiple-choice
      prompt: "¿Qué afirmación sobre las 'personas' (perfiles de usuario) es correcta?"
      allowMultiple: false
      options:
          - text: 'Una persona bien construida se basa en patrones observados en investigación real, no en suposiciones del equipo.'
            correct: true
            explanation: 'Exacto. Una persona sin datos detrás es solo una opinión disfrazada de perfil, y puede llevar a decisiones equivocadas.'
          - text: 'Cuantos más datos demográficos inventados tenga una persona (edad exacta, nombre, foto de stock), más útil es.'
            correct: false
            explanation: 'Los detalles decorativos no aportan valor si no reflejan patrones reales de comportamiento, objetivos y frustraciones.'
          - text: 'Las personas deben crearse una sola vez y no revisarse nunca más.'
            correct: false
            explanation: 'Los usuarios y el contexto cambian; las personas deben revisarse periódicamente con investigación nueva.'
    - id: investigacion-free-1
      type: free-text
      prompt: '¿Cómo se llama la técnica de investigación en la que se pide a una persona usuaria que complete tareas reales en un producto mientras el equipo observa dónde se atasca?'
      acceptedAnswers:
          - 'test de usabilidad'
          - 'usability testing'
          - 'prueba de usabilidad'
          - 'pruebas de usabilidad'
      explanation: 'Un test de usabilidad consiste en observar a personas reales intentando completar tareas concretas, para detectar puntos de fricción antes de lanzar el producto.'
    - id: investigacion-order-1
      type: ordering
      prompt: 'Ordena estos pasos de un proceso típico de investigación de usuarios, del primero al último.'
      items:
          - 'Definir las preguntas que se quieren responder'
          - 'Reclutar a participantes representativos'
          - 'Realizar entrevistas u observaciones'
          - 'Analizar los datos y buscar patrones'
          - 'Compartir hallazgos con el equipo'
      explanation: 'Empezar sin preguntas claras suele producir entrevistas dispersas; y compartir los hallazgos es el paso que convierte la investigación en decisiones reales de diseño.'
---

## Diseñar para alguien, no para todo el mundo

Diseñar sin investigación es diseñar a ciegas: el equipo termina proyectando sus propias costumbres y gustos sobre personas que piensan y se comportan de forma distinta. La investigación de usuarios es el conjunto de métodos que usamos para entender a las personas reales que van a usar un producto: qué necesitan, qué objetivos persiguen, qué les frustra y en qué contexto lo usan. No es un lujo reservado a equipos grandes; incluso cinco entrevistas bien hechas revelan patrones de comportamiento que ninguna suposición interna puede igualar.

## Cualitativo vs. cuantitativo

Conviene distinguir dos grandes familias de investigación. La investigación **cuantitativa** responde a preguntas de "cuánto" o "cuántos": analítica web, encuestas con escalas numéricas, tests A/B. Es útil para detectar problemas a gran escala, como un paso del checkout donde el 40% de los usuarios abandona. La investigación **cualitativa** responde a preguntas de "por qué" y "cómo": entrevistas, tests de usabilidad, observación en contexto. Es la que explica el motivo detrás de ese abandono, por ejemplo porque el formulario pide datos que la persona no tiene a mano en ese momento. Los equipos maduros combinan ambas: la cuantitativa detecta dónde está el problema, la cualitativa explica por qué ocurre.

## Personas: perfiles basados en evidencia

Una vez recogida la investigación, es habitual sintetizarla en "personas": arquetipos que representan segmentos reales de usuarios, con sus objetivos, motivaciones y frustraciones. Una persona útil no es una ficha con nombre inventado y foto de stock; es un resumen de patrones de comportamiento observados en entrevistas y datos reales, que ayuda al equipo a tomar decisiones ("¿esto le serviría a Marta, que solo usa el móvil y tiene poca paciencia con formularios largos?"). Cuando las personas se inventan sin evidencia, corren el riesgo de reforzar prejuicios del equipo en lugar de corregirlos, así que conviene revisarlas y actualizarlas a medida que se acumula investigación nueva.
