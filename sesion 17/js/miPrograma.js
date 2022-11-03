function compara(){
        var a = 2;
        var b = 2; 
        if(a == b){
            alert("a y b son iguales")
        }else{
            alert("a y b son diferentes")
        }
}
function resta(a,b){
    var res = a-b;
     document.write("<h2> La resta es " + res + "</h2>")
}
function suma(x,y){
    var sum = x+y;
    document.getElementById("sumar").innerHTML = "La suma es " +sum;
}
function escribir(){
    valor = document.getElementById("entrada").value;
    document.getElementById("contenido").innerHTML=" "+valor;
}
