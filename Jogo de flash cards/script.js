function exibirResposta(botao) {
    const cartao = botao.parentElement;

    cartao.querySelector(".pergunta").hidden = true;
    cartao.querySelector(".resposta").hidden = false;
}

function exibirPergunta(botao) {
    const cartao = botao.parentElement;

    cartao.querySelector(".pergunta").hidden = false;
    cartao.querySelector(".resposta").hidden = true;
}