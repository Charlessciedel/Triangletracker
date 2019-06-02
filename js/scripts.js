function triangleTracker() {
    var Sidex = parseInt(document.getElementById("Side x").value)
    var Sidey = parseInt(document.getElementById("Side y").value);
    var Sidez = parseInt(document.getElementById("Side z").value);

    if (isNaN(Sidex)|| isNaN(Sidey)|| isNaN(Sidez)){
        alert("please in put a number");
    }
    else if(Sidex < 1 || Sidey < 1 || Sidez < 1){
        alert ("invalid entry");
    }

    else if (Sidex === Sidey && Sidey === Sidez && Sidez === Sidex) {
        alert("An Equilateral Triangle");
      }
      else if (Sidex === Sidey || Sidex=== Sidez || Sidey === Sidez ) {
        alert("An Isosceles Triangle");
      }
      else if (((Sidex+lengthOfSidey) <= (Sidez)) || ((Sidex+Sidez) <= (Sidey)) || ((Sidey+Sidez)<= (Sidex))) {
        alert("Not a Triangle");
      }
      else  {
        alert("A Scalene Triangle");
      }
     }