// Print in <h1> Tag
document.getElementById("heading1").innerHTML = "This is my First Javascript Program";

//Addition 
let num1=500;
let num2=100;
let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;  
let mod = num1 % num2;
// document.write("Sum = " + sum);
document.write(typeof sum);
//For concatination we can use plus(+)
// But if you want use variable inside the string without using concatination then use  ` String :- ${variable}`
document.getElementById("add").innerHTML = "<h3> Addition :- " + sum + " </h3>";
document.getElementById("sub").innerHTML = `<h3> Subtraction :- ${sub} </h3>`;
document.getElementById("mul").innerHTML = `<h3> Multiplication :- ${mul} `;
document.getElementById("div").innerHTML = `<h3> Division :- ${div}`;
document.getElementById("mod").innerHTML = `<h3> Modulus(Division Reminder) :- ${mod}`;
