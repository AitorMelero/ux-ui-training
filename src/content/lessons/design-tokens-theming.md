---
title: 'Design tokens y theming'
description: 'Separa las decisiones de diseño de sus valores concretos con design tokens, la base técnica que hace posible el modo oscuro y el theming multi-marca.'
category: ui
level: advanced
order: 10
exercises:
    - id: tokens-mc-1
      type: multiple-choice
      prompt: '¿Qué es un "design token"?'
      allowMultiple: false
      options:
          - text: 'Un valor de diseño (un color, un espaciado, un tamaño de fuente) al que se le da un nombre semántico, de forma que el código referencia el nombre en lugar del valor concreto.'
            correct: true
            explanation: 'Correcto. Por ejemplo, en vez de escribir `color: #364FC7` directamente en cien sitios del código, se define un token `color-primario` con ese valor, y el código referencia `color-primario`; cambiar el valor del token actualiza los cien sitios a la vez.'
          - text: 'Una criptomoneda usada para pagar licencias de herramientas de diseño.'
            correct: false
            explanation: 'No tiene relación con criptomonedas; en el contexto de sistemas de diseño, "token" se refiere a una unidad de valor de diseño con nombre.'
          - text: 'El nombre de un componente de UI, como "Botón" o "Tarjeta".'
            correct: false
            explanation: 'Un componente es una pieza de interfaz completa; un token es un valor de diseño individual (un color, un tamaño) que ese componente puede usar internamente.'
    - id: tokens-mc-2
      type: multiple-choice
      prompt: 'Un token se llama `azul-500` y apunta directamente al valor `#364FC7`. Otro token se llama `color-boton-primario` y apunta a `azul-500`. ¿Qué ventaja tiene esta segunda capa de indirección?'
      allowMultiple: false
      options:
          - text: 'Permite cambiar qué color de marca se usa para los botones primarios (por ejemplo, en modo oscuro o en una marca distinta) sin tocar el token de paleta base ni renombrar nada en el código de los componentes.'
            correct: true
            explanation: 'Correcto. Este patrón, habitual en sistemas de tokens maduros, separa los tokens de "paleta" (valores en bruto) de los tokens "semánticos" (con significado de uso), lo que permite retemarizar sin reescribir componentes.'
          - text: 'Ninguna ventaja real: añade complejidad innecesaria sin ningún beneficio práctico.'
            correct: false
            explanation: 'Esta capa de indirección es precisamente la que permite implementar modo oscuro o multi-marca sin duplicar ni reescribir el código de cada componente.'
          - text: 'Hace que el archivo de tokens ocupe menos espacio en disco.'
            correct: false
            explanation: 'El tamaño en disco no es la motivación de este patrón; la motivación es la flexibilidad de retemarización sin tocar el código de los componentes.'
    - id: tokens-free-1
      type: free-text
      prompt: '¿Cómo se llama, en CSS, la característica que permite definir una variable reutilizable (por ejemplo `--color-primario`) y consultarla en cualquier propiedad con `var(--color-primario)`, siendo una de las formas más comunes de implementar design tokens en la web?'
      acceptedAnswers:
          - 'variables css'
          - 'variables de css'
          - 'custom properties'
          - 'propiedades personalizadas'
          - 'css custom properties'
      explanation: 'Las CSS Custom Properties (variables CSS) permiten definir un valor una sola vez y reutilizarlo en toda la hoja de estilos, y son la implementación técnica más habitual de design tokens directamente en el navegador, sin necesidad de un paso de compilación.'
---

## El problema que resuelven los tokens

Imagina un color de marca usado directamente, como valor literal, en doscientos sitios distintos del código de un producto. El día que el equipo de marca decide ajustar ligeramente ese color, alguien tiene que encontrar y cambiar esos doscientos sitios uno por uno, con el riesgo real de olvidar alguno y dejar una inconsistencia visual difícil de detectar. Los **design tokens** resuelven exactamente este problema: son los valores de diseño más básicos de un sistema (colores, espaciados, tamaños de fuente, radios de borde, sombras) a los que se les da un nombre semántico, de forma que tanto el diseño como el código referencian ese nombre en lugar del valor concreto. Cambiar el valor del token una sola vez propaga el cambio a los doscientos sitios automáticamente.

## De un valor en bruto a un nombre con significado

Un sistema de tokens maduro no se limita a nombrar colores; suele organizarse en dos capas con propósitos distintos:

<div style="margin:1.25rem 0;overflow-x:auto;">
    <table style="border-collapse:collapse;width:100%;font-size:0.85rem;">
        <thead>
            <tr style="text-align:left;border-bottom:2px solid #d8dbe3;">
                <th style="padding:0.5rem 0.75rem;">Token de paleta (valor en bruto)</th>
                <th style="padding:0.5rem 0.75rem;"></th>
                <th style="padding:0.5rem 0.75rem;">Token semántico (con significado de uso)</th>
            </tr>
        </thead>
        <tbody>
            <tr style="border-bottom:1px solid #e9ecef;">
                <td style="padding:0.5rem 0.75rem;"><code>azul-500</code> → <span style="display:inline-block;width:14px;height:14px;background:#364fc7;border-radius:0.2rem;vertical-align:middle;"></span> #364FC7</td>
                <td style="padding:0.5rem 0.75rem;color:#adb5bd;">→</td>
                <td style="padding:0.5rem 0.75rem;"><code>color-boton-primario</code></td>
            </tr>
            <tr style="border-bottom:1px solid #e9ecef;">
                <td style="padding:0.5rem 0.75rem;"><code>rojo-600</code> → <span style="display:inline-block;width:14px;height:14px;background:#e03131;border-radius:0.2rem;vertical-align:middle;"></span> #E03131</td>
                <td style="padding:0.5rem 0.75rem;color:#adb5bd;">→</td>
                <td style="padding:0.5rem 0.75rem;"><code>color-texto-error</code></td>
            </tr>
            <tr>
                <td style="padding:0.5rem 0.75rem;"><code>gris-100</code> → <span style="display:inline-block;width:14px;height:14px;background:#f8f9fa;border:1px solid #d8dbe3;border-radius:0.2rem;vertical-align:middle;"></span> #F8F9FA</td>
                <td style="padding:0.5rem 0.75rem;color:#adb5bd;">→</td>
                <td style="padding:0.5rem 0.75rem;"><code>color-fondo-superficie</code></td>
            </tr>
        </tbody>
    </table>
</div>

Los **tokens de paleta** (`azul-500`, `rojo-600`) contienen los valores en bruto: son la materia prima. Los **tokens semánticos** (`color-boton-primario`, `color-texto-error`) apuntan a un token de paleta pero añaden significado de uso, y son los que realmente consumen los componentes en el código. Esta capa de indirección es la pieza clave: si mañana el botón primario cambia de azul a verde, solo hace falta reapuntar `color-boton-primario` a un token de paleta distinto; ningún componente necesita tocarse porque ninguno referenciaba el color en bruto directamente.

## Theming: la misma interfaz, distintos valores de token

Esta misma arquitectura de dos capas es lo que hace posible el **theming**: mantener varios conjuntos de valores para los mismos tokens semánticos, y cambiar entre ellos sin tocar ni un componente. El caso más habitual es el **modo oscuro**: los tokens semánticos siguen siendo los mismos (`color-fondo-superficie`, `color-texto-principal`), pero su valor cambia según el tema activo (fondo claro con texto oscuro en el tema claro; fondo oscuro con texto claro en el tema oscuro). El mismo mecanismo permite, en productos con **multi-marca** (por ejemplo, una plataforma que da servicio a varios clientes con su propia identidad visual), servir una paleta de marca distinta a cada cliente reutilizando exactamente los mismos componentes.

## Implementación técnica más habitual

En la web, la forma más directa de implementar tokens son las **CSS Custom Properties** (variables CSS), definidas típicamente en `:root` y consultadas con la función `var()`: `--color-boton-primario: #364FC7;` se referencia después como `background: var(--color-boton-primario);` en cualquier regla de estilo. Cambiar de tema puede ser tan sencillo como sobrescribir esas variables dentro de un selector distinto (por ejemplo `[data-theme="dark"] { --color-boton-primario: #748ffc; }`), sin tocar ninguna otra línea de CSS. En sistemas de diseño más grandes, los tokens suelen definirse en un formato neutral (JSON) y generarse automáticamente hacia distintas plataformas (CSS, iOS, Android) mediante herramientas de transformación, de modo que diseño y desarrollo, e incluso distintas plataformas, comparten una única fuente de verdad para cada valor.

## Tokens: la base técnica de un sistema de diseño coherente

Los design tokens conectan directamente con la lección de sistemas de diseño y componentes: si los componentes son los bloques reutilizables de interfaz, los tokens son los bloques reutilizables de **valores** que esos componentes consumen. Un sistema de diseño sin tokens tiende, con el tiempo, a acumular pequeñas variaciones de color y espaciado no intencionadas; un sistema de diseño con tokens bien gobernados hace que la consistencia sea la opción por defecto, no un esfuerzo manual constante.
