function abs(){
    let nombre=document.getElementById('ng').value;
    let abs=Math.abs(nombre);
    document.getElementById("abs").textContent="le abs est :"+abs;
}