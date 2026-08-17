---
title: 'Diseñar flujos transversales: login, onboarding y checkout'
description: 'Tres flujos que aparecen en casi cualquier producto digital y que concentran gran parte del abandono: iniciar sesión, la primera experiencia de uso y el pago o confirmación final.'
category: projects
level: intermediate
order: 12
subcategory: comercio-y-conversion
exercises:
    - id: flujos-mc-1
      type: multiple-choice
      prompt: '¿Qué tienen en común el login, el onboarding y el checkout que hace que se consideren flujos especialmente críticos para el diseño?'
      allowMultiple: false
      options:
          - text: 'Los tres son puntos del recorrido del usuario con una tasa de abandono especialmente alta, donde cada paso o campo adicional reduce directamente cuánta gente completa la acción y llega a usar o pagar el producto.'
            correct: true
            explanation: 'Correcto. Login, onboarding y checkout comparten el patrón de ser "cuellos de botella": son pasos obligatorios antes del valor real del producto, y su fricción se traduce directamente en usuarios y ventas perdidos.'
          - text: 'Los tres flujos son opcionales y los usuarios pueden saltárselos sin ningún efecto en el producto.'
            correct: false
            explanation: 'Al contrario, suelen ser pasos obligatorios (o casi) para acceder al valor del producto, lo que hace que su fricción tenga un impacto directo y medible.'
          - text: 'Los tres flujos solo existen en aplicaciones móviles, nunca en web.'
            correct: false
            explanation: 'Estos flujos aparecen igual en productos web y móviles; no son exclusivos de ninguna plataforma.'
    - id: flujos-mc-2
      type: multiple-choice
      prompt: 'En un flujo de onboarding, ¿por qué se recomienda evitar mostrar todas las funciones del producto de golpe en una serie larga de pantallas explicativas?'
      allowMultiple: false
      options:
          - text: 'Porque la información se retiene mejor cuando se presenta en el momento en que el usuario la necesita (aprendizaje "justo a tiempo"), en lugar de toda de golpe antes de haber usado el producto ni una vez.'
            correct: true
            explanation: 'Correcto. Un onboarding largo y expositivo se olvida rápido porque no está conectado con una acción real; mostrar la ayuda en el momento en que es relevante mejora la retención del aprendizaje.'
          - text: 'Porque los usuarios nunca necesitan ayuda para entender un producto nuevo.'
            correct: false
            explanation: 'Muchos usuarios sí se benefician de orientación inicial; el problema no es dar ayuda, sino el momento y la cantidad en que se ofrece de golpe.'
          - text: 'Porque mostrar varias pantallas seguidas es técnicamente imposible de implementar.'
            correct: false
            explanation: 'No hay ninguna limitación técnica; es una recomendación basada en cómo retienen información las personas, no en una restricción de implementación.'
    - id: flujos-free-1
      type: free-text
      prompt: 'Cuando un usuario intenta iniciar sesión y falla, la mejor práctica es mostrar un mensaje de error que indique claramente qué ha ido mal, sin obligar a repetir manualmente los datos que ya escribió correctamente (por ejemplo, el email). Este principio de no borrar el trabajo ya hecho del usuario ante un error se resume como preservar el...'
      acceptedAnswers:
          - 'contexto'
          - 'estado'
          - 'progreso'
      explanation: 'Un buen manejo de errores en cualquiera de estos tres flujos mantiene lo que el usuario ya ha introducido correctamente, y señala con precisión solo el campo o paso que falló, en lugar de forzar a repetir todo el proceso desde cero.'
---

## Tres flujos obligatorios, tres oportunidades de perder usuarios

El login, el onboarding y el checkout comparten una característica: son pasos que el usuario debe atravesar antes de llegar al verdadero valor del producto (usarlo, o recibir lo que ha comprado). Precisamente por ser un "peaje" obligatorio, concentran una parte desproporcionada del abandono: cada campo, cada pantalla y cada mensaje de error mal diseñado en estos flujos tiene un coste directo en cuántos usuarios llegan al otro lado.

## Login: el primer contacto con la fricción

El inicio de sesión debe ser lo más rápido posible sin comprometer la seguridad. Ofrecer opciones como el acceso con Google o Apple reduce la fricción de tener que recordar una contraseña nueva. Cuando falla, el mensaje de error debe ser específico y accionable ("La contraseña no es correcta", no un genérico "Error"), y nunca debe borrar el email que el usuario ya introdujo correctamente, obligándole a escribirlo de nuevo.

## Onboarding: enseñar en el momento justo, no todo de golpe

El onboarding es la primera experiencia real de uso, y su objetivo es que el usuario llegue lo antes posible a experimentar el valor del producto ("aha moment"), no memorizar un tutorial completo. Es preferible una guía corta y centrada en la primera acción útil, con ayuda contextual que aparece más adelante, cuando el usuario llega a una función que realmente necesita explicación, en lugar de una serie larga de pantallas explicativas al principio que se olvidan enseguida.

## Checkout: minimizar la fricción justo antes de confirmar

El checkout es el paso final antes de que una acción (una compra, una suscripción, un envío de datos) se confirme, y es donde la ansiedad y la duda del usuario suelen ser más altas. Mostrar el progreso del proceso ("Paso 2 de 3"), evitar sorpresas de última hora (precio, plazos) y confirmar con claridad el resultado final son prácticas que reducen tanto el abandono como los errores del usuario.

## Un patrón común: preservar el contexto ante errores

En los tres flujos, un principio se repite: cuando algo falla, el sistema no debe hacer perder al usuario el trabajo que ya había hecho bien. Un login fallido no debería borrar el email ya escrito; un onboarding interrumpido debería poder retomarse donde se dejó; un checkout con un error de pago debería mantener los datos de envío ya introducidos. Este pequeño detalle de diseño reduce de forma notable la frustración y el abandono en los tres casos.

## Un ejemplo rápido

Al diseñar la validación de un formulario de checkout: los errores se muestran junto a cada campo concreto en el momento en que el usuario sale de él (no solo al final, todos juntos), y al enviar el formulario, si hay un error, la página hace scroll automáticamente hasta el primer campo con problema, en lugar de dejar al usuario buscarlo entre varios campos.

## Ejemplos de referencia

- [Airbnb](https://www.airbnb.com) — ejemplo de login con múltiples opciones (email, redes sociales) y checkout de reserva con progreso claro por pasos.
- [Duolingo](https://www.duolingo.com) — referencia en onboarding centrado en una primera acción de valor inmediata antes de pedir registro.
