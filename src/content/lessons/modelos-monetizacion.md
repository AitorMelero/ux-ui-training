---
title: 'Modelos de monetización: freemium, suscripción y paywalls'
description: 'Cómo diseñar el momento y la forma en que se le pide dinero al usuario sin romper la confianza que se ha construido hasta ese punto.'
category: business
level: intermediate
order: 8
subcategory: monetizacion-crecimiento
exercises:
    - id: monetizacion-mc-1
      type: multiple-choice
      prompt: 'En un modelo freemium, ¿cuál es el riesgo principal de diseño si la versión gratuita se limita demasiado?'
      allowMultiple: false
      options:
          - text: 'El usuario no llega a experimentar suficiente valor real del producto como para entender qué está comprando si decide pagar, y abandona antes de convertirse en cliente.'
            correct: true
            explanation: 'Correcto. Si la capa gratuita es tan limitada que se siente rota o inútil, el usuario nunca desarrolla la confianza y el entendimiento del valor del producto que hacen falta para dar el salto a pagar.'
          - text: 'La empresa pierde dinero por cada usuario gratuito, así que cualquier limitación es positiva.'
            correct: false
            explanation: 'Aunque los usuarios gratuitos no pagan directamente, generan otro tipo de valor (datos, boca a boca, futuros clientes de pago); limitarlos en exceso puede ser contraproducente incluso desde una lógica puramente de negocio.'
          - text: 'No hay ningún riesgo; cuanto más limitada, mejor, porque empuja más rápido a pagar.'
            correct: false
            explanation: 'Empujar demasiado rápido a pagar sin haber demostrado valor suficiente suele producir el efecto contrario: el usuario se va antes de convertirse en cliente, en lugar de convertirse.'
    - id: monetizacion-mc-2
      type: multiple-choice
      prompt: '¿Qué diferencia hay entre un "hard paywall" (muro de pago total) y un "soft paywall" (muro de pago parcial)?'
      allowMultiple: false
      options:
          - text: 'El hard paywall bloquea el acceso por completo hasta que se paga; el soft paywall permite acceso parcial o limitado (por ejemplo, un número de artículos gratis al mes) antes de pedir el pago.'
            correct: true
            explanation: 'Correcto. La elección entre ambos depende del modelo de negocio: un hard paywall es habitual cuando el contenido en sí es el producto (una suscripción de noticias premium), mientras que un soft paywall es más común cuando el objetivo es demostrar valor antes de pedir el compromiso de pago.'
          - text: 'El hard paywall es solo para aplicaciones móviles y el soft paywall solo para web.'
            correct: false
            explanation: 'La distinción no tiene que ver con la plataforma (móvil o web), sino con cuánto acceso gratuito se ofrece antes de exigir el pago.'
          - text: 'No hay ninguna diferencia real entre ambos términos.'
            correct: false
            explanation: 'Sí hay una diferencia clara y relevante para el diseño: cuánto valor puede experimentar el usuario antes de que se le pida pagar, lo que cambia completamente cómo se diseña el recorrido hacia la conversión.'
    - id: monetizacion-free-1
      type: free-text
      prompt: 'El nombre habitual que recibe la pantalla o momento concreto donde se le pide al usuario que pague para desbloquear algo se conoce comúnmente, en inglés, como...'
      acceptedAnswers:
          - 'paywall'
          - 'muro de pago'
      explanation: 'Un paywall es el punto de fricción deliberado donde se pide el pago; diseñarlo bien significa que aparezca en el momento en que el usuario ya entiende el valor de lo que está a punto de desbloquear, no antes.'
---

## El dinero también se diseña

El momento y la forma en que un producto le pide dinero a un usuario es, en sí mismo, una decisión de diseño con tanto peso como cualquier flujo de la app: mal calibrada, puede espantar a usuarios que habrían pagado con algo más de paciencia, o generar sensación de engaño si se percibe como una trampa. Bien calibrada, se siente como una consecuencia natural del valor ya experimentado.

## Freemium: demostrar antes de pedir

En un modelo freemium, la capa gratuita tiene un propósito claro: dejar que el usuario experimente suficiente valor real como para entender qué compraría si pagara. El error de diseño más habitual es limitar tanto la versión gratuita que se siente inútil o rota, en lugar de simplemente "más básica". Una buena capa gratuita resuelve el problema principal del usuario de forma completa, aunque con menos alcance, personalización o volumen que la versión de pago —el mismo criterio, de hecho, que un buen MVP.

## Suscripción: valor recurrente, no solo inicial

Cuando el modelo es de suscripción, el diseño no puede limitarse a convencer al usuario de pagar la primera vez: tiene que seguir demostrando valor mes tras mes para justificar que siga pagando. Esto suele traducirse en mostrar de forma visible (sin ser invasivo) el valor generado en el periodo —contenido nuevo disponible, tiempo ahorrado, resultados conseguidos—, de forma que cancelar se sienta como perder algo activo, no como dejar de pagar por algo que ya ni se recordaba que existía.

## Paywalls: dónde y cuándo aparece el muro

Un paywall (el punto donde se exige el pago para continuar) puede ser total (hard paywall: nada de acceso sin pagar) o parcial (soft paywall: cierto acceso gratuito, con límites). La decisión de diseño clave es el **momento**: pedir el pago demasiado pronto, antes de que el usuario entienda el valor, genera rechazo; pedirlo demasiado tarde, cuando el usuario ya ha construido un hábito sin pagar, hace muy difícil introducirlo después. Suele funcionar mejor mostrar el paywall justo después de un momento de valor claro (por ejemplo, tras completar con éxito la primera tarea importante), no en la primera pantalla que ve el usuario.

## Claridad, siempre

Sea cual sea el modelo, hay un principio que no debería negociarse nunca: el usuario debe entender con claridad qué está pagando, cuánto y con qué frecuencia, antes de confirmar. Ocultar el precio real, esconder el ciclo de facturación en letra pequeña o hacer el botón de "cancelar" mucho más difícil de encontrar que el de "suscribirse" no son decisiones de monetización agresivas pero legítimas: son patrones oscuros, y se tratan con más detalle en la siguiente lección de esta categoría.
