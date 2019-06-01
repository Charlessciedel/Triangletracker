function triangleTracker() {
    var lengthOfSidex = parseInt(document.getElementById("Side x").value)
    var lengthOfSidey = parseInt(document.getElementById("Side y").value);
    var lengthOfSidez = parseInt(document.getElementById("Side z").value);

    if (isNaN(lengthOfSidex)|| isNaN(lengthOfSidey)|| isNaN(lengthOfSidez)){
        alert("please in put a number");
    }
    else if(lengthOfSidex < 1 || lengthOfSidey < 1 || lengthOfSidez < 1){
        alert ("invalid entry");
    }