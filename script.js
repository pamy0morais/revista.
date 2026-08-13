// ==========================================
// REVISTA FILOSÓFICA
// JavaScript principal
// ==========================================


// ------------------------------
// Rolagem suave dos links
// ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            event.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// ------------------------------
// Animação dos artigos
// ------------------------------

const artigos = document.querySelectorAll(".coluna-autor");

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("aparecer");

                observador.unobserve(entrada.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


artigos.forEach(artigo => {

    observador.observe(artigo);

});


// ------------------------------
// Links "Ler o manuscrito"
// ------------------------------

document.querySelectorAll(".leia-mais").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const artigo = this.closest(".coluna-autor");

        const nome = artigo.querySelector(
            ".coluna-nome"
        ).textContent;

        alert(
            `📜 Manuscrito de ${nome}\n\n` +
            `Em breve esta página poderá conter ` +
            `o manuscrito completo deste autor.`
        );

    });

});


// ------------------------------
// Efeito no menu ao rolar
// ------------------------------

const menu = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        menu.classList.add("menu-scroll");

    } else {

        menu.classList.remove("menu-scroll");

    }

});