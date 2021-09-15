var numeroSecreto = parseInt(Math.random() * 11);
var index = 1;
const limite = 5;
function Chutar() {
    var mensagem;
    var h2Element = document.getElementById("resultado");
    if(index <= limite) {
        var chute = parseInt(document.getElementById("valor").value);
        console.log(chute);

        mensagem = `Tentativa ${index} de ${limite}<br>`;
        if (chute == numeroSecreto) {
            mensagem += "Acertou";
            index++;
        }
        else if (chute > 10 || chute < 0) {
            mensagem += "Você deve digitar um número de 0 a 10";
        }
        else {
            mensagem += "Errou, ";
            if (chute > numeroSecreto) {
                mensagem += "um pouco menos";
            }
            else {
                mensagem += "um pouco mais";
            }
            index++;
        }
    }
    else {
        mensagem = "Fim de jogo! Recarregue a página";
    }
    h2Element.innerHTML = mensagem;
}