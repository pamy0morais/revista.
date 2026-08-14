// ==========================================
// TELA DE ENTRADA
// ==========================================

const telaEntrada = document.getElementById("telaEntrada");
const conteudo = document.getElementById("conteudo");
const botaoEntrar = document.getElementById("botaoEntrar");

botaoEntrar.addEventListener("click", entrarNoSite);

function entrarNoSite() {

    telaEntrada.classList.add("oculta");

    conteudo.classList.add("visivel");

    // Depois da animação, remove a tela de entrada
    setTimeout(() => {
        telaEntrada.style.display = "none";
    }, 1600);
}


// ==========================================
// SISTEMA DE ABAS
// ==========================================

const botoesAbas = document.querySelectorAll(".aba-btn");
const conteudosAbas = document.querySelectorAll(".conteudo-aba");

botoesAbas.forEach(botao => {

    botao.addEventListener("click", () => {

        const reinoSelecionado = botao.dataset.reino;


        // Remove a aba ativa de todos
        botoesAbas.forEach(item => {
            item.classList.remove("ativa");
        });


        // Ativa o botão clicado
        botao.classList.add("ativa");


        // Esconde todos os reinos
        conteudosAbas.forEach(conteudoAba => {
            conteudoAba.classList.remove("visivel");
        });


        // Mostra o reino selecionado
        const reino = document.getElementById(reinoSelecionado);

        if (reino) {
            reino.classList.add("visivel");
        }

    });

});


// ==========================================
// VOLTAR PARA O TOPO AO TROCAR DE REINO
// ==========================================

botoesAbas.forEach(botao => {

    botao.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});