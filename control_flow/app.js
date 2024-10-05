// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> if condition <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const isUserLoggedIn = true
if (isUserLoggedIn === true) {
    console.log(`User was LoggedIn this Page`)
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> else <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const todayTemperature = 28
if (todayTemperature < 30) {
    console.log(`less then ${todayTemperature}`)
} else {
    console.log(`Greater then ${todayTemperature}`)
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> else if <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let userAge = +prompt(`Enter your `)
if (userAge < 18) {
    console.log(`User is Minor`)
} else if (userAge >= 18 && userAge <= 60) {
    console.log(`User is Adult`)
} else {
    console.log(`User is Senior`)
}
