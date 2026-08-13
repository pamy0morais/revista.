// ========================================
// OS SEIS REINOS DA SABEDORIA
// JavaScript
// ========================================


// ========================================
// TELA DE ENTRADA
// ========================================

const telaEntrada = document.getElementById("telaEntrada");
const conteudo = document.getElementById("conteudo");
const botaoEntrar = document.getElementById("botaoEntrar");


botaoEntrar.addEventListener("click", entrarNoSite);


function entrarNoSite() {

    telaEntrada.classList.add("oculta");

    conteudo.classList.add("visivel");

}


// ========================================
// SISTEMA DE ABAS
// ========================================

const botoesAbas = document.querySelectorAll(".aba-btn");
const conteudosAbas = document.querySelectorAll(".conteudo-aba");


botoesAbas.forEach((botao) => {

    botao.addEventListener("click", () => {

        const reinoSelecionado = botao.dataset.reino;


        // Remove a aba ativa de todos os botões

        botoesAbas.forEach((btn) => {
            btn.classList.remove("ativa");
        });


        // Ativa o botão clicado

        botao.classList.add("ativa");


        // Esconde todos os conteúdos

        conteudosAbas.forEach((conteudoAba) => {
            conteudoAba.classList.remove("visivel");
        });


        // Mostra o reino selecionado

        const reino = document.getElementById(reinoSelecionado);

        if (reino) {
            reino.classList.add("visivel");
        }

    });

});