/* ===================================================== */
/* ENTRAR NO SITE */
/* ===================================================== */

function entrar() {

    const telaEntrada =
        document.getElementById('telaEntrada');

    const paginaConteudo =
        document.getElementById('paginaConteudo');

    telaEntrada.style.display = 'none';

    paginaConteudo.classList.add('ativo');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


/* ===================================================== */
/* VOLTAR PARA A TELA INICIAL */
/* ===================================================== */

function voltar() {

    const telaEntrada =
        document.getElementById('telaEntrada');

    const paginaConteudo =
        document.getElementById('paginaConteudo');

    paginaConteudo.classList.remove('ativo');

    telaEntrada.style.display = 'flex';

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


/* ===================================================== */
/* ABRIR ABAS */
/* ===================================================== */

function abrirAba(idAba, botao) {

    /* Esconde todas as abas */

    document
        .querySelectorAll('.conteudo-aba')
        .forEach(function (aba) {

            aba.classList.remove('visivel');

        });


    /* Remove o destaque de todos os botões */

    document
        .querySelectorAll('.aba-btn')
        .forEach(function (btn) {

            btn.classList.remove('ativa');

        });


    /* Mostra a aba selecionada */

    const abaSelecionada =
        document.getElementById(idAba);

    if (abaSelecionada) {

        abaSelecionada.classList.add('visivel');

    }


    /* Ativa o botão clicado */

    if (botao) {

        botao.classList.add('ativa');

    }


    /* Volta para o começo do conteúdo */

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}