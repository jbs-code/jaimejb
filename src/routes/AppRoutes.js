import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../components/Nav';
import AboutMe from '../components/screens/AboutMe';
import Contact from '../components/screens/Contact';
import Home from '../components/screens/Home';
import Proyects from '../components/screens/Proyects';
import Skills from '../components/screens/Skills';

//El path en las rutas lo cambié únicamente para que funcione en github pages.
//Lo mismo pasa en cada Link de la nav.
function AppRoutes() {
    
    return (
        <BrowserRouter >
            <div className='container'>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="aboutme" element={<AboutMe />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="proyects" element={<Proyects />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>)
        ;
}

export default AppRoutes;
