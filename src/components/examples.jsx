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
        examples: [
          {
            title: "Operadores matemáticos",
            code: `// Operadores básicos
    let a = 10;
    let b = 5;
    
    console.log("Suma:", a + b);
    console.log("Resta:", a - b);
    console.log("Multiplicación:", a * b);
    console.log("División:", a / b);
    console.log("Módulo:", a % b);
    console.log("Exponente:", a ** b);
    
    // Incremento y decremento
    let contador = 0;
    console.log("++contador:", ++contador);
    console.log("contador++:", contador++);
    console.log("Contador final:", contador);`
          },
          {
            title: "Operadores de comparación",
            code: `// Comparaciones
    let x = 5;
    let y = '5';
    
    console.log("== :", x == y);   // Comparación simple
    console.log("=== :", x === y);  // Comparación estricta
    console.log("!= :", x != y);
    console.log("!== :", x !== y);
    console.log("> :", x > 3);
    console.log(">= :", x >= 5);`
          },
          {
            title: "Operadores lógicos",
            code: `// Operadores AND, OR, NOT
    let edad = 25;
    let tieneCarnet = true;
    
    console.log("AND:", edad >= 18 && tieneCarnet);
    console.log("OR:", edad < 18 || tieneCarnet);
    console.log("NOT:", !tieneCarnet);
    
    // Uso práctico
    let puedeConducir = edad >= 18 && tieneCarnet;
    console.log("¿Puede conducir?:", puedeConducir);`
          }
        ],
        exercises: [
          {
            title: "Ejercicio: Calculadora",
            description: "Crea una calculadora que opere con dos números.",
            initialCode: `function calculadora(num1, num2, operacion) {
      // La función debe realizar: suma, resta, multiplicación y división
      // Debe devolver un mensaje de error si la operación no es válida
      // o si se intenta dividir por cero
      
      // Tu código aquí
    }
    
    console.log(calculadora(10, 5, "suma"));
    console.log(calculadora(10, 5, "division"));
    console.log(calculadora(10, 0, "division")); // Error`
          },
          {
            title: "Ejercicio: Validación de edad",
            description: "Crea un sistema de validación usando operadores lógicos.",
            initialCode: `function puedeEntrar(edad, acompañado, esVIP) {
      // Reglas:
      // - Mayores de 18 pueden entrar siempre
      // - Entre 13 y 17 solo pueden entrar acompañados
      // - Los VIP pueden entrar sin importar la edad
      
      // Tu código aquí
    }
    
    console.log(puedeEntrar(20, false, false)); // true
    console.log(puedeEntrar(15, true, false));  // true
    console.log(puedeEntrar(15, false, false)); // false
    console.log(puedeEntrar(15, false, true));  // true`
          }
        ]
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