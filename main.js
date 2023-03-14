/*1. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado"*/

let nota1 = parseFloat (prompt("ingrese las notas del estidiante del 0 al 5.0"))
let nota2 = parseFloat (prompt("ingrese las notas del estidiante del 0 al 5.0"))
let nota3 = parseFloat (prompt("ingrese las notas del estidiante del 0 al 5.0"))

if (nota1 > 3.9){
    console.log("felicitaciones esta becado");
}
else {console.log("estas de malas estudia mas");
}

if (nota2 > 3.9){
    console.log("felicitaciones esta becado");
}
    else{console.log("estas de malas estudia mas");
}

if (nota2 > 3.9){
    console.log("felicitaciones esta becado");
}
else{
    console.log("estas de malas estudia mas");
}

/*2. Dado un número indicar si es par o impar y si es mayor de 10.*/

let numero = 35;


if (numero % 2 === 0) {
    console.log(numero + (" ") + ("es par"));
  } else {
    console.log(numero + (" ") + ("es impar"));
  }
  
  if (numero > 10) {
    console.log(numero + (" ") + ("es mayor que 10"));
  } else {
    console.log(numero + (" ") + ("es menor o igual que 10"));
  }

 /* 3. Construir el algoritmo para determinar el voltaje de un
  circuito a partir de la resistencia y la intensidad de corriente.*/

let resistencia = (prompt("Ingrese la resistencia"));
let intCoerrriente = (prompt("Ingrese la corriente")); 

let voltaje = (resistencia * intCoerrriente);

console.log("El voltaje es de" + (" ") + voltaje);

/*4. Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad.*/

let mayor = 0;
let nombreM = "";

for (let i = 1; i <= 3; i++)
{
    let nombre = parseInt(prompt("Ingrese nombre de la persona" + (" ") + i));
    let edad = parseInt(prompt("ingrese edad de la persona" + (" ") + nombre));

    if (edad > mayor) {
        mayor = edad;
        nombreM = nombre;
    }

}
console.log("la persona mayor de edad es" + (" ") + nombreM);

/*5. Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo.*/

let numero1 = parseFloat(prompt("Ingrese el primer numero"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero"));

if (numero1 > numero2){

    let suma = numero1 + numero2;
    let diferente = numero1 - numero2;

    console.log("La suma de los números es:" + (" ") + suma);
    console.log("La diferencia de los números es:" + (" ") + diferente);
}
else {
    let producto = numero1 * numero2;
    let division = numero1 / numero2;

    console.log("El producto de los números es:" + (" ") + producto);
  console.log("La división de los números es:" + (" ") + division);
}

/*6. Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres.*/

let cantidad = prompt("Ingrese la cantidad de estudiantes");
let notaMayor = 0;
let notaMenor = 100;
let nombreNotaMayor = "";
let nombreNotaMenor = "";
let cantidadHombres = 0;
let cantidadMujeres = 0;

for (let i = 1; i <= cantidad; i++) {
  let nombre = prompt("Ingrese el nombre del estudiante " + i);
  let sexo = prompt("Ingrese el sexo del estudiante " + i + " ('M' para masculino o 'F' para femenino)");
  let nota = parseFloat(prompt("Ingrese la nota del estudiante " + i));

  if (nota > notaMayor) {
    notaMayor = nota;
    nombreNotaMayor = nombre;
  }

  if (nota < notaMenor) {
    notaMenor = nota;
    nombreNotaMenor = nombre;
  }

  if (sexo === "M") {
    cantidadHombres++;
  } else if (sexo === "F") {
    cantidadMujeres++;
  }
}

console.log("La nota mayor es " + notaMayor + ", obtenida por " + nombreNotaMayor);
console.log("La nota menor es " + notaMenor + ", obtenida por " + nombreNotaMenor);
console.log("Cantidad de hombres: " + cantidadHombres);
console.log("Cantidad de mujeres: " + cantidadMujeres);

/*7. Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura.*/

let nombre = prompt("Ingrese su Nombre:")
let precio = prompt("Ingrese el precio de larticulo a comprar:")
let cantArt = prompt("Ingrese la cantidad de articulos que desea comprar:")

console.log("Su nombre es" + (" ") + nombre + (" ") + "el precio de su articulo es de" + (" ") + precio + (" ") + "la cantidad de articulos que desea comprar es de" + (" ") + cantArt + (" ") + "el total a pagar es de " + (precio * cantArt) + (" ") + "pesos." )

/*8. Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo*/

let opcion = prompt("Ingrese '1' para calcular el perímetro de un cuadrado o '2' para calcular el área de un rectángulo");

if (opcion === "1") {
  let lado = parseFloat(prompt("Ingrese el valor del lado del cuadrado:"));
  let perimetro = 4 * lado;
  console.log("El perímetro del cuadrado es: " + perimetro);
} else if (opcion === "2") {
  let base = parseFloat(prompt("Ingrese el valor de la base del rectángulo:"));
  let altura = parseFloat(prompt("Ingrese el valor de la altura del rectángulo:"));
  let area = base * altura;
  console.log("El área del rectángulo es: " + area);
} else {
  console.log("Error");
}


