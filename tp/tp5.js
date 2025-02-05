function calcul(){
    let n1=document.getElementById("n1").value;
    let n1abs=Math.abs(n1);
    let n2=document.getElementById("n2").value;
    let n2abs=Math.abs(n2);
    let res=n1abs+n2abs;
    document.getElementById("res").textContent=res;

}