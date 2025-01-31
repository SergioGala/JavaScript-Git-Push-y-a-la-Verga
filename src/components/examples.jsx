// examples.js
export const sections = {
    variables: {
      examples: [
        {
          title: "Declaración básica",
          code: `// Ejemplo de variables
  let nombre = "Juan";
  let edad = 25;
  const PI = 3.1416;
  
  console.log("Nombre:", nombre);
  console.log("Edad:", edad);
  console.log("PI:", PI);`
        },
        {
          title: "Modificando variables",
          code: `// Modificando variables
  let contador = 0;
  console.log("Inicial:", contador);
  
  contador = contador + 1;
  console.log("Después de sumar:", contador);
  
  // Esto daría error
  // PI = 3.14;`
        },
        {
          title: "Scope de variables",
          code: `// Scope de variables
  let global = "Variable global";
  
  {
    let local = "Variable local";
    console.log(global);  // Accesible
    console.log(local);   // Accesible
  }
  
  console.log(global);    // Accesible
  // console.log(local); // Error: no accesible`
        }
      ],
      exercises: [
        {
          title: "Ejercicio 1: Intercambio de variables",
          description: "Intercambia el valor de las variables 'a' y 'b' usando una variable temporal.",
          initialCode: `let a = 5;
  let b = 10;
  
  // Tu código aquí
  
  console.log("a:", a); // Debería ser 10
  console.log("b:", b); // Debería ser 5`
        },
        {
          title: "Ejercicio 2: Ámbito de variables",
          description: "Corrige el código para que funcione correctamente usando let y const.",
          initialCode: `// Corrige los errores
  let x = 1;
  x = 2;
  
  const PI = 3.14;
  console.log(PI);
  
  // Añade código aquí para mostrar el scope
  {
    // Crea una variable local
  }
  // Intenta acceder a la variable local aquí`
        },
        {
          title: "Ejercicio 3: Constantes y objetos",
          description: "Trabaja con constantes y entiende la mutabilidad de los objetos.",
          initialCode: `const usuario = {
    nombre: "Juan",
    edad: 25
  };
  
  // 1. Intenta modificar una propiedad del objeto
  // 2. Intenta reasignar el objeto
  // 3. Crea un objeto inmutable usando Object.freeze()`
        }
      ]
    },
    dataTypes : {
      examples: [
        {
          title: "Strings y sus métodos",
          code: `// Trabajando con strings
  let texto = "JavaScript es increíble";
  let nombre = 'María';
  let frase = \`Hola, \${nombre}\`;
  
  // Métodos de strings
  console.log("Longitud:", texto.length);
  console.log("Mayúsculas:", texto.toUpperCase());
  console.log("Minúsculas:", texto.toLowerCase());
  console.log("Substring:", texto.substring(0, 10));
  console.log("Reemplazar:", texto.replace("increíble", "asombroso"));`
        },
        {
          title: "Arrays y métodos",
          code: `// Trabajando con arrays
  let frutas = ["manzana", "pera", "plátano"];
  let numeros = [1, 2, 3, 4, 5];
  
  // Métodos de arrays
  frutas.push("naranja");
  console.log("Añadir:", frutas);
  
  frutas.pop();
  console.log("Quitar último:", frutas);
  
  console.log("Incluye manzana?:", frutas.includes("manzana"));
  console.log("Unir elementos:", frutas.join(", "));`
        },
        {
          title: "Objetos y propiedades",
          code: `// Trabajando con objetos
  const persona = {
    nombre: "Ana",
    edad: 25,
    hobbies: ["leer", "correr"],
    direccion: {
      ciudad: "Madrid",
      calle: "Principal"
    }
  };
  
  console.log("Nombre:", persona.nombre);
  console.log("Edad:", persona.edad);
  console.log("Ciudad:", persona.direccion.ciudad);
  console.log("Hobbies:", persona.hobbies.join(", "));`
        }
      ],
      exercises: [
        {
          title: "Ejercicio: Manipulación de strings",
          description: "Crea una función que procese un texto de diferentes formas.",
          initialCode: `// La función debe:
  // 1. Convertir el texto a mayúsculas
  // 2. Contar cuántas vocales tiene
  // 3. Devolver un objeto con ambos resultados
  
  function procesarTexto(texto) {
    // Tu código aquí
  }
  
  console.log(procesarTexto("JavaScript"));
  // Debería mostrar: { mayusculas: "JAVASCRIPT", vocales: 2 }`
        },
        {
          title: "Ejercicio: Manipulación de arrays",
          description: "Trabaja con arrays y sus métodos.",
          initialCode: `const numeros = [1, 2, 3, 4, 5];
  
  // 1. Duplica cada número del array
  // 2. Suma todos los números
  // 3. Encuentra el número más grande
  
  // Tu código aquí
  
  console.log("Duplicados:", duplicados);
  console.log("Suma total:", suma);
  console.log("Número mayor:", maximo);`
        }
      ]
    },
    operadores : {
        title: "Operadores",
        theory: (
          <div>
            <p>
              Los operadores en JavaScript son símbolos especiales que realizan operaciones sobre variables y valores.
              Son fundamentales para realizar cálculos, comparaciones y manipular datos.
            </p>
      
            <div style={{marginTop: '20px'}}>
              <h4>¿Para qué usamos operadores?</h4>
              <ul>
                <li>Realizar operaciones matemáticas y cálculos</li>
                <li>Comparar valores y tomar decisiones</li>
                <li>Combinar condiciones lógicas</li>
                <li>Manipular y asignar valores a variables</li>
              </ul>
            </div>
      
            <div style={{marginTop: '20px'}}>
              <h4>Tipos de operadores:</h4>
              <ul>
                <li>
                  <strong>Aritméticos:</strong>
                  <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                    {`// Operaciones básicas
      let suma = 5 + 3;      // 8
      let resta = 10 - 4;    // 6
      let mult = 3 * 2;      // 6
      let div = 15 / 3;      // 5
      let modulo = 7 % 2;    // 1 (resto)
      let exponente = 2 ** 3;// 8 (potencia)
      
      // Incremento y decremento
      let num = 5;
      num++;                 // 6 (post-incremento)
      ++num;                 // 7 (pre-incremento)
      num--;                 // 6 (post-decremento)
      --num;                 // 5 (pre-decremento)`}
                  </pre>
                </li>
                <li>
                  <strong>Comparación:</strong>
                  <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                    {`// Comparaciones básicas
      let igual = 5 === 5;       // true (igualdad estricta)
      let noIgual = 5 !== "5";   // true (diferencia estricta)
      let mayor = 10 > 5;        // true
      let menor = 3 < 7;         // true
      let mayorIgual = 5 >= 5;   // true
      let menorIgual = 4 <= 3;   // false
      
      // Comparaciones no estrictas (evitar)
      let igualDebil = 5 == "5";     // true
      let noIgualDebil = 5 != "5";   // false`}
                  </pre>
                </li>
                <li>
                  <strong>Lógicos:</strong>
                  <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                    {`// Operadores AND, OR, NOT
      let and = true && false;   // false
      let or = true || false;    // true
      let not = !true;          // false
      
      // Encadenamiento
      let complejo = (true && false) || (!false);  // true
      let edad = 25;
      let permiso = edad >= 18 && edad <= 65;      // true`}
                  </pre>
                </li>
                <li>
                  <strong>Asignación:</strong>
                  <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                    {`// Asignación simple y compuesta
      let x = 5;           // Asignación básica
      x += 3;              // x = x + 3
      x -= 2;              // x = x - 2
      x *= 4;              // x = x * 4
      x /= 2;              // x = x / 2
      x %= 3;              // x = x % 3
      x **= 2;             // x = x ** 2`}
                  </pre>
                </li>
              </ul>
            </div>
      
            <div style={{backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
              <strong>Ejemplos prácticos:</strong>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', marginTop: '10px'}}>
                {`// Ejemplo 1: Calculadora de descuento
      let precio = 100;
      let descuento = 0.1;  // 10%
      let precioFinal = precio - (precio * descuento);
      let tieneDescuento = precioFinal < precio;  // true
      
      // Ejemplo 2: Validación de formulario
      let edad = 20;
      let email = "usuario@dominio.com";
      let password = "123456";
      let formularioValido = 
        edad >= 18 && 
        email.includes("@") && 
        password.length >= 6;
      
      // Ejemplo 3: Carrito de compra
      let cantidad = 5;
      let precioUnitario = 10;
      let total = cantidad * precioUnitario;
      total += (total * 0.16);  // Añadir IVA`}
              </pre>
            </div>
      
            <div style={{backgroundColor: '#f8d7da', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
              <strong>Errores comunes:</strong>
              <ul>
                <li>Usar == en lugar de === para comparaciones</li>
                <li>No considerar la precedencia de operadores</li>
                <li>Confundir los operadores lógicos</li>
              </ul>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', marginTop: '10px'}}>
                {`// ❌ Error: Comparación no estricta
      if (5 == "5") {       // ¡Cuidado! true
        // Usar siempre ===
      }
      
      // ❌ Error: Precedencia incorrecta
      let resultado = 2 + 3 * 4;    // 14, no 20
      // Correcto: let resultado = (2 + 3) * 4;
      
      // ❌ Error: Lógica incorrecta
      if (edad < 18 && > 65) {      // Error de sintaxis
        // Correcto: if (edad < 18 && edad > 65)
      }
      
      // ❌ Error: Asignación en condicional
      if (variable = true) {        // Asignación, no comparación
        // Correcto: if (variable === true)
      }`}
              </pre>
            </div>
      
            <div style={{backgroundColor: '#d4edda', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
              <strong>Buenas prácticas:</strong>
              <ul>
                <li>Usar siempre === y !== para comparaciones</li>
                <li>Utilizar paréntesis para clarificar operaciones complejas</li>
                <li>Mantener las operaciones simples y legibles</li>
                <li>Evitar comparaciones innecesarias con true/false</li>
                <li>Considerar la coerción de tipos al operar</li>
              </ul>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', marginTop: '10px'}}>
                {`// ✅ Buenas prácticas
      // Comparaciones estrictas
      if (valor === null || valor === undefined) {
        // Código seguro
      }
      
      // Claridad con paréntesis
      let complejo = (a + b) * (c + d);
      
      // Evitar redundancia
      if (esValido) {  // en lugar de if (esValido === true)
        // Código más limpio
      }
      
      // Validaciones seguras
      let numero = +"123";  // Conversión explícita a número
      if (Number.isFinite(numero)) {
        // Operación segura
      }`}
              </pre>
            </div>
      
            <div style={{marginTop: '20px'}}>
              <h4>Cuándo usar cada operador:</h4>
              <ul>
                <li><strong>Aritméticos (+, -, *, /):</strong> Para cálculos matemáticos básicos</li>
                <li><strong>Módulo (%):</strong> Para obtener residuos y ciclos</li>
                <li><strong>Comparación (===, !==, &gt;, &lt;):</strong> Para condiciones y validaciones</li>
                <li><strong>Lógicos (&&, ||, !):</strong> Para combinar condiciones</li>
                <li><strong>Asignación (=, +=, -=):</strong> Para asignar y modificar valores</li>
              </ul>
            </div>
          </div>
        )
      },
      funciones: {
        examples: [
          {
            title: "Tipos de funciones",
            code: `// Función tradicional
    function saludar(nombre) {
      return \`¡Hola \${nombre}!\`;
    }
    
    // Función flecha
    const saludarFlecha = (nombre) => \`¡Hola \${nombre}!\`;
    
    // Función con múltiples parámetros
    const presentar = (nombre, edad) => {
      return \`Me llamo \${nombre} y tengo \${edad} años\`;
    };
    
    console.log(saludar("Ana"));
    console.log(saludarFlecha("Juan"));
    console.log(presentar("María", 25));`
          },
          {
            title: "Parámetros por defecto",
            code: `// Parámetros con valores predeterminados
    function configurar(color = "rojo", tamaño = "mediano", tipo = "normal") {
      return \`Color: \${color}, Tamaño: \${tamaño}, Tipo: \${tipo}\`;
    }
    
    console.log(configurar());
    console.log(configurar("azul"));
    console.log(configurar("verde", "grande"));`
          }
        ],
        exercises: [
          {
            title: "Ejercicio: Creación de funciones",
            description: "Crea funciones utilizando diferentes sintaxis.",
            initialCode: `// 1. Crea una función tradicional 'multiplicar'
    // 2. Crea una función flecha 'dividir'
    // 3. Crea una función con parámetros por defecto 'potencia'
    
    // Tu código aquí
    
    console.log(multiplicar(4, 2));   // 8
    console.log(dividir(10, 2));      // 5
    console.log(potencia(2));         // 4 (por defecto elevar al cuadrado)
    console.log(potencia(2, 3));      // 8 (2 elevado a 3)`
          },
          {
            title: "Ejercicio: Funciones de array",
            description: "Trabaja con funciones de orden superior.",
            initialCode: `const numeros = [1, 2, 3, 4, 5];
    
    // 1. Usa map para duplicar los números
    // 2. Usa filter para obtener los pares
    // 3. Usa reduce para obtener la suma
    
    // Tu código aquí
    
    console.log("Duplicados:", duplicados);
    console.log("Pares:", pares);
    console.log("Suma:", suma);`
          }
        ]
      },
      condicionales: {
        examples: [
          {
            title: "if-else básico",
            code: `// Estructura if-else
    let edad = 18;
    
    if (edad >= 18) {
      console.log("Eres mayor de edad");
    } else {
      console.log("Eres menor de edad");
    }
    
    // if-else encadenado
    let nota = 85;
    
    if (nota >= 90) {
      console.log("Sobresaliente");
    } else if (nota >= 80) {
      console.log("Notable");
    } else if (nota >= 70) {
      console.log("Bien");
    } else {
      console.log("Necesita mejorar");
    }`
          },
          {
            title: "Operador ternario",
            code: `// Operador ternario simple
    let edad = 20;
    let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
    console.log(mensaje);
    
    // Ternario encadenado
    let nota = 85;
    let resultado = nota >= 90 ? "Sobresaliente" :
                    nota >= 80 ? "Notable" :
                    nota >= 70 ? "Bien" :
                    "Necesita mejorar";
    console.log(resultado);`
          }
        ],
        exercises: [
          {
            title: "Ejercicio: Sistema de notas",
            description: "Implementa un sistema de calificaciones usando if-else.",
            initialCode: `function obtenerCalificacion(nota) {
      // Implementa un sistema que devuelva:
      // A: 90-100
      // B: 80-89
      // C: 70-79
      // D: 60-69
      // F: 0-59
      
      // Tu código aquí
    }
    
    console.log(obtenerCalificacion(95)); // Debería mostrar "A"
    console.log(obtenerCalificacion(82)); // Debería mostrar "B"
    console.log(obtenerCalificacion(45)); // Debería mostrar "F"`
          }
        ]
      },
      bucles: {
        examples: [
          {
            title: "Bucle for",
            code: `// Bucle for básico
      for (let i = 0; i < 5; i++) {
        console.log("Iteración:", i);
      }
      
      // For con array
      let frutas = ["manzana", "pera", "plátano"];
      for (let i = 0; i < frutas.length; i++) {
        console.log(\`Fruta \${i + 1}: \${frutas[i]}\`);
      }`
          },
          {
            title: "Bucle while",
            code: `// While básico
      let contador = 0;
      while (contador < 5) {
        console.log(contador);
        contador++;
      }
      
      // Do...while
      let numero = 1;
      do {
        console.log(numero);
        numero *= 2;
      } while (numero < 10);`
          }
        ],
        exercises: [
          {
            title: "Ejercicio: Fibonacci",
            description: "Genera la secuencia Fibonacci usando un bucle.",
            initialCode: `function fibonacci(n) {
        // Genera los primeros n números de la secuencia Fibonacci
        // La secuencia comienza con 0, 1 y cada número siguiente
        // es la suma de los dos anteriores
        
        // Tu código aquí
      }
      
      console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]`
          },
          {
            title: "Ejercicio: FizzBuzz",
            description: "Implementa el clásico FizzBuzz: Para números divisibles por 3, imprime 'Fizz'. Para números divisibles por 5, imprime 'Buzz'. Para números divisibles por ambos, imprime 'FizzBuzz'. Para otros números, imprime el número.",
            initialCode: `function fizzBuzz(n) {
        // Implementa FizzBuzz hasta el número n
        // Por ejemplo, para n = 15 deberías ver:
        // 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
        
        // Tu código aquí
      }
      
      // Prueba la función
      console.log(fizzBuzz(15));
      
      // Bonus: ¿Puedes hacerlo usando un array y map?
      // Pista: Array(n).fill().map((_, i) => ...)`
          }
        ]
      }
    };
    
    export const codeExamples = Object.keys(sections).reduce((acc, key) => {
      acc[key] = sections[key].examples;
      return acc;
    }, {});
    
    export const exercises = Object.keys(sections).reduce((acc, key) => {
      acc[key] = sections[key].exercises;
      return acc;
    }, {});