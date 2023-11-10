import { gsapCard } from "../../scripts/gsapEffects";
import { useLayoutEffect } from "react";

const img = require.context("../../assets/");

function AboutMe() {
  useLayoutEffect(() => {
    const ctx = gsapCard();
    return () => ctx.revert();
  }, []);

  return (
    <div className="about-me">
      <h1 className="text-shadow">Sobre mí</h1>

      <article className="card">
        <div className="card-container__img">
          <img src={img("./img/jaime.jpg")} alt="Foto de Jaime" />
        </div>
        <p className="card-p--border-r">
          <span>Hola, mi nombre es Jaime Barranco Sánchez</span> y me gusta el
          desarrollo web. Llevo más de un año trabajando en proyectos personales
          para mejorar mis habilidades de programador y he tomado distintos
          cursos que me han servido para generar confianza y tomar nuevos
          desafíos.
        </p>
      </article>

      <article className="card">
        <p className="card-p--border-l">
          Soy ingeniero en computación y durante mi carrera pude comprender las
          bases de distintos ámbitos relacionados a TI; sin embargo, en la
          programación fue donde encontré la satisfacción por las cosas que se
          podían lograr únicamente con una computadora. Y dada la manera en cómo
          se mueve el mundo a través de la web, vi una gran oportunidad de
          desarrollo profesional.
        </p>
        <div className="card-container__img">
          <img src={img("./img/titulo.jpg")} alt="Foto de perros" />
        </div>
      </article>

      <article className="card">
        <p className="card-p--alone">
          Tengo como meta seguir especializándome en las distintas tecnologías y
          herramientas relacionadas a la web, además de mejorar mis habilidades
          sociales para que en conjunto me ayuden a adquirir un mayor nivel de
          seniority.
        </p>
      </article>

      <article className="card">
        <div className="card-container__img">
          <img src={img("./img/perros.png")} alt="Foto de F1" />
        </div>
        <p className="card-p--border-r">
          <span>Un poco de mi lado personal.</span> Crecí en una comunidad rural
          en donde he aprendido a apreciar el silencio y la tranquilidad. Me
          gusta por las mañanas salir a caminar con mis perros y disfrutar del
          paisaje y las diferentes vistas que me da cada estación del año (Aquí
          Jaime del futuro, actualmente solo me acompaña Yogui. Max, el pastor
          que sale en la foto, falleció en mayo del 2022 y quise hacer esta
          actualización en su memoria).
        </p>
      </article>

      <article className="card">
        <p className="card-p--alone">
          Confieso que mi círculo de amigos es pequeño. Suelo ser muy reservado
          y me cuesta trabajo entablar conversación, aunque soy muy bueno
          escuchando. Es una de las virtudes que mis conocidos destacan de mí,
          he sido el confidente de muchos porque saben de mi gran discreción.
          Tal vez no tenga un buen consejo que dar, pero con solo escuchar
          parece que ayudo para el desahogo y tranquilidad de mis amigos.
        </p>
      </article>

      <article className="card">
        <p className="card-p--border-l">
          Me encantan esas cosas que aparentan una simplicidad, pero que tienen
          una complejidad que pasa muchas veces desapercibida. Me he pasado
          horas en internet viendo videos de relojes con mecanismos complejos o
          sobre proyectos de arquitectura donde resaltan los retos por el
          terreno, materiales utilizados o el clima de la zona.
        </p>
        <div className="card-container__img">
          <video src={img("./videos/reloj.mp4")} autoPlay loop>
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </div>
      </article>

      <article className="card">
        <div className="card-container__img">
          <video src={img("./videos/coding.mp4")} autoPlay loop>
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </div>
        <p className="card-p--border-r">
          Es por esto que me gusta este mundo de la programación, como usuarios
          solo percibimos la fachada de las aplicaciones, pero como
          especialistas en la materia apreciamos todo el trabajo que hay detrás,
          y tener ese conocimiento me hace sentir orgulloso.
        </p>
      </article>

      <article className="card mb-3">
        <p className="card-p--alone">
          Ojalá esto que acabo de escribir sirva para conocerme un poco mejor. Gracias por llegar hasta aquí 😊.
        </p>
      </article>
    </div>
  );
}

export default AboutMe;
