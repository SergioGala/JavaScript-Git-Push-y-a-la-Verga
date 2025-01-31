
// content.js
export const sections = {
  variables: {
    title: "Variables",
    theory: (
      <div>
        <p>
          En JavaScript, las variables son contenedores para almacenar datos. Imagina que son como cajas 
          etiquetadas donde guardamos diferentes tipos de información que queremos usar más tarde.
        </p>
  
        <div style={{marginTop: '20px'}}>
          <h4>¿Para qué usamos variables?</h4>
          <ul>
            <li>Guardar información que necesitaremos más tarde (nombres, números, etc.)</li>
            <li>Mantener datos que pueden cambiar durante la ejecución del programa</li>
            <li>Hacer nuestro código más legible y mantenible</li>
          </ul>
        </div>
        
        <div style={{marginTop: '20px'}}>
          <h4>Formas de declarar variables:</h4>
          <ul>
            <li>
              <strong>let:</strong> Es la forma moderna de declarar variables que pueden cambiar su valor.
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`let edad = 25;
  edad = 26; // Podemos cambiar el valor
  let nombre = "Juan";
  nombre = "Ana"; // También podemos cambiar el valor`}
              </pre>
            </li>
            <li>
              <strong>const:</strong> Para valores que NO cambiarán (constantes).
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`const PI = 3.1416;
  // PI = 3.14; // Esto daría ERROR
  const DIAS_SEMANA = 7;
  // DIAS_SEMANA = 6; // Esto también daría ERROR`}
              </pre>
            </li>
            <li>
              <strong>var:</strong> La forma antigua (evitar usar).
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`var nombre = "Juan"; // ❌ No usar
  let nombre = "Juan";  // ✅ Usar esto en su lugar`}
              </pre>
            </li>
          </ul>
        </div>
  
        <div style={{backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
          <strong>Ejemplos prácticos:</strong>
          <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', marginTop: '10px'}}>
            {`// Ejemplo 1: Contador
  let contador = 0;
  contador = contador + 1;
  console.log(contador); // Muestra: 1
  
  // Ejemplo 2: Información de usuario
  const USUARIO = {
    nombre: "Ana",
    edad: 25
  };
  USUARIO.edad = 26; // ✅ Esto SÍ está permitido
  // USUARIO = {}; // ❌ Esto NO está permitido
  
  // Ejemplo 3: Lista de compras
  let listaCompras = ["manzanas"];
  listaCompras.push("peras"); // Añadimos un elemento`}
          </pre>
        </div>
  
        <div style={{backgroundColor: '#f8d7da', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
          <strong>Errores comunes:</strong>
          <ul>
            <li>Intentar usar una variable antes de declararla</li>
            <li>Tratar de cambiar el valor de una constante</li>
            <li>Confundir el alcance (scope) de las variables</li>
          </ul>
          <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', marginTop: '10px'}}>
            {`// ❌ Error: Usar antes de declarar
  console.log(numero); // Error
  let numero = 5;
  
  // ❌ Error: Cambiar una constante
  const PI = 3.14;
  PI = 3.14159; // Error
  
  // ❌ Error: Scope incorrecto
  if (true) {
    let nombre = "Juan";
  }
  console.log(nombre); // Error: nombre no existe aquí`}
          </pre>
        </div>
  
        <div style={{backgroundColor: '#d4edda', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
          <strong>Buenas prácticas:</strong>
          <ul>
            <li>Usa nombres descriptivos y significativos</li>
            <li>Usa camelCase para nombres de variables (ejemplo: nombreUsuario)</li>
            <li>Usa MAYÚSCULAS para constantes importantes (ejemplo: PI, MAX_INTENTOS)</li>
            <li>Declara las variables al principio de su scope</li>
            <li>Inicializa las variables cuando las declaras</li>
          </ul>
        </div>
  
        <div style={{marginTop: '20px'}}>
          <h4>¿Cuándo usar cada tipo?</h4>
          <ul>
            <li><strong>const:</strong> Para valores que no deben cambiar (configuraciones, valores matemáticos, etc.)</li>
            <li><strong>let:</strong> Para valores que cambiarán (contadores, nombres de usuario, etc.)</li>
            <li><strong>var:</strong> Evitar su uso en código moderno</li>
          </ul>
        </div>
      </div>
    )
  },
   dataTypes : {
    title: "Tipos de Datos",
    theory: (
      <div>
        <p>
          Los tipos de datos en JavaScript definen qué tipo de valores puede contener una variable. JavaScript 
          es un lenguaje dinámicamente tipado, lo que significa que una variable puede contener diferentes tipos de datos.
        </p>
  
        <div style={{marginTop: '20px'}}>
          <h4>¿Para qué necesitamos tipos de datos?</h4>
          <ul>
            <li>Representar diferentes tipos de información (números, texto, etc.)</li>
            <li>Realizar operaciones específicas según el tipo de dato</li>
            <li>Evitar errores al manipular datos</li>
            <li>Optimizar el uso de memoria en nuestras aplicaciones</li>
          </ul>
        </div>
  
        <div style={{marginTop: '20px'}}>
          <h4>Tipos de datos principales:</h4>
          <ul>
            <li>
              <strong>String (Texto):</strong>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`let nombre = "Juan";          // Comillas dobles
  let apellido = 'Pérez';       // Comillas simples
  let direccion = \`Calle 123\`; // Template literal`}
              </pre>
            </li>
            <li>
              <strong>Number (Números):</strong>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`let edad = 25;          // Entero
  let precio = 99.99;      // Decimal
  let temperatura = -5;    // Negativo
  let infinito = Infinity; // Valor especial`}
              </pre>
            </li>
            <li>
              <strong>Boolean (Verdadero/Falso):</strong>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`let esMayor = true;
  let tienePermiso = false;
  let existe = Boolean(1);     // true
  let noExiste = Boolean("");  // false`}
              </pre>
            </li>
            <li>
              <strong>Array (Listas):</strong>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`let frutas = ['manzana', 'pera', 'plátano'];
  let mixto = [1, "texto", true, [1, 2]];
  let matriz = [[1, 2], [3, 4]];`}
              </pre>
            </li>
            <li>
              <strong>Object (Objetos):</strong>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`let persona = {
    nombre: "Ana",
    edad: 25,
    direccion: {
      calle: "Principal",
      numero: 123
    }
  };`}
              </pre>
            </li>
            <li>
              <strong>Null y Undefined:</strong>
              <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
                {`let noDefinido;           // undefined
  let valorNulo = null;     // null
  let sinValor = undefined; // undefined explícito`}
              </pre>
            </li>
          </ul>
        </div>
  
        <div style={{backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
          <strong>Ejemplos prácticos:</strong>
          <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', marginTop: '10px'}}>
            {`// Ejemplo 1: Perfil de usuario
  let usuario = {
    nombre: "María",
    edad: 30,
    activo: true,
    hobbies: ["lectura", "música"],
    contacto: {
      email: "maria@email.com",
      telefono: null
    }
  };
  
  // Ejemplo 2: Carrito de compra
  let carrito = [
    { 
      producto: "laptop",
      precio: 999.99,
      disponible: true
    },
    { 
      producto: "mouse",
      precio: 29.99,
      disponible: false
    }
  ];
  
  // Ejemplo 3: Procesamiento de datos
  let datos = ["10", "20", "30"];
  let numeros = datos.map(num => Number(num));
  console.log(numeros);  // [10, 20, 30]`}
          </pre>
        </div>
  
        <div style={{backgroundColor: '#f8d7da', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
          <strong>Errores comunes:</strong>
          <ul>
            <li>Confundir tipos de datos al realizar operaciones</li>
            <li>No validar el tipo de dato antes de usarlo</li>
            <li>Comparar null y undefined incorrectamente</li>
          </ul>
          <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', marginTop: '10px'}}>
            {`// ❌ Error: Operaciones con tipos incorrectos
  let suma = "5" + 2;        // "52" (string)
  let resta = "10" - 5;      // 5 (number)
  
  // ❌ Error: Acceso a propiedades
  let texto = "hola";
  console.log(texto.toUpperCase()); // ✅ OK
  console.log(texto.push("!")); // ❌ Error
  
  // ❌ Error: Comparaciones
  if (null == undefined) {    // true
    console.log("Iguales");  // Usar === para comparación estricta
  }`}
          </pre>
        </div>
  
        <div style={{backgroundColor: '#d4edda', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
          <strong>Buenas prácticas:</strong>
          <ul>
            <li>Usa el operador typeof para verificar tipos de datos</li>
            <li>Convierte explícitamente entre tipos cuando sea necesario</li>
            <li>Inicializa variables con valores apropiados según su tipo</li>
            <li>Usa métodos específicos para cada tipo de dato</li>
            <li>Documenta los tipos esperados en tus funciones</li>
          </ul>
          <pre style={{backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', marginTop: '10px'}}>
            {`// ✅ Buenas prácticas
  // Verificar tipo
  if (typeof variable === "string") {
    console.log("Es un texto");
  }
  
  // Conversión explícita
  let numero = Number("123");
  let texto = String(456);
  
  // Inicialización apropiada
  let nombres = [];              // Array vacío
  let config = {};              // Objeto vacío
  let contador = 0;             // Número inicial
  let mensaje = "";             // String vacío`}
          </pre>
        </div>
  
        <div style={{marginTop: '20px'}}>
          <h4>Cuándo usar cada tipo:</h4>
          <ul>
            <li><strong>String:</strong> Para texto, nombres, identificadores</li>
            <li><strong>Number:</strong> Para cantidades, índices, cálculos</li>
            <li><strong>Boolean:</strong> Para condiciones, estados, flags</li>
            <li><strong>Array:</strong> Para colecciones ordenadas, listas</li>
            <li><strong>Object:</strong> Para estructuras de datos complejas</li>
            <li><strong>null:</strong> Para ausencia intencional de valor</li>
            <li><strong>undefined:</strong> Para variables sin asignar</li>
          </ul>
        </div>
      </div>
    )
  },


  operadores: {
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
if (edad < 18 && edad > 65) {  // Error de lógica
  // Correcto: if (edad < 18 || edad > 65)
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
    title: "Funciones",
    theory: (
      <div>
        <p>
          Las funciones son bloques de código reutilizables que podemos llamar cuando las necesitemos.
          Son fundamentales para escribir código limpio y mantenible.
        </p>

        <div style={{marginTop: "20px"}}>
          <h4>{"¿Para qué usamos funciones?"}</h4>
          <ul>
            <li>{"Organizar y reutilizar código"}</li>
            <li>{"Evitar repetición de código"}</li>
            <li>{"Hacer el código más mantenible"}</li>
            <li>{"Dividir problemas complejos en partes más pequeñas"}</li>
          </ul>
        </div>

        <div style={{marginTop: "20px"}}>
          <h4>{"Tipos de funciones:"}</h4>
          <ul>
            <li>
              <strong>{"Declaración de función:"}</strong>
              <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px"}}>
                {`function saludar(nombre) {
  return "Hola " + nombre;
}

// Uso
saludar("Ana");  // "Hola Ana"`}
              </pre>
            </li>
            <li>
              <strong>{"Expresión de función:"}</strong>
              <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px"}}>
                {`const sumar = function(a, b) {
  return a + b;
};

// Uso
sumar(5, 3);  // 8`}
              </pre>
            </li>
            <li>
              <strong>{"Función flecha:"}</strong>
              <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px"}}>
                {`const multiplicar = (a, b) => a * b;

// Uso
multiplicar(4, 2);  // 8`}
              </pre>
            </li>
          </ul>
        </div>

        <div style={{backgroundColor: "#fff3cd", padding: "15px", borderRadius: "8px", marginTop: "20px"}}>
          <strong>{"Ejemplos prácticos:"}</strong>
          <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px", marginTop: "10px"}}>
            {`// Ejemplo 1: Calculadora básica
const calcular = (operacion, a, b) => {
  switch(operacion) {
    case "suma": return a + b;
    case "resta": return a - b;
    case "multiplicacion": return a * b;
    case "division": return b !== 0 ? a / b : "Error";
  }
};

// Ejemplo 2: Procesador de texto
function procesarTexto(texto) {
  return {
    original: texto,
    mayusculas: texto.toUpperCase(),
    palabras: texto.split(" ").length,
    caracteres: texto.length
  };
}`}
          </pre>
        </div>

        <div style={{backgroundColor: "#f8d7da", padding: "15px", borderRadius: "8px", marginTop: "20px"}}>
          <strong>{"Errores comunes:"}</strong>
          <ul>
            <li>{"No retornar valores cuando es necesario"}</li>
            <li>{"Confundir el ámbito (scope) de this"}</li>
            <li>{"No validar parámetros de entrada"}</li>
          </ul>
          <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px", marginTop: "10px"}}>
            {`// ❌ Error: Olvidar return
function sumar(a, b) {
  a + b;  // No retorna nada
}

// ❌ Error: this en función flecha
const obj = {
  valor: 42,
  getFn: () => {
    return this.valor;  // this no está vinculado
  }
};

// ❌ Error: No validar parámetros
function dividir(a, b) {
  return a / b;  // ¿Qué pasa si b es 0?
}`}
          </pre>
        </div>

        <div style={{backgroundColor: "#d4edda", padding: "15px", borderRadius: "8px", marginTop: "20px"}}>
          <strong>{"Buenas prácticas:"}</strong>
          <ul>
            <li>{"Usar nombres descriptivos que indiquen lo que hace la función"}</li>
            <li>{"Cada función debe hacer una sola cosa (principio de responsabilidad única)"}</li>
            <li>{"Validar los parámetros de entrada"}</li>
            <li>{"Documentar funciones complejas"}</li>
            <li>{"Mantener las funciones pequeñas y enfocadas"}</li>
          </ul>
        </div>
      </div>
    ),
  },
    condicionales: {
      title: "Condicionales",
      theory: (
        <div>
          <p>
            Los condicionales nos permiten ejecutar diferentes bloques de código según se cumplan o no ciertas condiciones.
          </p>
  
          <div style={{marginTop: "20px"}}>
            <h4>{"¿Para qué usamos condicionales?"}</h4>
            <ul>
              <li>{"Tomar decisiones en nuestro código"}</li>
              <li>{"Controlar el flujo del programa"}</li>
              <li>{"Validar datos y condiciones"}</li>
              <li>{"Manejar diferentes casos y situaciones"}</li>
            </ul>
          </div>
  
          <div style={{marginTop: "20px"}}>
            <h4>{"Tipos de condicionales:"}</h4>
            <ul>
              <li>
                <strong>{"if-else:"}</strong>
                <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px"}}>
                  {`if (condicion) {
    // código si es verdadero
  } else {
    // código si es falso
  }`}
                </pre>
              </li>
              <li>
                <strong>{"else if:"}</strong>
                <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px"}}>
                  {`if (condicion1) {
    // código para condición 1
  } else if (condicion2) {
    // código para condición 2
  } else {
    // código por defecto
  }`}
                </pre>
              </li>
              <li>
                <strong>{"Operador ternario:"}</strong>
                <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px"}}>
                  {`const resultado = condicion ? valorSiVerdadero : valorSiFalso;`}
                </pre>
              </li>
              <li>
                <strong>{"switch:"}</strong>
                <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px"}}>
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
  
          <div style={{backgroundColor: "#fff3cd", padding: "15px", borderRadius: "8px", marginTop: "20px"}}>
            <strong>{"Ejemplos prácticos:"}</strong>
            <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px", marginTop: "10px"}}>
              {`// Sistema de calificaciones
  let nota = 85;
  
  if (nota >= 90) {
    console.log("Sobresaliente");
  } else if (nota >= 80) {
    console.log("Notable");
  } else if (nota >= 70) {
    console.log("Bien");
  } else {
    console.log("Necesita mejorar");
  }
  
  // Validación de edad con ternario
  let edad = 20;
  let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";`}
            </pre>
          </div>
  
          <div style={{backgroundColor: "#f8d7da", padding: "15px", borderRadius: "8px", marginTop: "20px"}}>
            <strong>{"Errores comunes:"}</strong>
            <ul>
              <li>{"Olvidar el break en switch"}</li>
              <li>{"Confundir = (asignación) con == o === (comparación)"}</li>
              <li>{"Anidar demasiados if-else"}</li>
            </ul>
            <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px", marginTop: "10px"}}>
              {`// ❌ Error: Asignación en vez de comparación
  if (variable = true) {  // Asigna true a variable
    // código
  }
  
  // ✅ Correcto
  if (variable === true) {
    // código
  }
  
  // ❌ Error: Switch sin break
  switch (valor) {
    case 1:
      console.log("uno");
    case 2:
      console.log("dos");  // Se ejecutará si valor es 1 o 2
  }`}
            </pre>
          </div>
  
          <div style={{backgroundColor: "#d4edda", padding: "15px", borderRadius: "8px", marginTop: "20px"}}>
            <strong>{"Buenas prácticas:"}</strong>
            <ul>
              <li>{"Usar === en lugar de == para comparaciones"}</li>
              <li>{"Mantener las condiciones simples y legibles"}</li>
              <li>{"Evitar anidar más de 2-3 niveles de if-else"}</li>
              <li>{"Usar switch cuando tengas múltiples casos específicos"}</li>
              <li>{"Considerar el operador ternario para casos simples"}</li>
            </ul>
          </div>
        </div>
      ),
  },
  bucles: {
    title: "Bucles e Iteración",
    theory: (
      <div>
        <p>{"Los bucles nos permiten ejecutar un bloque de código múltiples veces. Son fundamentales para trabajar con colecciones de datos y automatizar tareas repetitivas."}</p>

        <div style={{marginTop: "20px"}}>
          <h4>{"¿Para qué usamos bucles?"}</h4>
          <ul>
            <li>{"Repetir acciones un número específico de veces"}</li>
            <li>{"Procesar elementos de arrays u objetos"}</li>
            <li>{"Automatizar tareas repetitivas"}</li>
            <li>{"Iterar sobre estructuras de datos"}</li>
          </ul>
        </div>

        <div style={{marginTop: "20px"}}>
          <h4>{"Tipos de bucles:"}</h4>
          <ul>
            <li>
              <strong>{"for:"}</strong>
              <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px"}}>
                {`for (let i = 0; i < 5; i++) {
  console.log(i);  // Imprime 0, 1, 2, 3, 4
}`}
              </pre>
            </li>
            <li>
              <strong>{"while:"}</strong>
              <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px"}}>
                {`let contador = 0;
while (contador < 5) {
  console.log(contador);
  contador++;
}`}
              </pre>
            </li>
            <li>
              <strong>{"do...while:"}</strong>
              <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px"}}>
                {`let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);`}
              </pre>
            </li>
            <li>
              <strong>{"for...of:"}</strong>
              <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px"}}>
                {`const frutas = ["manzana", "pera", "plátano"];
for (const fruta of frutas) {
  console.log(fruta);
}`}
              </pre>
            </li>
          </ul>
        </div>

        <div style={{backgroundColor: "#fff3cd", padding: "15px", borderRadius: "8px", marginTop: "20px"}}>
          <strong>{"Ejemplos prácticos:"}</strong>
          <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px", marginTop: "10px"}}>
            {`// Ejemplo 1: Sumar números del 1 al 5
let suma = 0;
for (let i = 1; i <= 5; i++) {
  suma += i;
}
console.log(suma);  // 15

// Ejemplo 2: Procesar un array
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(numero => {
  console.log(numero * 2);  // 2, 4, 6, 8, 10
});

// Ejemplo 3: Buscar un elemento
const nombres = ["Ana", "Juan", "María"];
let encontrado = false;
let i = 0;

while (i < nombres.length && !encontrado) {
  if (nombres[i] === "Juan") {
    encontrado = true;
  }
  i++;
}`}
          </pre>
        </div>

        <div style={{backgroundColor: "#f8d7da", padding: "15px", borderRadius: "8px", marginTop: "20px"}}>
          <strong>{"Errores comunes:"}</strong>
          <ul>
            <li>{"Crear bucles infinitos"}</li>
            <li>{"Olvidar actualizar la variable de control"}</li>
            <li>{"Modificar el array mientras se itera"}</li>
          </ul>
          <pre style={{backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px", marginTop: "10px"}}>
            {`// ❌ Error: Bucle infinito
while (true) {
  console.log("Esto nunca termina");
}

// ❌ Error: Olvidar incremento
for (let i = 0; i < 5;) {
  console.log(i);  // Se repite infinitamente
}

// ❌ Error: Modificar array durante iteración
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  array.splice(i, 1);  // ¡No hacer esto!
}`}
          </pre>
        </div>

        <div style={{backgroundColor: "#d4edda", padding: "15px", borderRadius: "8px", marginTop: "20px"}}>
          <strong>{"Buenas prácticas:"}</strong>
          <ul>
            <li>{"Usar el tipo de bucle más apropiado para cada caso"}</li>
            <li>{"Mantener los bucles simples y con un propósito claro"}</li>
            <li>{"Evitar bucles anidados cuando sea posible"}</li>
            <li>{"Preferir métodos de array cuando sea apropiado"}</li>
            <li>{"Incluir siempre una condición de salida clara"}</li>
          </ul>
        </div>

        <div style={{marginTop: "20px"}}>
          <h4>{"Cuándo usar cada tipo:"}</h4>
          <ul>
            <li><strong>{"for:"}</strong>{" Cuando conoces el número exacto de iteraciones"}</li>
            <li><strong>{"while:"}</strong>{" Cuando la condición de salida no depende de un contador"}</li>
            <li><strong>{"do...while:"}</strong>{" Cuando necesitas ejecutar el código al menos una vez"}</li>
            <li><strong>{"for...of:"}</strong>{" Para iterar arrays u objetos iterables"}</li>
            <li><strong>{"forEach/map/filter:"}</strong>{" Para operaciones funcionales con arrays"}</li>
          </ul>
        </div>
      </div>
    ),
  }
};