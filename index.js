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