import React, { useEffect } from 'react';
import { gsapCard } from '../../scripts/gsapEffects';
import { proyects } from '../../ProyectsList/proyects';
import CardProyects from '../CardProyects';

function Proyects() {

  //Obtenemos la lista de proyectos
  const proyectos = proyects.proyectsArray;

  useEffect(() => {
    gsapCard();
  }, []);

  return <div className='proyects'>
    <h1 className='text-shadow'>Proyectos</h1>

    {
      proyectos.map(proyect =>
        <CardProyects
          key={proyect.id}
          name={proyect.name}
          url={proyect.url}
          description={proyect.description}
          path={proyect.path}
        />)
    }

  </div>;
}

export default Proyects;
