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
        document.getElementById("cLabel").innerHTML = "Hypotenuse is: " + c;
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
   count = window.alert("Congratulations! You are " + count + " years old!");
}