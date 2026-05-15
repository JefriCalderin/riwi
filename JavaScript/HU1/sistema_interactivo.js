// 1. Solicitar el nombre del usuario
let userName = prompt("Ingresa tu nombre:");

// 2. Solicitar la edad del usuario
let userAge = prompt("Ingresa tu edad:");


// 3. Convertir la edad a número
let ageNumber = Number(userAge);



// 4. Validar si la edad ingresada es válida
if (isNaN(ageNumber)) {
    // Mostrar mensaje de error si no es un número
    console.error("Error: Por favor, ingresa una edad válida en números.");
} else {

    
    // 5. Mostrar mensajes según la edad
    if (ageNumber < 18) {

        // Mensaje para menores de edad
        alert(
            "Hola " + userName +
            ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!"
        );

        console.log(
            "Hola " + userName +
            ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!"
        );

    } else {

        // Mensaje para mayores de edad
        alert(
            "Hola " + userName +
            ", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!"
        );

        console.log(
            "Hola " + userName +
            ", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!"
        );

    }
}