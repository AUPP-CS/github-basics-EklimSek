function calculateAge() {
    // prompt year of birth
    const userYear = prompt("What is your birth year?: ");

    const date = new Date();
    const year = date.getFullYear();

    // alert user's age using Date object

    alert(`You are ${Number(year) - Number(userYear)} years old`)
}

function calculateBMI() {
    // prompt weight
    const weight = parseFloat((prompt("What is your weight?: ")))

    // prompt height
    const height = parseFloat(prompt("What is your height in m?: "))

    alert(`Your BMI is ${(weight / (height * height)).toFixed(2)}`)
}

