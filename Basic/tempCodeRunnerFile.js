    let fibonacci = [0, 1]; // Los dos primeros números

    for (let i = 2; i < 10; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // Suma de los dos anteriores
    }

    console.log(fibonacci); // Muestra: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
