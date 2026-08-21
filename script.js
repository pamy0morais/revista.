// =====================================================
// QUANDO A PÁGINA TERMINAR DE CARREGAR
// =====================================================

document.addEventListener("DOMContentLoaded", () => {


    // =================================================
    // TELA DE ENTRADA
    // =================================================

    const telaEntrada =
        document.getElementById("telaEntrada");

    const conteudo =
        document.getElementById("conteudo");

    const botaoEntrar =
        document.getElementById("botaoEntrar");


    // =================================================
    // BOTÃO ENTRAR
    // =================================================

    if (botaoEntrar) {

        botaoEntrar.addEventListener("click", () => {

            if (telaEntrada) {

                telaEntrada.classList.add("oculta");

            }

            if (conteudo) {

                conteudo.classList.add("visivel");

            }

            setTimeout(() => {

                if (telaEntrada) {

                    telaEntrada.style.display = "none";

                }

            }, 1600);

        });

    }


    // =================================================
    // SISTEMA DE ABAS
    // =================================================

    const botoesAbas =
        document.querySelectorAll(".aba-btn");

    const conteudosAbas =
        document.querySelectorAll(".conteudo-aba");


    botoesAbas.forEach((botao) => {

        botao.addEventListener("click", () => {


            // Pega o reino escolhido

            const reinoSelecionado =
                botao.getAttribute("data-reino");


            // Remove "ativa" de todos os botões

            botoesAbas.forEach((item) => {

                item.classList.remove("ativa");

            });


            // Ativa o botão clicado

            botao.classList.add("ativa");


            // Esconde todos os reinos

            conteudosAbas.forEach((conteudoAba) => {

                conteudoAba.classList.remove("visivel");

            });


            // Procura o reino

            const reino =
                document.getElementById(reinoSelecionado);


            // Mostra o reino escolhido

            if (reino) {

                reino.classList.add("visivel");

            }


            // Volta para o começo

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    });


    // =================================================
    // Garante que o PRÓLOGO comece visível
    // =================================================

    const primeiroReino =
        document.getElementById("prologo");


    if (primeiroReino) {

        primeiroReino.classList.add("visivel");

    }


    // =================================================
    // SISTEMA DE IMAGENS AMPLIADAS
    // =================================================

    const imagens =
        document.querySelectorAll(".topico-img");


    // Cria a janela da imagem

    const janelaImagem =
        document.createElement("div");

    janelaImagem.className =
        "imagem-ampliada";


    // Cria botão X

    const botaoFechar =
        document.createElement("div");

    botaoFechar.className =
        "fechar-imagem";

    botaoFechar.innerHTML =
        "&times;";


    // Cria imagem grande

    const imagemGrande =
        document.createElement("img");


    // Coloca tudo na janela

    janelaImagem.appendChild(botaoFechar);

    janelaImagem.appendChild(imagemGrande);


    // Coloca a janela no site

    document.body.appendChild(janelaImagem);


    // =================================================
    // CLICAR NA IMAGEM
    // =================================================

    imagens.forEach((imagem) => {

        imagem.addEventListener("click", () => {


            // Pega o endereço da imagem do CSS

            const fundo =
                imagem.style.backgroundImage;


            if (!fundo) {

                return;

            }


            // Extrai o endereço da imagem

            const url =
                fundo
                    .replace(/^url\(["']?/, "")
                    .replace(/["']?\)$/, "");


            // Coloca na imagem grande

            imagemGrande.src = url;


            // Abre

            janelaImagem.classList.add("aberta");

            document.body.style.overflow =
                "hidden";

        });

    });


    // =================================================
    // FECHAR PELO X
    // =================================================

    botaoFechar.addEventListener("click", (evento) => {

        evento.stopPropagation();

        fecharImagem();

    });


    // =================================================
    // FECHAR CLICANDO FORA DA IMAGEM
    // =================================================

    janelaImagem.addEventListener("click", (evento) => {

        if (evento.target === janelaImagem) {

            fecharImagem();

        }

    });


    // =================================================
    // FECHAR COM ESC
    // =================================================

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {

            fecharImagem();

        }

    });


    // =================================================
    // FUNÇÃO FECHAR IMAGEM
    // =================================================

    function fecharImagem() {

        janelaImagem.classList.remove("aberta");

        document.body.style.overflow =
            "";

        setTimeout(() => {

            imagemGrande.src = "";

        }, 300);

    }

});