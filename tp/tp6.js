function calcul(){
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;
    switch (document.getElementById("sc").value){
        case "+":
           let res1= n1+n2; 
            document.getElementById("res").textContent=res1;
            break;
        case "x":
            let res2= n1*n2;        
            document.getElementById("res").textContent=res2;
            break;
        case "/":
            let res3= n2!==0 ? n1/n2:"erreur";
            document.getElementById("res").textContent=res3;
            break;
        case "-":
            let res4= n1-n2;
            document.getElementById("res").textContent=res4;
            break;

    
    }
   

}