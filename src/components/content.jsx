/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
// content.js
export const sections = {
    variables: {
      title: "Variables",
      theory: (
        <div>
          <p>
            En JavaScript, las variables son contenedores para almacenar datos. Es como crear cajas 
            etiquetadas donde podemos guardar diferentes tipos de información.
          </p>
          
          <div style={{marginTop: '20px'}}>
            <h4>Formas de declarar variables:</h4>
            <ul>
              <li>
                <strong>let:</strong> Es la forma moderna de declarar variables que pueden cambiar su valor.
                Tiene un alcance de bloque, lo que significa que solo existe dentro del bloque donde se declara.
              </li>
              <li>
                <strong>const:</strong> Se usa para declarar valores que no cambiarán (constantes).
                Una vez asignado un valor, no se puede modificar.
              </li>
              <li>
                <strong>var:</strong> Es la forma antigua de declarar variables. Se recomienda evitar su uso
                en código moderno.
              </li>
            </ul>
          </div>
  
          <div style={{backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
            <strong>¿Por qué evitar var?</strong>
            <p>
              var tiene un comportamiento de "hoisting" que puede causar confusión y bugs.
              Además, no respeta el alcance de bloque como let y const.
            </p>
          </div>
  
          <div style={{backgroundColor: '#d4edda', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
            <strong>Tip:</strong>
            <p>
              Utiliza const por defecto, y cambia a let solo cuando necesites reasignar valores.
              Esto hará tu código más predecible y fácil de mantener.
            </p>
          </div>
        </div>
      )
    },
    tipos: {
      title: "Tipos de Datos",
      theory: (
        <div>
          <p>
            JavaScript tiene varios tipos de datos que nos permiten trabajar con diferentes tipos
            de información. Cada tipo tiene sus propias características y usos.
          </p>
  
          <div style={{marginTop: '20px'}}>
            <h4>Tipos Primitivos:</h4>
            <ul>
              <li>
                <strong>String:</strong> Para texto. Se puede escribir con comillas simples (''),
                dobles ("") o backticks (``).
              </li>
              <li>
                <strong>Number:</strong> Para números, tanto enteros como decimales.
                JavaScript no distingue entre tipos de números.
              </li>
              <li>
                <strong>Boolean:</strong> Para valores verdadero/falso (true/false).
              </li>
              <li>
                <strong>undefined:</strong> Para variables declaradas pero sin valor asignado.
              </li>
              <li>
                <strong>null:</strong> Para representar la ausencia intencional de valor.
              </li>
            </ul>
          </div>
  
          <div style={{marginTop: '20px'}}>
            <h4>Tipos Compuestos:</h4>
            <ul>
              <li>
                <strong>Array:</strong> Para listas ordenadas de valores.
                Pueden contener cualquier tipo de dato.
              </li>
              <li>
                <strong>Object:</strong> Para colecciones de datos relacionados en pares clave-valor.
              </li>
            </ul>
          </div>
  
          <div style={{backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
            <strong>Template Literals:</strong>
            <p>
              Los backticks (``) permiten crear strings con múltiples líneas y usar interpolación.
              <br />
              Ejemplo: {'`Hola ${nombre}!`'} se convertirá en "Hola Ana!" si nombre = "Ana"
            </p>
          </div>
        </div>
      ),
      examples: [
        {
          description: "Strings (texto)",
          code: "let mensaje = \"Hola Mundo\";\nlet nombre = 'María';\nlet frase = `Mi nombre es ${nombre}`;\nconsole.log(mensaje, nombre, frase);"
        },
        {
          description: "Numbers (números)",
          code: "let entero = 42;\nlet decimal = 3.14;\nlet negativo = -10;\nconsole.log(entero, decimal, negativo);"
        },
        {
          description: "Arrays",
          code: "let frutas = ['manzana', 'pera', 'plátano'];\nlet numeros = [1, 2, 3, 4, 5];\nconsole.log(frutas[0]); // manzana\nconsole.log(numeros);"
        }
      ]
    },
    operadores: {
      title: "Operadores",
      theory: (
        <div>
          <p>
            Los operadores nos permiten realizar operaciones con valores y variables.
            JavaScript tiene varios tipos de operadores para diferentes propósitos.
          </p>
  
          <div style={{marginTop: '20px'}}>
            <h4>Operadores Matemáticos:</h4>
            <ul>
              <li><strong>+ </strong>: Suma (también concatena strings)</li>
              <li><strong>- </strong>: Resta</li>
              <li><strong>* </strong>: Multiplicación</li>
              <li><strong>/ </strong>: División</li>
              <li><strong>% </strong>: Módulo (resto de la división)</li>
              <li><strong>** </strong>: Exponenciación</li>
            </ul>
          </div>
  
          <div style={{marginTop: '20px'}}>
            <h4>Operadores de Comparación:</h4>
            <ul>
              <li><strong>=== </strong>: Igualdad estricta (valor y tipo)</li>
              <li><strong>!== </strong>: Desigualdad estricta</li>
              <li><strong>{'>'} </strong>: Mayor que</li>
              <li><strong>{'<'} </strong>: Menor que</li>
              <li><strong>{'>='} </strong>: Mayor o igual que</li>
              <li><strong>{'<='} </strong>: Menor o igual que</li>
            </ul>
          </div>
  
          <div style={{backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
            <strong>== vs ===</strong>
            <p>
              Siempre usa === para comparaciones. El operador == realiza conversión de tipos
              automática y puede llevar a resultados inesperados.
            </p>
          </div>
        </div>
      )
    },
    funciones: {
      title: "Funciones",
      theory: (
        <div>
          <p>
            Las funciones son bloques de código reutilizable que podemos llamar cuando las necesitemos.
            Son fundamentales para escribir código limpio y mantenible.
          </p>
  
          <div style={{marginTop: '20px'}}>
            <h4>Tipos de Funciones:</h4>
            <ul>
              <li>
                <strong>Funciones Declaradas:</strong>
                <p>Usando la palabra clave function. Se pueden llamar antes de su declaración.</p>
              </li>
              <li>
                <strong>Funciones Expresadas:</strong>
                <p>Asignando una función a una variable. Solo se pueden llamar después de su declaración.</p>
              </li>
              <li>
                <strong>Funciones Flecha:</strong>
                <p>Sintaxis moderna y más concisa. Ideal para funciones cortas.</p>
              </li>
            </ul>
          </div>
  
          <div style={{backgroundColor: '#d4edda', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
            <strong>Mejores Prácticas:</strong>
            <ul>
            <li>Usa nombres descriptivos que indiquen lo que hace la función</li>
            <li>Cada función debe hacer una sola cosa (principio de responsabilidad única)</li>
            <li>Prefiere funciones pequeñas y específicas sobre funciones grandes y generales</li>
            <li>Documenta tus funciones cuando sea necesario</li>
          </ul>
        </div>

        <div style={{backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
          <strong>Parámetros y Argumentos:</strong>
          <p>
            Los parámetros son las variables que definimos en la función, mientras que
            los argumentos son los valores que pasamos cuando llamamos a la función.
          </p>
          <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
            {`// nombre y edad son parámetros
const presentar = (nombre, edad) => {
  return \`Me llamo \${nombre} y tengo \${edad} años\`;
};

// "Ana" y 25 son argumentos
presentar("Ana", 25);`}
          </pre>
        </div>
      </div>
    )
  },

  condicionales: {
    title: "Condicionales",
    theory: (
      <div>
        <p>
          Las estructuras condicionales nos permiten ejecutar diferentes bloques de código
          según se cumplan o no ciertas condiciones.
        </p>

        <div style={{marginTop: '20px'}}>
          <h4>Tipos de Condicionales:</h4>
          <ul>
            <li>
              <strong>if...else:</strong>
              <p>La estructura más básica de control de flujo.</p>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`if (condicion) {
  // código si es verdadero
} else {
  // código si es falso
}`}
              </pre>
            </li>
            <li>
              <strong>else if:</strong>
              <p>Para múltiples condiciones.</p>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`if (condicion1) {
  // código para condición 1
} else if (condicion2) {
  // código para condición 2
} else {
  // código si ninguna condición es verdadera
}`}
              </pre>
            </li>
            <li>
              <strong>Operador Ternario:</strong>
              <p>Forma abreviada para condiciones simples.</p>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`const resultado = condicion ? valorSiVerdadero : valorSiFalso;`}
              </pre>
            </li>
            <li>
              <strong>switch:</strong>
              <p>Para múltiples casos específicos.</p>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`switch (valor) {
  case 1:
    // código para valor 1
    break;
  case 2:
    // código para valor 2
    break;
  default:
    // código por defecto
}`}
              </pre>
            </li>
          </ul>
        </div>

        <div style={{backgroundColor: '#d4edda', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
          <strong>Consejos:</strong>
          <ul>
            <li>Usa condiciones claras y descriptivas</li>
            <li>Evita anidar demasiados if...else (máximo 2-3 niveles)</li>
            <li>Considera usar switch cuando tengas muchas condiciones específicas</li>
            <li>El operador ternario es ideal para asignaciones simples</li>
          </ul>
        </div>
      </div>
    )
  },

  bucles: {
    title: "Bucles e Iteración",
    theory: (
      <div>
        <p>
          Los bucles nos permiten ejecutar un bloque de código múltiples veces.
          Son fundamentales para trabajar con colecciones de datos y automatizar tareas repetitivas.
        </p>

        <div style={{marginTop: '20px'}}>
          <h4>Tipos de Bucles:</h4>
          <ul>
            <li>
              <strong>for:</strong>
              <p>El bucle más común cuando conocemos el número de iteraciones.</p>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`for (let i = 0; i < 5; i++) {
  console.log(i);
}`}
              </pre>
            </li>
            <li>
              <strong>while:</strong>
              <p>Se ejecuta mientras una condición sea verdadera.</p>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`while (condicion) {
  // código a ejecutar
}`}
              </pre>
            </li>
            <li>
              <strong>do...while:</strong>
              <p>Similar a while, pero se ejecuta al menos una vez.</p>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`do {
  // código a ejecutar
} while (condicion);`}
              </pre>
            </li>
            <li>
              <strong>for...of:</strong>
              <p>Para iterar sobre elementos de arrays u otros iterables.</p>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`for (const elemento of array) {
  console.log(elemento);
}`}
              </pre>
            </li>
          </ul>
        </div>

        <div style={{backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
          <strong>Métodos de Array:</strong>
          <p>
            JavaScript proporciona métodos modernos para iterar arrays que son más legibles y funcionales:
          </p>
          <ul>
            <li><strong>forEach():</strong> Para ejecutar una función por cada elemento</li>
            <li><strong>map():</strong> Para transformar cada elemento</li>
            <li><strong>filter():</strong> Para filtrar elementos</li>
            <li><strong>reduce():</strong> Para acumular valores</li>
          </ul>
        </div>

        <div style={{backgroundColor: '#d4edda', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
          <strong>Mejores Prácticas:</strong>
          <ul>
            <li>Usa for...of para arrays cuando no necesites el índice</li>
            <li>Prefiere métodos de array sobre bucles tradicionales cuando sea posible</li>
            <li>Evita modificar la variable de iteración dentro del bucle</li>
            <li>Incluye siempre una condición de salida clara en bucles while</li>
          </ul>
        </div>
      </div>
    )
  }
};