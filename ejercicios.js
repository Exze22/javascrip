// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    console.log(10>=9)
// Tu código aquí...
}

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
   console.log(0==0)
// Tu código aquí...
}

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
   console.log(7>=8 && 7<=10)
// Tu código aquí...
}

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    //p1= costo del producto
    //desc= descuento
//dd = dinero en el bolsillo
    const p1 = 1500; // producto a comprar
const desc = 0.25; //descuento 

const dd = 1150; // dinero en cuenta

const pd = p1 * (1 - desc) //calculo del descuento

if (dd >= pd ){
    console.log("puedes comprarlo")
}else{
        console.error("no puedes comprarlo")
}

// Tu código aquí...

}

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let mensaje = "Hola, JAvaScrip"
console.log(mensaje)// Tu código aquí...
}

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    let suma = 2 + 3 
console.log(suma)
// Tu código aquí...
}

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    const IS_DISABLED = true
console.log(IS_DISABLED)
// Tu código aquí...
}

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    let capacidad = null
console.log(capacidad)
// Tu código aquí...
}

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    let dinero = undefined
console.log(dinero)
// Tu código aquí...
}

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
   let username = "PEdro"
console.log(typeof username)
// Tu código aquí...
}

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
   let dogId = "135";

if (typeof dogId === 'string') {
    console.log(` es una cadena de texto y su tipo es: ${typeof dogId}`);
} else {
    console.log(`no es una cadena de texto, su tipo es: ${typeof dogId}`);
}
// Tu código aquí...
}

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
   console.log("hola gente de desarrollo joven")
// Tu código aquí...
}

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    let edad = 30
console.log(edad, "años")
// Tu código aquí...
}

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
   let version = 2024
console.log("SU VERSION DE JAVASCRIP ES EL", version)
// Tu código aquí...
}

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};
