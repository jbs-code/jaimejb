import React, { useEffect } from 'react';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { gsapCard } from '../../scripts/gsapEffects';

//Utilicé fontawesome para los iconos desde npm, puedes revisar la documentación de fontawesome para
//conocer la implementación a través de babel.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const doc = require.context('../../assets/docs');

function Skills() {
    useEffect(() => {
        gsapCard();
    }, []);

    return (
        <div className='skills'>
            <h1 className='text-shadow'>Skills</h1>
            <div className='card'>
                <section className='card-container__img skills-section mt-3'>
                    <div className='card-item'>
                        <FontAwesomeIcon icon={brands('js-square')} className='skills-icon js' />
                        <div className='card-item__name'><span>JavaScript</span></div>
                    </div>
                    <div className='card-item'>
                        <FontAwesomeIcon icon={brands('github')} className='skills-icon github' />
                        <div className='card-item__name'><span>GitHub</span></div>
                    </div>
                    <div className='card-item'>
                        <FontAwesomeIcon icon={brands('git-alt')} className='skills-icon git' />
                        <div className='card-item__name'><span>Git</span></div>
                    </div>
                    <div className='card-item'>
                        <FontAwesomeIcon icon={brands('npm')} className='skills-icon npm' />
                        <div className='card-item__name'><span>npm</span></div>
                    </div>
                    <div className='card-item'>
                        <FontAwesomeIcon icon={brands('react')} className='skills-icon react' />
                        <div className='card-item__name'><span>React JS</span></div>
                    </div>
                    <div className='card-item'>
                        <FontAwesomeIcon icon={brands('html5')} className='skills-icon html5' />
                        <div className='card-item__name'><span>HTML5</span></div>
                    </div>
                    <div className='card-item'>
                        <FontAwesomeIcon icon={brands('css3')} className='skills-icon css3' />
                        <div className='card-item__name'><span>CSS3</span></div>
                    </div>
                    <div className='card-item'>
                        <FontAwesomeIcon icon={brands('sass')} className='skills-icon sass' />
                        <div className='card-item__name'><span>Sass</span></div>
                    </div>
                </section>
                <a href={doc('./cv.pdf')} target='_blank' rel='noopener noreferrer' className='btn btn-primary text-shadow mt-2'>Descarga mi currículum</a>
            </div>
        </div>
    )
}

export default Skills