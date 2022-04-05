//función para manejar el comportamiento del botón de navegación
//en dispositivos móviles.
//Se debe ejecutar despues de renderizar el componente por eso se coloca
//dentro de useEffect en el Nav.
export const navResponsive = () => {
    const btn = document.querySelector('.nav__bars-menu');
    const ul = document.querySelector('.nav-ul');

    const bar1 = document.querySelector('.bar-1');
    const bar2 = document.querySelector('.bar-2');
    const bar3 = document.querySelector('.bar-3');

    const screen = window.matchMedia("screen and (max-width: 1080px)");

    if (screen.matches) {
        ul.classList.add('nav-ul--not-focus');
    }

    btn.addEventListener('click', () => {

        if (ul.classList.contains("nav-ul--not-focus")) {
            ul.classList.remove("nav-ul--not-focus");
            ul.classList.add("nav-ul--focus");

            bar1.classList.add("bar-1--active");
            bar2.classList.add("bar-2--active");
            bar3.classList.add("bar-3--active");
        }
        else if (ul.classList.contains("nav-ul--focus")) {
            ul.classList.remove("nav-ul--focus");
            ul.classList.add("nav-ul--not-focus");

            bar1.classList.remove("bar-1--active");
            bar2.classList.remove("bar-2--active");
            bar3.classList.remove("bar-3--active");
        }
    });

    document.addEventListener("click", (e) => {
        const click = e.target;
        if (screen.matches) {
            if (!ul.classList.contains("nav-ul--not-focus") && click !== ul && click !== btn) {
                ul.classList.remove("nav-ul--focus");
                ul.classList.add("nav-ul--not-focus");

                bar1.classList.remove("bar-1--active");
                bar2.classList.remove("bar-2--active");
                bar3.classList.remove("bar-3--active");
            }
        }
    });
}