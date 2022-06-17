// EX 1 
function somar() {
    var somarr = parseInt(document.querySelector("#putnumber").value)
    var somando = somarr += 1 
    document.querySelector("#putnumber").value = somando
}

function menos (){
    var menoss = parseInt(document.querySelector("#putnumber").value)
    var diminuindo = menoss -= 1 
    document.querySelector("#putnumber").value = diminuindo
}

// EX 2 

function mudando () {
    var valor1 = document.getElementById("put1").value;
    var valor2 = document.getElementById("put2").value;

    document.getElementById("put1").value= valor2 
    document.getElementById("put2").value= valor1 
}

// EX 3 

function valor (){
    var passageiros = document.getElementById("passageiros").value
    var periodo = document.getElementById("periodo").text
    
    document.getElementById("vf").innerHTML = passageiros * 200

    if ( passageiros>50 ) {
        document.getElementById("vf").innerHTML = passageiros * 80
        
    }

}

// ex 4 

function check(){
    var phone = document.querySelector("#numero").value;
    if(phone > 99){
        return false 
    }

    switch (phone) {

    }

}