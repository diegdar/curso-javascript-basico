/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
    let animales = ["perro", "gato", "jirafa", "elefante", "hormiga"]
// 2. Añade dos más. Uno al principio y otro al final
    animales.unshift("hipopotamo")
        console.log(animales) //(6) ['hipopotamo', 'perro', 'gato', 'jirafa', 'elefante', 'hormiga']
    animales.push("aguila")
        console.log(animales) //(7) ['hipopotamo', 'perro', 'gato', 'jirafa', 'elefante', 'hormiga', 'aguila']
// 3. Elimina el que se encuentra en tercera posición
    animales.splice(2,1)
        console.log(animales)
// 4. Crea un set que almacene cinco libros
    let mySet = new Set(["Cien años de soledad", "Don Quijote", "La hojarasca", "El codigo Davinci", "La vuelta al mundo en 80 días"])
        console.log(mySet)
// 5. Añade dos más. Uno de ellos repetido
    mySet.add("Don Quijote")
    mySet.add("El niño del pijama de rayas")
        console.log(mySet)
// 6. Elimina uno concreto a tu elección
    mySet.delete("Don Quijote")
        console.log(mySet)
// 7. Crea un mapa que asocie el número del mes a su nombre
    let miMapa = new Map([
        [1, "enero"],
        [2, "febrero"],
        // [3, "marzo"],
        // [4, "abril"],
        // [5, "mayo"],
        // [6, "junio"],
        // [7, "julio"],
        //....
    ])
        console.log(miMapa)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
    console.log(miMapa.get(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
    const mesesVerano = ["junio", "julio", "agosto"]
    miMapa.set("verano", mesesVerano)
    console.log(miMapa)
    console.log(miMapa.get("verano"))
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
    let miArray = [1, "perro", true, 4.8, null]
    let miSet = new Set(miArray)
    let miMapa2 = new Map()
    miMapa2.set("elementos", Array.from(miSet))
    console.log(miArray)  // Array original
    console.log(miSet)    // Set convertido
    console.log(miMapa2)  // Map con los elementos