// Declare a variable called username and assign it your preferred username (as a string). Then, log it to the console.
let username = "Breakout3"
console.log(username);

// Write a condition that checks if a person is eligible for a senior citizen discount (age greater than or equal to 65) and is a registered member (boolean isMember set to true). Log "Eligible for discount" if both conditions are true.
let age = 70
let isMember = true;
if (age >= 65 && isMember) {
console.log("Eligible for discount");
}

// Declare a variable city and set it to an empty string (""). Write an if condition to check if the variable is falsy and log "City is not set" if the value is falsy.
let city = " "
if (!city) { 
console.log("City is not set");
}

// Create an if statement to check if the user’s age is between 18 and 30 or if they are a student (boolean variable isStudent is true). Log "Eligible for youth program" if any condition is true.
let userAge = 25; 
let isStudent = false; 
if ((userAge >= 18 && userAge <= 30) || isStudent) {
console.log("Eligible for youth program");
}

// Declare a boolean variable isRaining and set it to false. Write an if statement that checks if it is not raining and log "Let's go outside!" if the condition is true.
let isRaining = false; 
if (!isRaining) {
console.log("Let's go outside!");
}

// Write a ternary expression to check if a variable temperature is greater than 30. If it is, log "Hot day", otherwise log "Comfortable day".
let temperature = 35;
console.log(temperature > 30 ? "Hot day" : "Comfortable day");

// Declare a variable isLoggedIn and set it to false. Use the OR (||) operator to check if the user is either logged in or has special guest access (guestAccess set to true). Log "Access granted" if either condition is true.
let isLoggedIn = false; 
let guestAccess = true; 
if (isLoggedIn || guestAccess) {
console.log("Access granted");
}

// Declare a variable score and assign it a value of 100. Use an if condition to check if score is a number. If true, log "Valid score", otherwise log "Invalid score".
let score = 100; 
if (typeof score === "number") { 
    console.log("Valid score");
    } 
    else { 
    console.log("Invalid score"); 
} 

// Declare two variables: hasTickets (boolean) and isVIP (boolean). Write an if condition that checks if a person is either a VIP or has a ticket. Log "Access granted" if either condition is true.
let hasTickets = false; 
let isVIP = true; 
if (hasTickets || isVIP) { 
console.log("Access granted"); 
} 

// Write a function canDrive(age, hasLicense) that takes two arguments: age and hasLicense. The function should return true if age is 18 or older and the person has a license. Otherwise, return false.
function canDrive(age, hasLicense) { 
    return age >= 18 && hasLicense; 
}
