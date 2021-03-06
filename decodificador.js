function codificaGeral() {
    var baseSelecionada = document.querySelector("#selecionar").selectedIndex;
    var resultado = document.getElementById("retorno");
    if (baseSelecionada == 0) {
        var mensagem = document.getElementById("texto").value;
        if (document.getElementById("codificar").checked) {
            resultado.innerHTML = btoa(mensagem);
        }
        else {
            resultado.innerHTML = atob(mensagem);
        }
    }


    else {
        var mensagem = document.getElementById("texto").value.toLowerCase();
        var resultado = document.getElementById("retorno");
        var chave = parseInt(document.getElementById("incremento").value);
        if (document.getElementById("codificar").checked) {
            resultado.innerHTML = codificaCifra(mensagem, chave);
        }
        else {
            resultado.innerHTML = decodificaCifra(mensagem, chave);
        }

    }
}

// function mostrarIncr (){
//     var baseSelecionada = document.querySelector("#selecionar").selectedIndex;
//     if (baseSelecionada == 1){
//         var incremento = document.querySelector(".containerIncremento");
//         incremento.style.display = "flex"
//         incremento.style.flexDirection = "column"
//         incremento.style.alignItems = "center"
//     }
//     else {
//         var incremento = document.querySelector(".containerIncremento");
//         incremento.style.display = "none"

//     }
// }

function codificaCifra(string, chave) {
    var result = [];
    var lista = string.split("");
    for (var i = 0; i < lista.length; i++) {
        var codigo = lista[i].charCodeAt();
        var resultado = ((codigo - 97 + chave) % 26) + 97;
        result.push(String.fromCharCode(resultado));
    }
    return result.join("");
}

function decodificaCifra(string, chave) {
    var result = [];
    var lista = string.split("");
    for (var i = 0; i < lista.length; i++) {
        var codigo = lista[i].charCodeAt();

        if ((codigo - 97 - chave) < 0) var resultado = ((codigo - 97 - chave + 26) % 26) + 97;
        else var resultado = ((codigo - 97 - chave) % 26) + 97;

        result.push(String.fromCharCode(resultado));
    }
    return result.join("");
}

