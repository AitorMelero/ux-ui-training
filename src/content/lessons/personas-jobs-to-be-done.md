---
title: 'Personas, mapas de empatía y Jobs To Be Done'
description: 'Profundiza en las herramientas para sintetizar investigación en perfiles accionables: personas, mapas de empatía y el enfoque Jobs To Be Done.'
category: ux
level: intermediate
order: 4
exercises:
    - id: jtbd-mc-1
      type: multiple-choice
      prompt: 'Según el enfoque Jobs To Be Done (JTBD), ¿qué "contrata" realmente un usuario cuando usa un producto?'
      allowMultiple: false
      options:
          - text: 'El producto en sí, por sus características técnicas.'
            correct: false
            explanation: 'JTBD invita a mirar más allá de las características: el usuario no quiere el producto por sí mismo, sino por lo que le permite conseguir.'
          - text: 'El producto para que le ayude a progresar en una situación concreta de su vida (un "trabajo" que necesita completar).'
            correct: true
            explanation: 'Correcto. La frase clásica de JTBD es que la gente no quiere un taladro, quiere un agujero en la pared (y, en realidad, ni siquiera quiere el agujero: quiere colgar un cuadro).'
          - text: 'La marca, independientemente de si el producto resuelve o no su necesidad.'
            correct: false
            explanation: 'JTBD parte de la funcionalidad y el progreso que busca el usuario, no de la lealtad a una marca.'
    - id: jtbd-mc-2
      type: multiple-choice
      prompt: '¿Cuál es la diferencia principal entre una "persona" tradicional y un "job" en el enfoque Jobs To Be Done?'
      allowMultiple: false
      options:
          - text: 'La persona se centra en quién es el usuario (demografía, actitudes); el job se centra en qué progreso busca conseguir, independientemente de quién sea.'
            correct: true
            explanation: 'Correcto. Dos personas muy distintas (edad, profesión, cultura) pueden "contratar" el mismo producto para el mismo job, y una misma persona puede tener jobs distintos en momentos distintos.'
          - text: 'No hay ninguna diferencia real, son sinónimos.'
            correct: false
            explanation: 'Son herramientas complementarias pero distintas: una segmenta por quién es la persona, la otra por qué progreso busca.'
          - text: 'El job siempre incluye una foto de stock y un nombre ficticio; la persona no.'
            correct: false
            explanation: 'Es al revés: las personas suelen incluir esos elementos narrativos; los jobs se formulan como una situación y un objetivo, sin narrativa de personaje.'
    - id: jtbd-free-1
      type: free-text
      prompt: '¿Cómo se llama la herramienta de síntesis que organiza lo que un usuario piensa, siente, dice, hace, ve y oye, para entender su contexto y sus frustraciones más allá de los datos demográficos?'
      acceptedAnswers:
          - 'mapa de empatia'
          - 'mapa de empatía'
          - 'empathy map'
      explanation: 'El mapa de empatía es una plantilla visual de síntesis que ayuda al equipo a ponerse en el lugar del usuario, separando lo observable (dice, hace) de lo inferido (piensa, siente).'
---

## Ir más allá de la ficha de personaje

La lección anterior sobre investigación de usuarios introdujo las personas como perfiles basados en evidencia. Esta lección profundiza en cómo llegar de la investigación en bruto a un perfil realmente útil, y presenta una herramienta complementaria —Jobs To Be Done— que corrige una de las debilidades más habituales de las personas tradicionales: centrarse demasiado en quién es el usuario y demasiado poco en qué está intentando conseguir.

## El mapa de empatía: sintetizar antes de nombrar

Antes de escribir la ficha final de una persona, es habitual pasar la investigación por un **mapa de empatía**, una plantilla dividida en varios cuadrantes que organiza lo que se ha observado sobre un segmento de usuarios:

- **Dice y hace**: citas textuales y comportamientos observados directamente durante entrevistas o pruebas (lo verificable).
- **Piensa y siente**: lo que probablemente piensa y siente, inferido a partir de lo anterior (preocupaciones, aspiraciones, ansiedades).
- **Ve**: qué observa en su entorno, qué hacen sus compañeros o competidores, a qué mensajes está expuesto.
- **Oye**: qué le dicen otras personas relevantes (jefes, compañeros, familia, influencers del sector).

Separar "dice y hace" (observable) de "piensa y siente" (inferido) es la parte más valiosa del ejercicio: obliga al equipo a distinguir explícitamente entre evidencia directa y suposición razonada, en lugar de mezclarlas como si tuvieran el mismo peso.

## Jobs To Be Done: contratar un producto para un progreso

El enfoque **Jobs To Be Done** (JTBD), popularizado por Clayton Christensen, parte de una idea sencilla pero poderosa: las personas no compran productos por sus características, los "contratan" para conseguir un progreso concreto en una situación específica de su vida. La frase que mejor resume el enfoque es: "la gente no quiere un taladro de un cuarto de pulgada; quiere un agujero de un cuarto de pulgada en la pared. Y en realidad ni siquiera quiere el agujero: quiere colgar una estantería para que su salón se vea ordenado."

Un job bien formulado sigue una estructura parecida a: _"Cuando [situación], quiero [motivación], para poder [resultado esperado]"_. Por ejemplo: "Cuando tengo que presentar un informe a última hora, quiero encontrar rápidamente los datos correctos, para poder entregarlo a tiempo sin quedar mal delante de mi jefe." Nótese que esta frase no menciona ninguna característica de producto: describe una situación y un progreso deseado, y ese job podría "contratar" soluciones muy distintas entre sí (una hoja de cálculo, un asistente, pedirle el dato a un compañero).

## Personas y jobs: herramientas complementarias, no rivales

Personas y JTBD no compiten, resuelven preguntas distintas. La **persona** ayuda a construir empatía con quién es el usuario: su contexto, actitudes, nivel de experiencia con la tecnología, restricciones (por ejemplo, "usa solo el móvil y tiene conexión inestable"). El **job** ayuda a entender qué progreso concreto busca en un momento dado, independientemente de quién sea. La combinación de ambos evita dos errores simétricos: diseñar solo para una demografía sin entender qué problema real resuelve el producto (típico de personas mal construidas), o diseñar solo para una tarea abstracta sin tener en cuenta las restricciones reales del contexto del usuario (típico de un JTBD usado en aislamiento). Los equipos más maduros usan las personas para tener empatía con quién diseñan, y los jobs para tener claridad sobre qué problema están resolviendo exactamente en cada función del producto.
