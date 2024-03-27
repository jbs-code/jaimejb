import React from 'react'

//Componente que solo retorna el botón del nav para móviles.
function NavBtn() {
    return (
        <div className='nav__bars-menu'>
            <div className='bar bar-1'></div>
            <div className='bar bar-2'></div>
            <div className='bar bar-3'></div>
        </div>
    )
}

export default NavBtn