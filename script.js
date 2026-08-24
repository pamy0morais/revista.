// =====================================================
// TELA DE ENTRADA
// =====================================================

const telaEntrada = document.getElementById("telaEntrada");
const botaoEntrar = document.getElementById("botaoEntrar");
const conteudo = document.getElementById("conteudo");

botaoEntrar.addEventListener("click", function () {

    telaEntrada.classList.add("oculta");

    setTimeout(function () {
        conteudo.classList.add("visivel");
    }, 500);

});


// =====================================================
// TROCA DE ABAS
// =====================================================

const botoesAbas = document.querySelectorAll(".aba-btn");
const conteudosAbas = document.querySelectorAll(".conteudo-aba");

botoesAbas.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const reinoSelecionado = botao.dataset.reino;


        // Remove aba ativa
        botoesAbas.forEach(function (btn) {
            btn.classList.remove("ativa");
        });


        // Ativa botão clicado
        botao.classList.add("ativa");


        // Esconde todos os conteúdos
        conteudosAbas.forEach(function (conteudoAba) {
            conteudoAba.classList.remove("visivel");
        });


        // Mostra o reino selecionado
        const reino = document.getElementById(reinoSelecionado);

        if (reino) {
            reino.classList.add("visivel");
        }

    });

});