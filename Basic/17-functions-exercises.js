/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
  // function sumar(a, b){
  //   return a + b
  // }

  // console.log(sumar(1, 9))
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
  let numeros= [4, 8, 2 ,7]

  // CON FOR  
  // function encontraMayor(nums){
  //   let mayor = nums[0]

  //   for (let i = 1; i < nums.length; i++) {
  //     if (nums[i] > mayor) {
  //       mayor = nums[i]
  //     }
  //   }  
  //   return mayor
  // }

  // CON FOR OF
  // function encontraMayor(nums){
  //   let mayor = nums[0]

  //   for (const num of mums) {
  //     if (num > mayor) {
  //       mayor = num
  //     }
  //     return mayor
  //   }
  // }

  // CON FOR EACH
  // function encontraMayor(nums){
  //   let mayor = nums[0]

  //   nums.forEach(num => {
  //     if(num > mayor){
  //       mayor = num
  //     }
  //   });
  //   return mayor
  // }

  // console.log(encontraMayor(numeros))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
  let nombre = "anais"

  const contarVocales = (texto) => {
    let vocales = ["a", "e", "i", "o", "u"]

    // Set para guardar solo las vocales distintas encontradas
    let vocalesEncontradas = new Set()
    for (const letra of texto.toLowerCase()) {
      if (vocales.includes(letra)) {
        vocalesEncontradas.add(letra)
      }
    }
    return vocalesEncontradas.size
  }

  console.log(contarVocales(nombre))
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado