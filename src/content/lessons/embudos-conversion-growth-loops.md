---
title: 'Embudos de conversión y growth loops'
description: 'Cómo visualizar el recorrido de un usuario como una secuencia de pasos con pérdidas, y por qué el crecimiento sostenible se diseña como un bucle, no como un embudo lineal.'
category: business
level: intermediate
order: 9
subcategory: monetizacion-crecimiento
exercises:
    - id: embudos-mc-1
      type: multiple-choice
      prompt: 'En un embudo de conversión de tres pasos (ver producto → añadir al carrito → pagar), con 1.000 personas que ven el producto, 300 que lo añaden al carrito y 90 que pagan, ¿en qué paso hay más margen de mejora relativo?'
      allowMultiple: false
      options:
          - text: 'Del carrito al pago (300 → 90, una caída del 70%), que es proporcionalmente mayor que la caída de ver el producto a añadirlo al carrito (1.000 → 300, un 70% también, pero conviene comparar en términos absolutos de usuarios perdidos en cada paso y el coste de arreglarlo).'
            correct: true
            explanation: 'Aunque ambos pasos pierden el mismo porcentaje relativo (70%), el paso de carrito a pago suele ser más barato de mejorar (formularios, medios de pago, confianza en el checkout) y esos usuarios ya mostraron intención de compra real, por lo que suele ser el punto prioritario a investigar primero.'
          - text: 'No se puede saber sin más datos; los números del embudo por sí solos no indican dónde investigar primero.'
            correct: false
            explanation: 'Aunque más datos siempre ayudan, un embudo con caídas tan pronunciadas ya da una pista clara de por dónde empezar a investigar, especialmente en el paso más cercano a la conversión final.'
          - text: 'En el primer paso, porque es el que tiene más usuarios en números absolutos.'
            correct: false
            explanation: 'Tener más usuarios en números absolutos no indica automáticamente dónde está el problema; hay que fijarse en las tasas de caída entre pasos, no solo en el volumen de cada paso por separado.'
    - id: embudos-mc-2
      type: multiple-choice
      prompt: '¿Qué distingue a un "growth loop" (bucle de crecimiento) de un embudo de conversión tradicional?'
      allowMultiple: false
      options:
          - text: 'El resultado de un growth loop retroalimenta el propio inicio del ciclo, generando nuevos usuarios de forma continua, mientras que un embudo termina en la conversión sin generar más entradas por sí mismo.'
            correct: true
            explanation: 'Correcto. Un embudo es lineal: entra gente, sale gente convertida, fin. Un loop está diseñado para que la salida (por ejemplo, un usuario satisfecho que invita a otros) alimente de nuevo la entrada, creando crecimiento compuesto sin depender solo de marketing pagado.'
          - text: 'Un growth loop no tiene ninguna pérdida de usuarios en ningún paso.'
            correct: false
            explanation: 'Los growth loops también tienen pérdidas en cada paso, igual que un embudo; lo que los distingue no es la ausencia de pérdidas, sino que el resultado final retroalimenta el inicio del ciclo.'
          - text: 'Los growth loops solo se aplican a productos gratuitos, nunca a productos de pago.'
            correct: false
            explanation: 'Los growth loops aparecen en todo tipo de modelos de negocio, incluidos productos de pago (por ejemplo, programas de referidos en un SaaS de suscripción).'
    - id: embudos-free-1
      type: free-text
      prompt: 'El mecanismo de crecimiento en el que un usuario existente invita a otros y ambos reciben algún beneficio a cambio (por ejemplo, descuento o saldo) se conoce habitualmente como programa de...'
      acceptedAnswers:
          - 'referidos'
          - 'referencias'
          - 'referral'
      explanation: 'Un programa de referidos es uno de los growth loops más comunes: convierte a un usuario satisfecho en un canal de adquisición de nuevos usuarios, cerrando el ciclo entre "resultado" y "nueva entrada".'
---

## Ver el producto como una secuencia de pasos con pérdidas

Un embudo (funnel) de conversión representa el recorrido que sigue un usuario desde un punto de entrada hasta un objetivo de negocio, dividido en pasos, mostrando cuánta gente se pierde en cada uno. Es una de las herramientas más útiles para un diseñador porque convierte un problema abstracto ("la conversión es baja") en una pregunta muy concreta ("¿en qué paso exacto se pierde la mayoría de la gente, y por qué?"). Diseñar mirando el embudo completo, no solo una pantalla aislada, evita el error de optimizar un paso que en realidad no es el cuello de botella real.

## Cómo leer un embudo con criterio

Al analizar un embudo no basta con mirar qué paso tiene la caída porcentual más grande; también importa cuánta gente se pierde en números absolutos, y cuánto cuesta (en esfuerzo de diseño y desarrollo) mejorar cada paso. Un paso con una caída moderada pero con muchísimo volumen puede merecer más atención que un paso con una caída enorme pero muy pocos usuarios pasando por él. La priorización de mejoras en un embudo se beneficia directamente de los marcos de priorización vistos en la lección de RICE/ICE/MoSCoW.

## Los embudos lineales tienen un límite

Un embudo, por definición, es lineal: la gente entra por arriba (normalmente vía marketing pagado o esfuerzo comercial) y sale convertida por abajo, sin generar más entradas por sí solo. Esto significa que crecer únicamente optimizando un embudo obliga a depender de traer más gente por arriba constantemente, lo cual tiene un coste de adquisición creciente con el tiempo.

## Growth loops: el crecimiento que se retroalimenta

Un growth loop diseña el sistema de forma que la salida de un ciclo alimente la entrada del siguiente, sin depender solo de más inversión en marketing. Ejemplos habituales: un usuario satisfecho invita a otros (referidos) que a su vez se convierten en usuarios y, eventualmente, invitan a más; contenido generado por un usuario (una reseña, un vídeo, un documento compartido) atrae a nuevos usuarios que descubren el producto a través de ese contenido. El trabajo de diseño aquí consiste en hacer que ese paso de "compartir" o "invitar" sea natural y esté integrado en el momento en que el usuario ya está satisfecho, no forzado ni desconectado de la experiencia.

## Diseñar el loop sin ser invasivo

El riesgo de diseñar un growth loop es caer en pedir la acción de compartir/invitar de forma insistente o en un mal momento (antes de que el usuario haya obtenido valor real), lo que se percibe como spam y daña la confianza en lugar de generarla. La regla práctica es situar la invitación a compartir justo después de un momento de éxito genuino del usuario —cuando acaba de conseguir algo que vale la pena contar—, no como una interrupción aleatoria del flujo principal.
