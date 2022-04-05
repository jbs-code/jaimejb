import React from 'react';

function CardProyects({ name, url, description, path }) {
    return (
        <article className='card box-shadow'>
            <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='card-container__img card-container__img--select'>

                <h2 className='mb-1'>{name}</h2>
                <img src={path} alt={name} />
            </a>
            
            <p className='box-shadow'>{description}</p>
        </article>
    )
}

export default CardProyects