import React from 'react';

function CardProyects({ name, urlSite, urlCode, description, path }) {

    return (
        <article className='card box-shadow'>
            <div className='card-container__img proyects-img'>
                <h2 className='mb-1'>{name}</h2>
                <div className='proyects-img__container'>
                    <img src={path} alt={name} />
                    <div className='proyects-img--shadow'>
                        <a
                            href={urlSite}
                            target='_blank'
                            rel='noopener noreferrer'
                        >Ver sitio</a>
                        <a
                            href={urlCode}
                            target='_blank'
                            rel='noopener noreferrer'
                        >Ver código</a>
                    </div>
                </div>
            </div>

            <p className='box-shadow'>{description}</p>
        </article>
    )
}

export default CardProyects