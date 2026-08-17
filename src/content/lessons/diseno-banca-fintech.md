---
title: 'Diseñar banca y fintech'
description: 'Los retos específicos de diseñar productos financieros: la confianza como requisito de diseño, la claridad en datos sensibles y por qué los estados de error importan más que en casi ningún otro dominio.'
category: projects
level: advanced
order: 10
subcategory: comercio-y-conversion
exercises:
    - id: fintech-mc-1
      type: multiple-choice
      prompt: 'En una aplicación bancaria, ¿por qué se considera un error grave de diseño dejar ambiguo si una transferencia de dinero se ha completado o no?'
      allowMultiple: false
      options:
          - text: 'Porque el dinero es uno de los datos más sensibles para un usuario, y la incertidumbre sobre si una acción irreversible se ha ejecutado genera ansiedad y puede llevar a que la persona repita la acción por error, agravando el problema.'
            correct: true
            explanation: 'Correcto. En banca, la confirmación clara del estado de una acción (completada, pendiente, fallida) no es un detalle estético: evita ansiedad y errores costosos como duplicar una transferencia.'
          - text: 'Porque las aplicaciones bancarias no permiten realizar transferencias de dinero.'
            correct: false
            explanation: 'Las transferencias son una de las funciones centrales de una aplicación bancaria; el reto de diseño está precisamente en comunicar bien su estado.'
          - text: 'Porque el estado de una transferencia solo le importa al banco, no al usuario.'
            correct: false
            explanation: 'Al usuario le importa saber con certeza si su dinero ha salido o no de su cuenta, especialmente al tratarse de una acción difícil de deshacer.'
    - id: fintech-mc-2
      type: multiple-choice
      prompt: '¿Por qué las aplicaciones bancarias suelen añadir pasos de fricción deliberada (confirmaciones, doble verificación) en acciones como añadir un nuevo destinatario de transferencia?'
      allowMultiple: false
      options:
          - text: 'Porque esas acciones tienen un riesgo alto (fraude, error irreversible), y una fricción deliberada y bien diseñada actúa como una pausa de seguridad que reduce ese riesgo, a cambio de un pequeño coste en velocidad.'
            correct: true
            explanation: 'Correcto. A diferencia de acciones de bajo riesgo (donde la fricción debe eliminarse), en banca ciertas acciones se benefician de fricción deliberada porque el coste de un error es alto y difícil de revertir.'
          - text: 'Porque los bancos quieren que la aplicación se sienta más lenta que la de la competencia.'
            correct: false
            explanation: 'El objetivo no es percibirse como lenta, sino reducir el riesgo de fraude o error en acciones sensibles, de forma proporcionada al riesgo real.'
          - text: 'Porque es un requisito estético sin relación con la seguridad.'
            correct: false
            explanation: 'La fricción en estas acciones está directamente relacionada con la seguridad y la prevención de fraude, no con la estética.'
    - id: fintech-free-1
      type: free-text
      prompt: 'El conjunto de leyes y estándares (protección de datos, prevención de fraude, accesibilidad) que un producto financiero debe cumplir por obligación legal se conoce como requisitos de...'
      acceptedAnswers:
          - 'cumplimiento normativo'
          - 'compliance'
      explanation: 'A diferencia de la mayoría de productos digitales, en banca y fintech el cumplimiento normativo (compliance) no es opcional: condiciona decisiones de diseño como qué datos se pueden mostrar, cómo se verifica la identidad o qué avisos legales deben ser visibles.'
---

## Un dominio donde la confianza se diseña, no se declara

Diseñar un producto de banca o fintech tiene una particularidad: el usuario no está comprando un objeto, está confiando su dinero a una interfaz. Cualquier señal de descuido —una etiqueta poco clara, un estado ambiguo, una animación que tarda demasiado sin feedback— se interpreta como una señal de que el sistema también podría ser descuidado con el dinero, lo cual mina la confianza de forma desproporcionada respecto al error real cometido.

## Claridad en datos financieros densos

Un extracto bancario o un histórico de movimientos combina cifras, fechas, categorías y estados en poco espacio. La jerarquía visual debe dejar clarísimo qué es un ingreso y qué es un gasto (por ejemplo, con color y signo, no solo con color), y las cifras deben usar siempre el mismo formato de moneda y número de decimales en toda la aplicación para no generar dudas sobre si dos pantallas muestran el mismo dato.

## Estados de error y confirmación como prioridad de diseño

En la mayoría de productos, un mensaje de error mal diseñado es una molestia. En banca, puede significar que un usuario no sepa si ha perdido dinero. Cada acción irreversible (transferir, pagar, invertir) necesita tres estados diseñados con el mismo cuidado: **en proceso**, **completado con éxito** y **fallido**, cada uno con un mensaje que explique qué ha pasado y qué hacer a continuación.

## Fricción deliberada donde el riesgo es alto

A diferencia de un e-commerce, donde toda fricción se busca eliminar, en fintech ciertas fricciones son deseables: verificación en dos pasos para operaciones grandes, una pantalla de confirmación antes de añadir un nuevo destinatario de transferencia, o un tiempo de espera visible antes de que un cambio sensible (como cambiar el número de teléfono asociado a la cuenta) se haga efectivo.

## Cumplimiento normativo y accesibilidad como restricciones de diseño

Los productos financieros operan bajo regulación estricta (protección de datos, prevención de blanqueo de capitales, accesibilidad). Esto significa que ciertos textos legales, avisos o pasos de verificación de identidad no son negociables desde diseño, aunque añadan pasos al flujo; el reto de diseño está en integrarlos de la forma menos disruptiva posible, no en eliminarlos.

## Un ejemplo rápido

Al diseñar la pantalla de confirmación de una transferencia: se muestra el importe, el destinatario y la fecha en un resumen claro antes de confirmar (para dar una última oportunidad de revisar), y tras confirmar se muestra de inmediato un estado explícito ("Transferencia enviada" con hora exacta), en lugar de simplemente volver a la pantalla anterior, que dejaría al usuario sin certeza de si la acción se completó.

## Ejemplos de banca y fintech como referencia

- [Revolut](https://www.revolut.com) — ejemplo de app fintech con estados de transacción muy explícitos y verificación en pasos claros.
- [N26](https://n26.com) — referencia en claridad visual de movimientos y categorización de gastos.
