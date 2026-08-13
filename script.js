// ========================================
// TELA DE ENTRADA
// ========================================

const botaoEntrar = document.getElementById("botaoEntrar");

const telaEntrada = document.getElementById("telaEntrada");

const conteudo = document.getElementById("conteudo");


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


        // Remove a classe ativa dos botões

        botoesAbas.forEach((btn) => {

            btn.classList.remove("ativa");

        });


        // Ativa o botão escolhido

        botao.classList.add("ativa");


        // Esconde todos os reinos

        conteudosAbas.forEach((conteudoAba) => {

            conteudoAba.classList.remove("visivel");

        });


        // Mostra o reino escolhido

        const reino = document.getElementById(reinoSelecionado);


        if (reino) {

            reino.classList.add("visivel");

        }

    });

});