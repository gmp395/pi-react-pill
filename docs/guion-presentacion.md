# Guion de presentación: introducción a React

**Duración estimada:** 30 minutos  
**Público destinatario:** compañeros y profesorado de la formación intensiva en Desarrollo Web Full Stack
**Formato:** introducción en inglés, desarrollo técnico en español y demostración práctica

## Índice

- [1. Introducción en inglés](#1-introducción-en-inglés)
- [2. Distribución del tiempo](#2-distribución-del-tiempo)
- [3. Desarrollo técnico en español](#3-desarrollo-técnico-en-español)
- [4. Demostración práctica](#4-demostración-práctica)
- [5. Cierre y preguntas](#5-cierre-y-preguntas)
- [6. Comprobaciones antes de la exposición](#6-comprobaciones-antes-de-la-exposición)
- [Autoría](#autoría)

## 1. Introducción en inglés

**En pantalla:** diapositiva de portada.

### Texto propuesto

> Good morning, everyone, and welcome to this introduction to React. My name is Gema, and today I would like to introduce you to React.
>
> React is a popular open-source JavaScript library originally developed at Facebook, now Meta. It is used to build interactive user interfaces for web and mobile applications.
>
> React is based on reusable components, a declarative approach and one-way data flow. These ideas help developers organise interfaces and maintain applications as they grow.
>
> React is a library rather than a complete framework. A framework normally provides a predefined structure and many built-in tools. React focuses mainly on the user interface, while routing, form validation and other features can be added through complementary libraries.
>
> During this presentation, we will review some of React’s fundamental concepts and see how they can be applied in a practical example.
>
> To continue with the technical explanation and the live demonstration, I will now switch to Spanish. Thank you.

## 2. Distribución del tiempo

| Tiempo | Sección | Idioma | Contenido principal |
|---|---|---|---|
| 00:00–00:03 | Introducción | Inglés | Presentación personal, definición de React y utilidad principal |
| 00:03–00:05 | Transición | Español | Contexto de la parte técnica |
| 00:05–00:15 | Fundamentos | Español | Componentes, estado, renderizado y Virtual DOM |
| 00:15–00:27 | Demostración práctica | Español; código en inglés | Desarrollo de un componente y explicación del flujo de trabajo |
| 00:27–00:30 | Cierre | Español | Resumen y preguntas |

## 3. Desarrollo técnico en español

### 3.1. Transición

**Qué decir:**

Como comentaba en la introducción, React permite construir interfaces mediante componentes reutilizables y una gestión declarativa del estado. A continuación, veremos algunos de sus conceptos fundamentales y cómo se aplican en un proyecto práctico.

### 3.2. Componentes y JSX

**Qué decir:**

Una aplicación de React se organiza en componentes. Cada componente representa una parte de la interfaz y puede combinar estructura, comportamiento y estilos.

JSX es una extensión de sintaxis que permite escribir una estructura similar a HTML dentro de JavaScript. Aunque se parece a HTML, JSX se transforma en instrucciones que React utiliza para construir la interfaz.

La división en componentes facilita la reutilización del código, el mantenimiento y la separación de responsabilidades.

### 3.3. Estado y eventos

**Qué decir:**

El estado representa información que puede cambiar durante la ejecución de la aplicación. Para gestionar un estado local en un componente funcional podemos utilizar el hook `useState`.

Cuando el usuario realiza una acción, como pulsar un botón, un manejador de eventos puede actualizar ese estado. React vuelve a renderizar el componente para reflejar el nuevo valor en la interfaz.

### 3.4. Renderizado condicional y listas

**Qué decir:**

React permite mostrar elementos diferentes en función del estado de la aplicación. Esto se conoce como renderizado condicional.

También podemos generar listas de elementos a partir de arrays mediante el método `map()`. Cada elemento debe incluir una propiedad `key` estable para que React pueda identificarlo correctamente durante las actualizaciones.

### 3.5. Virtual DOM

**Qué decir:**

El Virtual DOM es una representación en memoria de la interfaz.

Cuando cambia el estado:

1. React genera una nueva representación de la interfaz.
2. Compara esa representación con la anterior.
3. Determina qué partes han cambiado.
4. Actualiza en el DOM del navegador únicamente lo necesario.

Este proceso de comparación y actualización forma parte de la reconciliación de React. Su finalidad es mantener sincronizada la interfaz de manera eficiente.

> Conviene evitar afirmar que React siempre es más rápido por utilizar Virtual DOM. El rendimiento depende también de la arquitectura, el tamaño de la aplicación y las decisiones de implementación.

## 4. Demostración práctica

**En pantalla:** Visual Studio Code, el navegador y la terminal.

### 4.1. Objetivo de la demostración

Construir un componente sencillo que permita:

- mostrar un contador;
- incrementar su valor;
- restablecerlo;
- observar cómo React actualiza la interfaz al cambiar el estado.

### 4.2. Crear el componente

Archivo propuesto:

```text
src/components/EmployeeCounter.jsx
```

Código:

```jsx
import { useState } from 'react';

export function EmployeeCounter() {
  const [count, setCount] = useState(0);

  const handleAddEmployee = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const handleResetCounter = () => {
    setCount(0);
  };

  return (
    <section className="employee-counter">
      <h2>Active employees</h2>

      <p className="employee-counter__display">
        {count}
      </p>

      <button
        className="employee-counter__button"
        type="button"
        onClick={handleAddEmployee}
      >
        Add employee
      </button>

      <button
        className="employee-counter__button employee-counter__button--secondary"
        type="button"
        onClick={handleResetCounter}
      >
        Reset
      </button>
    </section>
  );
}
```

### 4.3. Explicación del componente

**Qué decir:**

Importamos `useState` y declaramos una variable de estado llamada `count`, cuyo valor inicial es cero.

La función `handleAddEmployee` utiliza la forma funcional de `setCount` para calcular el nuevo valor a partir del estado anterior. La función `handleResetCounter` devuelve el contador a cero.

Los botones utilizan el evento `onClick`. Cada vez que cambia el estado, React actualiza la parte correspondiente de la interfaz.

### 4.4. Integrar el componente

En el componente principal:

```jsx
import { EmployeeCounter } from './components/EmployeeCounter';

function App() {
  return (
    <main>
      <h1>React live demo</h1>
      <EmployeeCounter />
    </main>
  );
}

export default App;
```

### 4.5. Estilos opcionales con BEM

Este apartado debe mantenerse únicamente si el proyecto utiliza realmente SASS y la convención BEM.

Archivo propuesto:

```text
src/scss/components/_employee-counter.scss
```

```scss
.employee-counter {
  max-width: 320px;
  margin: 20px auto;
  padding: 24px;
  text-align: center;
  background-color: #1e293b;
  border: 1px solid rgba(97, 218, 251, 0.2);
  border-radius: 12px;

  &__display {
    margin: 10px 0;
    color: #61dafb;
    font-size: 48px;
    font-weight: 700;
  }

  &__button {
    padding: 10px 20px;
    color: #0f172a;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    background-color: #61dafb;
    border: 0;
    border-radius: 6px;

    &:hover {
      background-color: #40a9c9;
    }

    &--secondary {
      margin-left: 10px;
      color: #f8fafc;
      background-color: #475569;

      &:hover {
        background-color: #334155;
      }
    }
  }
}
```

**Qué decir:**

BEM distingue entre bloque, elemento y modificador:

- `employee-counter`: bloque;
- `employee-counter__display`: elemento;
- `employee-counter__button--secondary`: modificador.

Esta convención ayuda a mantener nombres de clase comprensibles y a reducir colisiones entre estilos.

### 4.6. Flujo de Git opcional

Este apartado debe adaptarse a las ramas que existan realmente en el repositorio. No debe utilizarse una rama `dev` si el proyecto trabaja únicamente con `main`.

Ejemplo de trabajo con una rama de funcionalidad:

```bash
git switch main
git pull
git switch -c feature/employee-counter
```

Después de completar y comprobar el componente:

```bash
git status
git add .
git commit -m "feat: add employee counter component"
git switch main
git merge feature/employee-counter
git branch -d feature/employee-counter
```

**Qué decir:**

La rama de funcionalidad permite desarrollar el componente de forma aislada. Después de probarlo, los cambios se registran en un commit y se integran en la rama principal.

## 5. Cierre y preguntas

**En pantalla:** diapositiva final.

### Texto propuesto

Para resumir, hemos visto que React permite construir interfaces mediante componentes reutilizables y gestionar cambios con estado y eventos.

También hemos comprobado cómo el renderizado condicional, las listas y la actualización de estado permiten crear interfaces dinámicas.

En la demostración práctica hemos construido un componente sencillo y hemos observado cómo React actualiza la vista cuando cambia el estado.

Con esto finaliza la presentación. Ahora podemos abrir un turno de preguntas sobre los conceptos explicados o sobre el código de la demostración. Muchas gracias por vuestra atención.

## 6. Comprobaciones antes de la exposición

Antes de utilizar este guion, conviene comprobar:

- que el código del repositorio coincide con el código mostrado;
- que los nombres de archivos y carpetas existen realmente;
- que el proyecto utiliza SASS antes de explicar SASS modular;
- que las clases siguen BEM antes de presentarlas como parte del proyecto;
- que la rama `dev` existe antes de incluirla en el flujo de Git;
- que `npm install` y `npm run dev` funcionan;
- que la demostración se ha ensayado y cabe en el tiempo disponible.

## Autoría

[Gema Miguel](https://github.com/gmp395).
