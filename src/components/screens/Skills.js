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
                    <FontAwesomeIcon icon={brands('js-square')} className='skills-icon js' />
                    <FontAwesomeIcon icon={brands('github')} className='skills-icon github' />
                    <FontAwesomeIcon icon={brands('git-alt')} className='skills-icon git' />
                    <FontAwesomeIcon icon={brands('node')} className='skills-icon node' />
                    <FontAwesomeIcon icon={brands('react')} className='skills-icon react' />
                    <FontAwesomeIcon icon={brands('html5')} className='skills-icon html5' />
                    <FontAwesomeIcon icon={brands('css3')} className='skills-icon css3' />
                    <FontAwesomeIcon icon={brands('sass')} className='skills-icon sass' />
                </section>
                <a href={doc('./cv.pdf')} target='_blank' rel='noopener noreferrer' className='btn btn-primary text-shadow btn-shadow mt-2'>Descarga mi currículum</a>
            </div>
        </div>
    )
}

export default Skills