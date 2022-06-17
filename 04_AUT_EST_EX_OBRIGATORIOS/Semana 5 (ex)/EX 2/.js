

function nota() {
    var numero = parseInt(document.querySelector("#tabela").value);
    console.log(numero)

    var nota1 = parseInt(numero / 100)
    var nota2 = parseInt (numero / 50)
    var nota3 = parseInt(numero/20)  
    var nota4 = parseInt(numero/10)  
    var nota5 = parseInt(numero/5) 
    var nota6 =  parseInt(numero/2)
    var nota7 =  parseInt(numero/1)

document.querySelector("#nota1").innerHTML = nota1 + " notas de 100 ";
document.querySelector("#nota2").innerHTML = nota2 + " notas de 50 ";
document.querySelector("#nota3").innerHTML = nota3 + "notas de 20"; 
document.querySelector("#nota4").innerHTML = nota4 +  "notas de 10";
document.querySelector("#nota5").innerHTML = nota5 +  "notas de 5";
document.querySelector("#nota6").innerHTML = nota6 +  "notas de 2";
document.querySelector("#nota7").innerHTML = nota7 +  "notas de 1";

}

