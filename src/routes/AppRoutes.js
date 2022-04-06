import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../components/Nav';
import AboutMe from '../components/screens/AboutMe';
import Contact from '../components/screens/Contact';
import Home from '../components/screens/Home';
import Proyects from '../components/screens/Proyects';
import Skills from '../components/screens/Skills';

function AppRoutes() {
    
    return (
        <BrowserRouter >
            <div className='container'>
                <Nav />
                <Routes>
                    <Route path="/jaimejb" element={<Home />} />
                    <Route path="/jaimejb/aboutme" element={<AboutMe />} />
                    <Route path="/jaimejb/contact" element={<Contact />} />
                    <Route path="/jaimejb/proyects" element={<Proyects />} />
                    <Route path="/jaimejb/skills" element={<Skills />} />
                </Routes>
            </div>
        </BrowserRouter>)
        ;
}

export default AppRoutes;
