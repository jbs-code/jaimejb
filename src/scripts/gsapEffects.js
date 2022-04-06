import gsap from "gsap";

//implementación  de gsap para poner efectos visuales en la aplicación.
//revisar documentación de gsap para más detalles.
//Creé una función para cada componente al que le quise poner efectos.
//Se tiene que ejecutar después de que se haya cargado el componente, por
//eso se coloca dentro de useEffect.
export const gsapHome = () => {
    const tl = gsap.timeline();
    tl.fromTo(".home-img", { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 1 });
    tl.fromTo(".home-footer", { opacity: 0 }, { opacity: 1, duration: 1 });
}

export const gsapNav = () => {
    const tl = gsap.timeline();
    tl.fromTo(".nav", { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 1 });
    tl.fromTo(".btn", { opacity: 0, x:-200 }, { opacity: 1, x: 0, duration: 1 });
}

export const gsapCard = () => {
    const tl = gsap.timeline();
    tl.fromTo(".card", { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 1 });
    tl.fromTo(".card-container__img", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5");
}

export const gsapFormContact = () => {
    const tl = gsap.timeline();
    tl.fromTo(".card", { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 1 });
}


