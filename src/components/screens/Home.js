import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { gsapHome } from '../../scripts/gsapEffects';

const img = require.context('../../assets/img');

function Home() {
  useEffect(() => {
    gsapHome();
  }, []);

  return (
    <div className="home">
      <picture className="home-img">
        <source srcSet={img('./pc-thinking-movil.png')} media='(max-width: 1080px) and (orientation: portrait)' />
        <img src={img('./pc-thinking.png')} alt='pc-thinking' />
      </picture>

      <footer className="home-footer">
        <span>{"<Jaime JB/>"}</span>
        <span>Puedes mandarme un mensaje en la parte de contacto o por mis redes.</span>
        <div>
          <a
            href='https://github.com/jbs-code'
            target='_blank'
            rel='noopener noreferrer'>
            <FontAwesomeIcon icon={brands('github')} className='home-icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/jaimejbas/'
            target='_blank'
            rel='noopener noreferrer'>
            <FontAwesomeIcon icon={brands('linkedin')} className='home-icon' />
          </a>
        </div>

      </footer>
    </div>
  );
}

export default Home;
