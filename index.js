let a = prompt("Enter the Value: ");
let b = prompt("Enter the Value2: ");
let c = prompt("Enter your Opr: ");

if (c === "+") {
  console.log(parseInt(a) + parseInt(b));
}

else if (c === "-") {
  console.log(parseInt(a) - parseInt(b));
}

else if (c === "*") {
  console.log(parseInt(a) * parseInt(b));
}
else if (c === "/") {
  console.log(parseInt(a) / parseInt(b));
}