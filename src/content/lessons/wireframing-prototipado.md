---
title: 'Wireframing y prototipado'
description: 'Entiende para qué sirve cada nivel de fidelidad y cuándo usar wireframes, mockups o prototipos interactivos.'
category: ux
level: intermediate
order: 7
exercises:
    - id: wireframing-mc-1
      type: multiple-choice
      prompt: '¿Cuál es el propósito principal de un wireframe de baja fidelidad?'
      allowMultiple: false
      options:
          - text: 'Mostrar los colores y la tipografía final del producto.'
            correct: false
            explanation: 'Eso corresponde a un mockup de alta fidelidad, no a un wireframe de baja fidelidad.'
          - text: 'Definir rápidamente la estructura, el contenido y la disposición de los elementos sin distraer con el diseño visual.'
            correct: true
            explanation: 'Correcto. Un wireframe se centra en el «qué» y el «dónde», dejando el «cómo se ve» para etapas posteriores.'
          - text: 'Sustituir por completo la necesidad de hacer un diseño visual más adelante.'
            correct: false
            explanation: 'El wireframe es un paso intermedio, no un sustituto del diseño visual final.'
    - id: wireframing-order-1
      type: ordering
      prompt: 'Ordena estas etapas del proceso de diseño según su nivel de fidelidad, de menor a mayor.'
      items:
          - 'Bocetos en papel (sketches)'
          - 'Wireframes de baja fidelidad'
          - 'Mockups de alta fidelidad'
          - 'Prototipo interactivo navegable'
      explanation: 'Aumentar la fidelidad gradualmente permite validar ideas de estructura antes de invertir tiempo en detalles visuales o de interacción que tocaría rehacer si la estructura cambia.'
    - id: wireframing-free-1
      type: free-text
      prompt: '¿Cómo se llama al artefacto de diseño que simula la interacción real de un producto (se puede navegar, hacer clic en botones, etc.) sin necesidad de programarlo?'
      acceptedAnswers:
          - 'prototipo'
          - 'prototipo interactivo'
          - 'prototype'
      explanation: 'Un prototipo interactivo conecta pantallas estáticas mediante enlaces y transiciones para simular el flujo real, permitiendo probarlo con usuarios antes de escribir una sola línea de código.'
    - id: wireframing-mc-2
      type: multiple-choice
      prompt: 'Un equipo quiere validar en dos días si el orden de los pasos de un flujo de compra tiene sentido para los usuarios, antes de decidir el diseño visual. ¿Qué opción es más eficiente?'
      allowMultiple: false
      options:
          - text: 'Diseñar mockups de alta fidelidad con todos los colores y textos finales.'
            correct: false
            explanation: 'Es mucho trabajo para una pregunta que solo trata sobre la estructura del flujo, no sobre el aspecto visual.'
          - text: 'Hacer wireframes de baja fidelidad y probarlos con algunos usuarios.'
            correct: true
            explanation: 'Correcto. La baja fidelidad permite iterar rápido y aprender sobre la estructura sin invertir tiempo en detalles que aún podrían cambiar.'
          - text: 'Esperar a tener el producto programado para ver si funciona.'
            correct: false
            explanation: 'Esperar hasta el desarrollo hace que cualquier corrección sea mucho más cara y lenta que corregirla en wireframes.'
---

## Bocetar antes de pulir

Wireframing es el proceso de representar la estructura de una pantalla —qué elementos hay, en qué orden y con qué prioridad— usando formas simples: rectángulos, líneas y texto de relleno, casi siempre en escala de grises. La idea es deliberada: al eliminar el color, las imágenes finales y la tipografía cuidada, el equipo (y las personas que prueban el diseño) se concentra en si la estructura y el contenido tienen sentido, sin que un buen acabado visual "tape" un problema de fondo, como un formulario mal ordenado o un botón de llamada a la acción poco visible.

Para que la diferencia entre "estructura" y "acabado visual" se vea de un vistazo, compara estos dos bloques: representan la misma cabecera de página, primero como wireframe y después como mockup de alta fidelidad.

<div style="display:flex;flex-wrap:wrap;gap:1.5rem;margin:1.25rem 0;">
    <div style="flex:1;min-width:240px;">
        <p style="margin:0 0 0.5rem;font-size:0.78rem;font-weight:700;text-transform:uppercase;color:#495057;">Wireframe</p>
        <div style="border:2px solid #adb5bd;border-radius:0.25rem;padding:0.75rem;background:#f8f9fa;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-block-end:0.75rem;">
                <div style="width:64px;height:16px;background:#ced4da;"></div>
                <div style="display:flex;gap:0.4rem;">
                    <div style="width:36px;height:12px;background:#ced4da;"></div>
                    <div style="width:36px;height:12px;background:#ced4da;"></div>
                    <div style="width:36px;height:12px;background:#ced4da;"></div>
                </div>
            </div>
            <div style="width:70%;height:20px;background:#ced4da;margin-block-end:0.5rem;"></div>
            <div style="width:90%;height:10px;background:#e9ecef;margin-block-end:0.4rem;"></div>
            <div style="width:50%;height:10px;background:#e9ecef;margin-block-end:0.75rem;"></div>
            <div style="width:96px;height:28px;background:#adb5bd;"></div>
        </div>
    </div>
    <div style="flex:1;min-width:240px;">
        <p style="margin:0 0 0.5rem;font-size:0.78rem;font-weight:700;text-transform:uppercase;color:#495057;">Mockup de alta fidelidad</p>
        <div style="border-radius:0.25rem;padding:0.75rem;background:#ffffff;border:1px solid #d8dbe3;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-block-end:0.75rem;">
                <div style="font-weight:700;color:#364fc7;font-size:0.9rem;">Acme</div>
                <div style="display:flex;gap:0.75rem;font-size:0.72rem;color:#495057;">
                    <span>Producto</span><span>Precios</span><span>Ayuda</span>
                </div>
            </div>
            <div style="font-weight:700;font-size:1.1rem;color:#1c1f26;margin-block-end:0.35rem;">Organiza tu equipo sin esfuerzo</div>
            <div style="font-size:0.75rem;color:#495057;margin-block-end:0.75rem;">La plataforma todo-en-uno para planificar, seguir y celebrar el trabajo de tu equipo.</div>
            <div style="display:inline-block;background:#364fc7;color:#fff;font-size:0.78rem;font-weight:600;padding:0.4rem 0.9rem;border-radius:0.4rem;">Empezar gratis</div>
        </div>
    </div>
</div>

El wireframe transmite exactamente la misma estructura (logo, tres enlaces de navegación, titular, texto de apoyo, botón), pero sin ningún color de marca, tipografía definitiva ni copy final, para que la conversación con el equipo se centre en si esa estructura tiene sentido.

## Niveles de fidelidad

Es útil pensar el proceso de diseño como una escalera de fidelidad creciente. Se empieza con **bocetos en papel**, rapidísimos y desechables, para explorar muchas ideas en poco tiempo. Se sigue con **wireframes digitales de baja fidelidad**, ya con medidas y jerarquía más precisas. Después llegan los **mockups de alta fidelidad**: el diseño visual definitivo, con colores, tipografías e imágenes reales. Y finalmente el **prototipo interactivo**, que conecta esas pantallas con transiciones y zonas clicables para simular la experiencia real de uso. Subir de fidelidad demasiado pronto es un error común: se invierte tiempo puliendo detalles visuales de una estructura que quizás haya que rehacer por completo tras la primera prueba con usuarios.

## Prototipar para aprender, no para impresionar

El prototipo no es un entregable decorativo: es una herramienta para aprender antes de programar. Un prototipo navegable permite poner el diseño delante de usuarios reales y observar si consiguen completar tareas, sin haber escrito una sola línea de código de producción. Esto reduce enormemente el coste de los errores: es mucho más barato descubrir en un prototipo que un flujo de pago tiene un paso confuso que descubrirlo después del lanzamiento, cuando corregirlo implica tocar código, hacer pruebas de regresión y desplegar de nuevo.

## Dos ejes de fidelidad, no uno

Es fácil pensar en la fidelidad como una sola escala (de boceto a producto terminado), pero en realidad son dos ejes independientes: la **fidelidad visual** (cuánto se parece a los colores, tipografía e imágenes finales) y la **fidelidad de interacción** (cuánto se comporta como el producto real: transiciones, estados, datos dinámicos). Un wireframe puede tener alta fidelidad de interacción y baja fidelidad visual a la vez —cajas grises perfectamente clicables y navegables— y eso es precisamente lo recomendable cuando se quiere validar un flujo sin que el acabado visual sesgue el feedback de los usuarios hacia comentarios sobre el color en lugar de sobre la estructura.
