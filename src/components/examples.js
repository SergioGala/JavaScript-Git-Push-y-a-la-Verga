// examples.js
export const codeExamples = {
    variables: [
      {
        title: "Declaración de variables",
        code: `// Usando let
  let nombre = "Juan";
  let edad = 25;
  
  // Usando const
  const PI = 3.1416;
  const DIAS_SEMANA = 7;
  
  console.log(nombre, edad, PI, DIAS_SEMANA);`
      },
      {
        title: "Reasignación de variables",
        code: `let contador = 1;
  contador = contador + 1;
  console.log(contador);
  
  const persona = { nombre: "Ana" };
  persona.nombre = "María"; // Podemos modificar el objeto
  console.log(persona);`
      }
    ],
    tipos: [
      {
        title: "Trabajando con strings",
        code: `let nombre = "Ana";
  let apellido = 'García';
  let nombreCompleto = \`\${nombre} \${apellido}\`;
  
  console.log(nombreCompleto);
  console.log(nombreCompleto.length);
  console.log(nombreCompleto.toUpperCase());`
      },
      {
        title: "Arrays y objetos",
        code: `let frutas = ["manzana", "pera", "plátano"];
  let numeros = [1, 2, 3, 4, 5];
  
  let persona = {
    nombre: "Juan",
    edad: 25,
    hobbies: ["música", "deportes"]
  };
  
  console.log(frutas[0]);
  console.log(persona.hobbies);`
      }
    ],
    operadores: [
        {
          title: "Operadores matemáticos",
          code: `// Operaciones básicas
    let a = 10;
    let b = 5;
    
    console.log("Suma:", a + b);
    console.log("Resta:", a - b);
    console.log("Multiplicación:", a * b);
    console.log("División:", a / b);
    console.log("Módulo:", a % b);
    console.log("Exponente:", a ** b);
    
    // Operadores de asignación
    let c = 15;
    c += 5;  // c = c + 5
    console.log("Después de +=:", c);
    c *= 2;  // c = c * 2
    console.log("Después de *=:", c);`
        },
        {
          title: "Operadores de comparación",
          code: `// Comparaciones
    let x = 5;
    let y = '5';
    
    console.log("Igual ==:", x == y);        // true
    console.log("Estrictamente igual ===:", x === y);  // false
    console.log("Diferente !=:", x != y);    // false
    console.log("Estrictamente diferente !==:", x !== y);  // true
    console.log("Mayor que:", x > 3);
    console.log("Menor o igual:", x <= 5);`
        },
        {
          title: "Operadores lógicos",
          code: `// AND, OR, NOT
    let edad = 25;
    let tieneCarnet = true;
    
    console.log("AND:", edad >= 18 && tieneCarnet);  // true
    console.log("OR:", edad < 18 || tieneCarnet);    // true
    console.log("NOT:", !tieneCarnet);               // false
    
    // Uso práctico
    let puedeConducir = edad >= 18 && tieneCarnet;
    console.log("¿Puede conducir?:", puedeConducir);`
        },
        {
          title: "Operadores de cadena",
          code: `// Concatenación de strings
    let nombre = "Juan";
    let apellido = "García";
    
    console.log("Concatenación +:", nombre + " " + apellido);
    console.log(\`Usando template literals: \${nombre} \${apellido}\`);
    
    // Operador de concatenación +=
    let mensaje = "Hola ";
    mensaje += nombre;
    mensaje += "!";
    console.log(mensaje);`
        },
        {
          title: "Operadores avanzados",
          code: `// Operador ternario
    let edad = 20;
    let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
    console.log(mensaje);
    
    // Operador de coalescencia nula ??
    let usuario = null;
    let nombreUsuario = usuario ?? "Anónimo";
    console.log(nombreUsuario);
    
    // Encadenamiento opcional ?.
    let obj = {
      persona: {
        nombre: "Ana"
      }
    };
    console.log(obj?.persona?.nombre);
    console.log(obj?.otraPropiedad?.nombre);`
        }
      ],
    
      funciones: [
        {
          title: "Funciones básicas",
          code: `// Función tradicional
    function saludar(nombre) {
      return "¡Hola " + nombre + "!";
    }
    
    // Función flecha
    const saludarFlecha = (nombre) => "¡Hola " + nombre + "!";
    
    console.log(saludar("Juan"));
    console.log(saludarFlecha("Ana"));`
        },
        {
          title: "Parámetros y argumentos",
          code: `// Parámetros por defecto
    function saludar(nombre = "Invitado") {
      return \`¡Hola \${nombre}!\`;
    }
    
    console.log(saludar());
    console.log(saludar("María"));
    
    // Rest parameters
    function sumar(...numeros) {
      return numeros.reduce((total, num) => total + num, 0);
    }
    
    console.log(sumar(1, 2, 3, 4, 5));`
        },
        {
          title: "Closures",
          code: `// Ejemplo de closure
    function crearContador() {
      let contador = 0;
      
      return {
        incrementar: () => {
          contador++;
          return contador;
        },
        obtenerValor: () => contador
      };
    }
    
    const contador = crearContador();
    console.log(contador.incrementar());
    console.log(contador.incrementar());
    console.log(contador.obtenerValor());`
        },
        {
          title: "Callbacks",
          code: `// Funciones como argumentos
    function procesarArray(arr, callback) {
      return arr.map(callback);
    }
    
    const numeros = [1, 2, 3, 4];
    const duplicar = (x) => x * 2;
    const cuadrado = (x) => x ** 2;
    
    console.log(procesarArray(numeros, duplicar));
    console.log(procesarArray(numeros, cuadrado));`
        },
        {
          title: "Métodos de array avanzados",
          code: `const productos = [
      { nombre: "Laptop", precio: 1000 },
      { nombre: "Móvil", precio: 500 },
      { nombre: "Tablet", precio: 300 }
    ];
    
    // filter
    const caros = productos.filter(p => p.precio > 400);
    console.log("Productos caros:", caros);
    
    // map
    const nombres = productos.map(p => p.nombre);
    console.log("Nombres:", nombres);
    
    // reduce
    const total = productos.reduce((sum, p) => sum + p.precio, 0);
    console.log("Total:", total);`
        }
      ],
      condicionales: [
        {
          title: "if-else básico",
          code: `let edad = 18;
    
    if (edad >= 18) {
      console.log("Eres mayor de edad");
    } else {
      console.log("Eres menor de edad");
    }`
        },
        {
          title: "if-else anidados",
          code: `let nota = 85;
    
    if (nota >= 90) {
      console.log("Sobresaliente");
    } else if (nota >= 80) {
      console.log("Notable");
    } else if (nota >= 70) {
      console.log("Bien");
    } else if (nota >= 60) {
      console.log("Suficiente");
    } else {
      console.log("Suspenso");
    }
    
    // También podemos anidar condiciones
    let edad = 18;
    let tieneCarnet = true;
    
    if (edad >= 18) {
      if (tieneCarnet) {
        console.log("Puede conducir");
      } else {
        console.log("Necesita obtener el carnet");
      }
    } else {
      console.log("Demasiado joven para conducir");
    }`
        },
        {
          title: "Operador ternario avanzado",
          code: `// Operador ternario simple
    let edad = 20;
    let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
    console.log(mensaje);
    
    // Ternarios encadenados
    let nota = 85;
    let resultado = 
      nota >= 90 ? "Sobresaliente" :
      nota >= 80 ? "Notable" :
      nota >= 70 ? "Bien" :
      nota >= 60 ? "Suficiente" :
      "Suspenso";
    
    console.log(resultado);
    
    // Ternario con múltiples líneas
    let usuario = {
      nombre: "Juan",
      edad: 20
    };
    
    let permiso = usuario.edad >= 18 
      ? {
          conducir: true,
          beber: true
        }
      : {
          conducir: false,
          beber: false
        };
    
    console.log(permiso);`
        },
        {
          title: "switch case avanzado",
          code: `let diaSemana = "Lunes";
    
    switch (diaSemana.toLowerCase()) {
      case "lunes":
      case "martes":
      case "miércoles":
      case "jueves":
      case "viernes":
        console.log("Día laborable");
        break;
      case "sábado":
      case "domingo":
        console.log("Fin de semana");
        break;
      default:
        console.log("Día no válido");
    }
    
    // Switch con expresiones
    let edad = 20;
    switch (true) {
      case edad < 13:
        console.log("Niño");
        break;
      case edad < 20:
        console.log("Adolescente");
        break;
      case edad < 30:
        console.log("Joven");
        break;
      default:
        console.log("Adulto");
    }`
        }
      ],
    
      bucles: [
        {
          title: "for clásico",
          code: `// Bucle for básico
    for (let i = 0; i < 5; i++) {
      console.log("Iteración:", i);
    }
    
    // For con paso personalizado
    for (let i = 0; i <= 10; i += 2) {
      console.log("Números pares:", i);
    }
    
    // For decreciente
    for (let i = 5; i > 0; i--) {
      console.log("Cuenta atrás:", i);
    }`
        },
        {
          title: "while y do-while",
          code: `// While
    let contador = 0;
    while (contador < 5) {
      console.log("While:", contador);
      contador++;
    }
    
    // Do-while
    let numero = 1;
    do {
      console.log("Do-while:", numero);
      numero *= 2;
    } while (numero < 10);
    
    // While con break
    let i = 0;
    while (true) {
      if (i >= 5) break;
      console.log("Iteración con break:", i);
      i++;
    }`
        },
        {
          title: "for...of y for...in",
          code: `// for...of para arrays
    const frutas = ["manzana", "pera", "plátano"];
    for (const fruta of frutas) {
      console.log("Fruta:", fruta);
    }
    
    // for...in para objetos
    const persona = {
      nombre: "Ana",
      edad: 25,
      ciudad: "Madrid"
    };
    for (const propiedad in persona) {
      console.log(\`\${propiedad}: \${persona[propiedad]}\`);
    }
    
    // for...of con strings
    const palabra = "Hola";
    for (const letra of palabra) {
      console.log("Letra:", letra);
    }`
        },
        {
          title: "Métodos de iteración de arrays",
          code: `const numeros = [1, 2, 3, 4, 5];
    
    // forEach
    numeros.forEach((numero, indice) => {
      console.log(\`Posición \${indice}: \${numero}\`);
    });
    
    // map
    const duplicados = numeros.map(n => n * 2);
    console.log("Duplicados:", duplicados);
    
    // filter
    const pares = numeros.filter(n => n % 2 === 0);
    console.log("Números pares:", pares);
    
    // reduce
    const suma = numeros.reduce((total, n) => total + n, 0);
    console.log("Suma total:", suma);`
        },
        {
          title: "Bucles anidados",
          code: `// Matriz 3x3
    for (let i = 0; i < 3; i++) {
      let fila = "";
      for (let j = 0; j < 3; j++) {
        fila += \`(\${i},\${j}) \`;
      }
      console.log(fila);
    }
    
    // Patrón de asteriscos
    for (let i = 1; i <= 5; i++) {
      let linea = "";
      for (let j = 0; j < i; j++) {
        linea += "*";
      }
      console.log(linea);
    }`
        }
      ],
  };
  
  export const exercises = {
    variables: [
      {
        title: "Ejercicio 1: Intercambio de variables",
        description: "Intercambia el valor de dos variables usando una variable temporal.",
        initialCode: `let a = 5;
  let b = 10;
  // Tu código aquí
  
  console.log(a); // Debería mostrar 10
  console.log(b); // Debería mostrar 5`,
        solution: `let a = 5;
  let b = 10;
  let temp = a;
  a = b;
  b = temp;
  console.log(a);
  console.log(b);`
      },
      {
        title: "Ejercicio 2: Constantes",
        description: "Crea un objeto con información personal usando const e intenta modificar sus propiedades.",
        initialCode: `const persona = {
    nombre: "Tu nombre",
    edad: 25
  };
  // Modifica la edad
  // Intenta reasignar persona`,
        solution: `const persona = {
    nombre: "Tu nombre",
    edad: 25
  };
  persona.edad = 26; // Esto funciona
  // persona = {}; // Esto daría error`
      }
    ],
    tipos: [
      {
        title: "Ejercicio 1: Manipulación de Strings",
        description: "Crea una función que reciba un nombre y devuelva un saludo personalizado.",
        initialCode: `function crearSaludo(nombre) {
    // Tu código aquí
  }
  
  console.log(crearSaludo("Ana")); // Debería mostrar "¡Hola Ana!"`,
        solution: `function crearSaludo(nombre) {
    return \`¡Hola \${nombre}!\`;
  }
  
  console.log(crearSaludo("Ana"));`
      }
    ],
    condicionales: [
        {
          title: "Ejercicio: Calificaciones",
          description: "Crea una función que convierta una puntuación numérica (0-100) en una calificación por letra (A, B, C, D, F).",
          initialCode: `function obtenerCalificacion(puntuacion) {
    // Tu código aquí
    // A: 90-100
    // B: 80-89
    // C: 70-79
    // D: 60-69
    // F: 0-59
  }
  
  console.log(obtenerCalificacion(95));  // Debería mostrar "A"
  console.log(obtenerCalificacion(82));  // Debería mostrar "B"
  console.log(obtenerCalificacion(45));  // Debería mostrar "F"`
        },
        {
          title: "Ejercicio: Validador de contraseña",
          description: "Crea una función que valide si una contraseña cumple con los requisitos: mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número.",
          initialCode: `function validarPassword(password) {
    // Tu código aquí
    // Retorna true si la contraseña es válida
    // Retorna false si no cumple los requisitos
  }
  
  console.log(validarPassword("Abc12345")); // true
  console.log(validarPassword("abc123")); // false
  console.log(validarPassword("ABC123")); // false`
        }
      ],
      bucles: [
        {
          title: "Ejercicio: Fibonacci",
          description: "Crea una función que genere los primeros n números de la secuencia de Fibonacci.",
          initialCode: `function fibonacci(n) {
    // Tu código aquí
    // Retorna un array con los primeros n números de Fibonacci
  }
  
  console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]`
        },
        {
          title: "Ejercicio: Patrón de números",
          description: "Crea un patrón de números que forme un triángulo.",
          initialCode: `function crearTriangulo(n) {
    // Tu código aquí
    // Para n = 4, debería mostrar:
    // 1
    // 12
    // 123
    // 1234
  }
  
  crearTriangulo(4);`
        },
        {
          title: "Ejercicio: Contador de vocales",
          description: "Crea una función que cuente el número de cada vocal en una cadena.",
          initialCode: `function contarVocales(texto) {
    // Tu código aquí
    // Retorna un objeto con el conteo de cada vocal
  }
  
  console.log(contarVocales("JavaScript es increíble"));
  // Debería mostrar algo como: { a: 2, e: 2, i: 2, o: 0, u: 0 }`
        }
      ]
    }