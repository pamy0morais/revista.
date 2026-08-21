// =====================================================
// TELA DE ENTRADA
// =====================================================

const telaEntrada = document.getElementById("telaEntrada");
const conteudo = document.getElementById("conteudo");
const botaoEntrar = document.getElementById("botaoEntrar");


if (botaoEntrar) {

    botaoEntrar.addEventListener("click", entrarNoSite);

}


function entrarNoSite() {

    telaEntrada.classList.add("oculta");

    conteudo.classList.add("visivel");

    setTimeout(() => {

        telaEntrada.style.display = "none";

    }, 1600);

}


// =====================================================
// SISTEMA DE ABAS
// =====================================================

const botoesAbas =
    document.querySelectorAll(".aba-btn");

const conteudosAbas =
    document.querySelectorAll(".conteudo-aba");


botoesAbas.forEach(botao => {

    botao.addEventListener("click", () => {

        const reinoSelecionado =
            botao.dataset.reino;


        // Remove a classe ativa
        botoesAbas.forEach(item => {

            item.classList.remove("ativa");

        });


        // Ativa o botão escolhido
        botao.classList.add("ativa");


        // Esconde todos os conteúdos
        conteudosAbas.forEach(conteudoAba => {

            conteudoAba.classList.remove("visivel");

        });


        // Encontra o reino correspondente
        const reino =
            document.getElementById(reinoSelecionado);


        // Mostra o reino
        if (reino) {

            reino.classList.add("visivel");

        }


        // Volta suavemente para o começo
        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});


// =====================================================
// GARANTE QUE O PRÓLOGO COMECE VISÍVEL
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    const primeiroReino =
        document.getElementById("prologo");

    if (primeiroReino) {

        primeiroReino.classList.add("visivel");

    }

});