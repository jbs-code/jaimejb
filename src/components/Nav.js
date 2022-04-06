import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { gsapNav } from '../scripts/gsapEffects';
import { navResponsive } from '../scripts/navResponsive';
import NavBtn from './NavBtn';

function Nav() {
    useEffect(() => {
        navResponsive();
        gsapNav();
    },[]);

    return (
        <nav className="nav">
            <div className='nav-logo'>
                <NavBtn/>
                <Link className='nav-item logo' to="/jaimejb"><h1 className='text-shadow'>{'<Jaime JB/>'}</h1></Link>
            </div>
            <ul className='nav-ul nav-ul--focus'>
                <Link className='nav-item btn btn-primary text-shadow' to="/jaimejb/aboutme">Sobre mí</Link>
                <Link className='nav-item btn btn-primary text-shadow' to="/jaimejb/proyects">Proyectos</Link>
                <Link className='nav-item btn btn-primary text-shadow' to="/jaimejb/skills">Skills</Link>
                <Link className='nav-item btn btn-primary text-shadow' to="/jaimejb/contact">Contáctame</Link>
            </ul>
        </nav>
    );
}

export default Nav;
