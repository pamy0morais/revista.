// ==========================================
// TELA DE ENTRADA
// ==========================================

const botaoEntrar = document.getElementById("botaoEntrar");
const telaEntrada = document.getElementById("telaEntrada");
const conteudo = document.getElementById("conteudo");

botaoEntrar.addEventListener("click", entrarNoSite);

function entrarNoSite() {

    telaEntrada.classList.add("oculta");

    conteudo.classList.add("visivel");

}


// ==========================================
// SISTEMA DE ABAS DOS SEIS REINOS
// ==========================================

const botoesAbas = document.querySelectorAll(".aba-btn");
const conteudosAbas = document.querySelectorAll(".conteudo-aba");


botoesAbas.forEach((botao) => {

    botao.addEventListener("click", () => {

        const reinoSelecionado =
            botao.getAttribute("data-reino");


        // Remove "ativa" de todos os botões

        botoesAbas.forEach((btn) => {
            btn.classList.remove("ativa");
        });


        // Ativa o botão clicado

        botao.classList.add("ativa");


        // Esconde todos os reinos

        conteudosAbas.forEach((reino) => {
            reino.classList.remove("visivel");
        });


        // Mostra o reino escolhido

        const reinoAtual =
            document.getElementById(reinoSelecionado);


        if (reinoAtual) {
            reinoAtual.classList.add("visivel");
        }

    });

});