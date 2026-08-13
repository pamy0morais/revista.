const botaoEntrar = document.getElementById("botaoEntrar");
const telaEntrada = document.getElementById("telaEntrada");
const conteudo = document.getElementById("conteudo");

botaoEntrar.addEventListener("click", entrarNoSite);

function entrarNoSite() {
    telaEntrada.classList.add("oculta");
    conteudo.classList.add("visivel");
}

const botoesAbas = document.querySelectorAll(".aba-btn");
const conteudosAbas = document.querySelectorAll(".conteudo-aba");

botoesAbas.forEach((botao) => {

    botao.addEventListener("click", () => {

        const reinoSelecionado =
            botao.getAttribute("data-reino");

        botoesAbas.forEach((btn) => {
            btn.classList.remove("ativa");
        });

        botao.classList.add("ativa");

        conteudosAbas.forEach((reino) => {
            reino.classList.remove("visivel");
        });

        const reinoAtual =
            document.getElementById(reinoSelecionado);

        if (reinoAtual) {
            reinoAtual.classList.add("visivel");
        }

    });

});