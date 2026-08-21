// =====================================================
// TELA DE ENTRADA
// =====================================================

const telaEntrada =
    document.getElementById("telaEntrada");

const conteudo =
    document.getElementById("conteudo");

const botaoEntrar =
    document.getElementById("botaoEntrar");



if (botaoEntrar) {

    botaoEntrar.addEventListener(
        "click",
        entrarNoSite
    );

}



function entrarNoSite() {

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

}



// =====================================================
// SISTEMA DE ABAS
// =====================================================

const botoesAbas =
    document.querySelectorAll(".aba-btn");

const conteudosAbas =
    document.querySelectorAll(".conteudo-aba");



botoesAbas.forEach(botao => {


    botao.addEventListener(
        "click",
        () => {


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
                document.getElementById(
                    reinoSelecionado
                );



            // Mostra o reino
            if (reino) {

                reino.classList.add("visivel");

            }



            // Volta suavemente para o começo
            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

});



// =====================================================
// GARANTE QUE O PRÓLOGO COMECE VISÍVEL
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {


        const primeiroReino =
            document.getElementById("prologo");


        if (primeiroReino) {

            primeiroReino.classList.add("visivel");

        }


        if (conteudo) {

            conteudo.classList.add("visivel");

        }

    }
);



// =====================================================
// IMAGENS — ABRIR EM TAMANHO GRANDE
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {


        const imagens =
            document.querySelectorAll(".topico-img");



        imagens.forEach(imagem => {


            imagem.addEventListener(
                "click",
                () => {


                    // =================================
                    // PEGA A IMAGEM DO BACKGROUND
                    // =================================

                    const estilo =
                        window.getComputedStyle(
                            imagem
                        );


                    let imagemUrl =
                        estilo.backgroundImage;



                    // =================================
                    // VERIFICA SE EXISTE IMAGEM
                    // =================================

                    if (
                        !imagemUrl ||
                        imagemUrl === "none"
                    ) {

                        return;

                    }



                    // =================================
                    // REMOVE url(...)
                    // =================================

                    imagemUrl =
                        imagemUrl
                            .replace(/^url\(["']?/, "")
                            .replace(/["']?\)$/, "");



                    // =================================
                    // CRIA O FUNDO
                    // =================================

                    const fundo =
                        document.createElement(
                            "div"
                        );


                    fundo.className =
                        "imagem-ampliada";



                    // =================================
                    // BOTÃO FECHAR
                    // =================================

                    const fechar =
                        document.createElement(
                            "span"
                        );


                    fechar.className =
                        "fechar-imagem";


                    fechar.innerHTML =
                        "&times;";



                    // =================================
                    // CRIA A IMAGEM GRANDE
                    // =================================

                    const imagemGrande =
                        document.createElement(
                            "img"
                        );


                    imagemGrande.className =
                        "imagem-ampliada-conteudo";


                    imagemGrande.src =
                        imagemUrl;


                    imagemGrande.alt =
                        "Imagem ampliada";



                    // =================================
                    // COLOCA OS ELEMENTOS
                    // =================================

                    fundo.appendChild(
                        fechar
                    );


                    fundo.appendChild(
                        imagemGrande
                    );


                    document.body.appendChild(
                        fundo
                    );



                    // =================================
                    // ABRE A ANIMAÇÃO
                    // =================================

                    setTimeout(() => {

                        fundo.classList.add(
                            "aberta"
                        );

                    }, 10);



                    // =================================
                    // FECHAR
                    // =================================

                    fundo.addEventListener(
                        "click",
                        evento => {


                            if (
                                evento.target === fundo ||
                                evento.target === fechar
                            ) {


                                fundo.classList.remove(
                                    "aberta"
                                );


                                setTimeout(() => {

                                    fundo.remove();

                                }, 300);

                            }

                        }
                    );


                }
            );

        }


    }
);



// =====================================================
// FECHAR IMAGEM COM ESC
// =====================================================

document.addEventListener(
    "keydown",
    evento => {


        if (
            evento.key === "Escape"
        ) {


            const imagemAberta =
                document.querySelector(
                    ".imagem-ampliada.aberta"
                );


            if (imagemAberta) {


                imagemAberta.classList.remove(
                    "aberta"
                );


                setTimeout(() => {

                    imagemAberta.remove();

                }, 300);

            }

        }

    }
);