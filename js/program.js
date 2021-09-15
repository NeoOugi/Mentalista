var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    // tipo Submit
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);

    var mensagem;
    if (chute == numeroSecreto) {
        mensagem = "Acertou";
    }
    else if (chute > 10 || chute < 0) {
        mensagem = "Você deve digitar um número de 0 a 10";
    }
    else {
        mensagem = "Errou, ";
        if (chute > numeroSecreto) {
            mensagem += "um pouco menos";
        }
        else {
            mensagem += "um pouco mais";
        }
    }
    console.log(mensagem);
    var h2Element = document.getElementById("resultado");
    h2Element.innerHTML = mensagem;
}