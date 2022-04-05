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
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/proyects" element={<Proyects />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </div>
        </BrowserRouter>)
        ;
}

export default AppRoutes;
