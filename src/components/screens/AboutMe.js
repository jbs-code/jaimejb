import React, { useEffect } from 'react';
import { gsapCard } from '../../scripts/gsapEffects';

const img = require.context('../../assets/');

function AboutMe() {
  useEffect(() => {
    gsapCard();
  }, []);

  return (
    <div className='about-me'>
      <h1 className='text-shadow'>Sobre mí</h1>

      <article className='card'>
        <div className='card-container__img'>
          <img src={img('./img/jaime.jpg')} alt='Foto de Jaime' />
        </div>
        <p className='card-p--border-r'><span>Hola, soy Jaime.</span>Te voy a contar un poco sobre mí. Crecí en una comunidad rural en donde he aprendido a apreciar el silencio y la tranquilidad. Conservo a varios amigos de la infancia, me alegran sus éxitos y disfruto cada oportunidad en la que puedo platicar con ellos.</p>
      </article>

      <article className='card'>
        <p className='card-p--border-l'>Me gusta por las mañanas salir a caminar con mis perros y disfrutar del paisaje y las diferentes vistas que me da cada estación del año (Aquí Jaime del futuro, actualmente solo me acompaña Yogui, Max, el pastor que sale en la foto, falleció en mayo del año pasado y quise hacer esta actualización en su memoria).</p>
        <div className='card-container__img'>
          <img src={img('./img/perros.png')} alt='Foto de perros' />
        </div>
      </article>

      <article className='card'>
        <p className='card-p--alone'>Confieso que mi circulo de amigos es pequeño. Suelo ser muy reservado y me cuesta trabajo entablar conversación, aunque soy muy bueno escuchando. Es una de las virtudes que mis conocidos destacan de mí, he sido el confidente de muchos porque saben de mi gran discreción. Tal vez no tenga un buen consejo que dar, pero con solo escuchar parece que ayudo para el desahogo y tranquilidad de mis amigos.</p>
      </article>

      <article className='card'>
        <div className='card-container__img'>
          <img src={img('./img/tyre.jpg')} alt='Foto de F1' />
        </div>
        <p className='card-p--border-r'>Me gustan los deportes, aunque tiene tiempo que no practico ninguno (es una de las cosas que me cuesta mucho recuperar y que extraño de mi adolescencia). Me gusta el futbol desde niño, pero desde hace algunos años me he interesado mucho por la Fórmula 1. Como ingeniero me llamó demasiado la atención la parte técnica y estratégica de las carreras, es una locura ver la cantidad de personas involucradas en cada carrera para que un auto esté a punto frente a su competencia.</p>
      </article>

      <article className='card'>
        <p className='card-p--border-l'>Me encantan esas cosas que aparentan una simplicidad, pero que tienen una complejidad que pasa muchas veces desapercibida. Me he pasado horas en internet viendo videos de relojes con mecanismos complejos o sobre proyectos de arquitectura donde resaltan los retos por el terreno, materiales utilizados o el clima de la zona.</p>
        <div className='card-container__img'>
          <video src={img('./videos/reloj.webm')} autoPlay loop>
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </div>
      </article>

      <article className='card'>
        <div className='card-container__img'>
          <video src={img('./videos/coding.webm')} autoPlay loop>
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </div>
        <p className='card-p--border-r'>Es por esto que me gusta este mundo de la programación, como usuarios solo percibimos la fachada de las aplicaciones, pero como especialistas en la materia apreciamos todo el trabajo que hay detrás, y tener ese conocimiento me hace sentir orgulloso.</p>
      </article>

      <article className='card mb-3'>
        <p className='card-p--alone'>Ojalá esto que acabo de escribir sirva para conocerme un poco mejor y gracias por llegar hasta aquí y mostrar interés de conocer un poco más sobre mi lado personal.</p>
      </article>

    </div>
  );
}

export default AboutMe;