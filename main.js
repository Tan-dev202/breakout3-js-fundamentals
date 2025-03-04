// Declare a variable called username and assign it a username 
let username = "Breakout3"
console.log(username);

// Check if person is eligible for senior citizen discount 
let age = 70
let isMember = true;
if (age >= 65 && isMember) {
console.log("Eligible for discount");
}

// Declare a variable city and check if falsy
let city = " "
if (!city) { 
console.log("City is not set");
}

// Check if the user’s age is between 18 and 30 or if they are a student 
let userAge = 25; 
let isStudent = false; 
if ((userAge >= 18 && userAge <= 30) || isStudent) {
console.log("Eligible for youth program");
}

// Declare a boolean variable isRaining and check if it is not raining 
let isRaining = false; 
if (!isRaining) {
console.log("Let's go outside!");
}

// Use a ternary expression to check temp
let temperature = 35;
console.log(temperature > 30 ? "Hot day" : "Comfortable day");

// Check if the user is logged in or has special guest access
let isLoggedIn = false; 
let guestAccess = true; 
if (isLoggedIn || guestAccess) {
console.log("Access granted");
}

// Check if score is a number 
let score = 100; 
if (typeof score === "number") { 
    console.log("Valid score"); 
} 
    else { 
    console.log("Invalid score"); 
} 

// Check if a person is either a VIP or has a ticket 
let hasTickets = false; 
let isVIP = true; 
if (hasTickets || isVIP) { 
console.log("Access granted"); 
} 

// Check if a person can drive
function canDrive(age, hasLicense) { 
    return age >= 18 && hasLicense; 
}
