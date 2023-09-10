//simple way of calculating hypotenuse
      /* let a;
         let b;
         let c;
         a = window.prompt("Enter side a:");
         a = Number(a);
         b = window.prompt("Enter side b:");
         b = Number(b);
         c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
         console.log("The hypotenuse is ", c); */

//complex way of calculating hypotenuse of a triangle
    let a;
    let b;
    let c;
     document.getElementById("submitButton").onclick = function(){
        a = document.getElementById("aTextbox").value;
        a = Number(a);
        b = document.getElementById("bTextbox").value;
        b = Number(b);
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        c = c.toLocaleString(undefined, {style: "unit", unit: "meter"});//toLocaleString statement
        document.getElementById("cLabel").innerHTML = "Hypotenuse is: " + c;
     }

//calculating circumference
     let radius;
     let circumference;
     document.getElementById("circCalc").onclick = function(){
      radius = document.getElementById("radiusTextbox").value;
      radius = Number(radius);
      circumference = Math.round(Math.PI * radius);
      document.getElementById("circumfAns").innerHTML = "Circumference is: " + circumference;
     }

//counter program
let count = 0;
document.getElementById("decreaseBtn").onclick = function(){
   if (count>0){
   document.getElementById("countLabel").innerHTML = count-=1;
}else{
   document.getElementById("countLabel").innerHTML = count;
}}
document.getElementById("reset").onclick = function(){
   document.getElementById("countLabel").innerHTML = count=0;
}
document.getElementById("increaseBtn").onclick = function(){
   document.getElementById("countLabel").innerHTML = count+=1;
}
document.getElementById("submitBtn").onclick = function(){
   let name = window.prompt("What is your name?");
   count = window.alert("Congratulations " + name + "! You are " + count + " years old!");
}

//Random number generator
let x;
let y;
let z;
document.getElementById("rollButton").onclick = function () {
   x = Math.floor(Math.random() * 6) + 1;
   y = Math.floor(Math.random() * 6) + 1;
   z = Math.floor(Math.random() * 6) + 1;
   x = document.getElementById("xLabel").innerHTML = "1st dice:" + x;
   y = document.getElementById("yLabel").innerHTML = "2nd dice:" + y;
   z = document.getElementById("zLabel").innerHTML = "3rd dice:" + z;
}

//nested loop
document.getElementById("myRect").onclick = function () {
   let symbol = window.prompt("Enter symbol to use")
   let rows = window.prompt("Enter number of rows");
   let columns = window.prompt("Enter number of columns");
   for(i = 1;i<=rows;i+=1){
      for(j = 1;j<=columns;j+=1){
         document.getElementById("myRectangle").innerHTML += symbol;
      }
      document.getElementById("myRectangle").innerHTML += "<br>";
   }
}

//guessing game
const answer = Math.floor(Math.random() * 100 + 1);
let guesses = 0;
document.getElementById("submitButn").onclick = function(){
   let guess = document.getElementById("gameGuess").value
   guesses+=1;
   if (guess == answer) {
      alert(`${guess} is the correct number. It took you ${guesses} guesses`);
      if (guesses < 5) {
         document.getElementById("genius").innerHTML = "You are a guessing genius!😎"
      }else{
         document.getElementById("genius").innerHTML = "You tried💔! Retry to be a guessing genius?"
      }
   }
   else if (guess < answer) {
      alert("Guess higher!");
   }
   else {
      alert("Guess lower!");
   }
}

//converting temperature
document.getElementById("btnsub").onclick = function(){
   let temp;
   if (document.getElementById("celsiusTemp").checked) {
      temp = document.getElementById("tempReading").value;
      temp = Number(temp);
      temp = toCelsius(temp);
      temp = document.getElementById("convTemp").innerHTML = temp + "°C"
   }
   else if(document.getElementById("fahrenheitTemp").checked){
      temp = document.getElementById("tempReading").value;
      temp = Number(temp);
      temp = toFahrenheit(temp);
      temp = document.getElementById("convTemp").innerHTML = temp + "°F"
   }
   else{
      document.getElementById("convTemp").innerHTML = "Select a unit!";
   }
}
function toCelsius(temp){
   return temp = (temp - 32) * (5/9);
}
function toFahrenheit(temp){
   return temp = (temp * (9/5)) + 32;
}