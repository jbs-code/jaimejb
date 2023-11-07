import gsap from "gsap";

//implementación  de gsap para poner efectos visuales en la aplicación.
//revisar documentación de gsap para más detalles.
//Creé una función para cada componente al que le quise poner efectos.
//Se tiene que ejecutar después de que se haya cargado el componente, por
//eso se coloca dentro de useEffect.
export const gsapHome = () => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".home-img",
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 1 }
    );
    tl.fromTo(".home-footer", { opacity: 0 }, { opacity: 1, duration: 1 });
  });

  return ctx;
};

export const gsapNav = () => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".nav",
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, duration: 1 }
    );
    tl.fromTo(
      ".btn",
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1 }
    );
  });
  return ctx;
};

export const gsapCard = () => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".card",
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 1 }
    );
    tl.fromTo(
      ".card-container__img",
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "-=0.5"
    );
  });
  return ctx;
};

export const gsapFormContact = () => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".card",
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 1 }
    );
  });
  return ctx;
};
