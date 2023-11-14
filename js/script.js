// const Pi=3.1415 Decidi no usar esta constante ya que existe una ya clasificada como "Math.PI"
let altura;
let base;
let radio;

console.log('El valor de la altura es -->', altura);
console.log('El valor de la base es -->', base);
console.log('El valor de la base es -->', base);

alert('Vamos a calcular el área de un triángulo y el área de un círculo. Para continuar presione en "Aceptar"');

altura=parseInt(prompt('Ingrese la altura del triángulo a calcular (en cm)'));
base=parseInt(prompt('Ingrese la base del triángulo a calcular (en cm)'));
radio=parseInt(prompt('Ingrese el radio del círculo a calcular (en cm)'));

//Aun sin usar "parseInt" el resultado de las operaciones salia correctamente

console.log('El valor de la altura es -->', altura);
console.log('El valor de la base es -->', base);
console.log('El valor del radio es -->', radio);

let areaTriangulo=(base * altura)/2;
let areaCirculo= Math.PI * Math.pow(radio, 2);

console.log('El area del triangulo es de -->', areaTriangulo);
console.log('El area del circulo es de -->', areaCirculo);

document.write ('El área del triangulo es de: ' + areaTriangulo + ' cm');
document.write ('<br> El área del circulo es de: ' + areaCirculo + ' cm');