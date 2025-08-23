/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
    // for(let i = 1; i <= 20; i++){
    //     console.log(i)
    // }

    // let i = 1
    // while(i <= 20){
    //     console.log(i)
    //     i++
    // }
// 2. Crea un bucle que imprima los números del 20 al 1
    // for (let i = 20; i >= 1; i--){
    //     console.log(i)
    // }

    // let i = 20
    // while(i >= 1){
    //             console.log(i)
    //     i--
    // }
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
    // let sum = 0
    // for (let i = 1; i <= 100; i++) {
    //     sum += i        
    // }

    // console.log(sum)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
    // let i = 1
    // while(i <= 50){
    //     if (i % 2 == 0) {
    //         console.log(i)            
    //     }
    //     i++
    // }
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
    // let nombres = ["diego", "arturo", "mauricio", "ana"]

    // FOR OF
    // for (let nom of nombres) {
    //     console.log(nom)
    // }

    // FOR IN
    // for (const i in nombres) {
    //     console.log(nombres[i])
    // }

    // FOR EACH
    // nombres.forEach((nombre) => {
    //     console.log(nombre)
    // });
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
    // let texto = "arturo"
    // let vocales = ["a", "e", "i", "o", "u"]

    // let sum = 0
    // for (const letra of texto) {
    //     if(vocales.includes(letra)){
    //         sum++
    //     }
    // }

    // console.log(`hay ${sum} vocales`)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
    // let numeros = [2, 4, 3]

    // let multi = 1
    // for (const num of numeros) {
    //     multi *= num
    // }

    // console.log("El producto es:", multi);
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
    // let i = 0
    // let num = 5
    // while(i <= 10){
    //     let result = num * i
    //     console.log(`${num} x ${i} = ${result}`);

    //     i++
    // }
// 8. Usa un bucle para invertir una cadena de texto
    // let texto = "arturo"

    // for (let i = (texto.length - 1); i >= 0; i--) {
    //     console.log(texto[i])        
    // }
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
    // let fibonacci = [0, 1]; // Los dos primeros números

    // for (let i = 2; i < 10; i++) {
    //     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // Suma de los dos anteriores
    // }

    // console.log(fibonacci); // Muestra: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
    let arr1 = [2, 87, 9, 13]

    let arrResult = []    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > 10) {
            arrResult.push = arr1[i]            
        }        
    }

    console.log(arrResult)