import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
    const [isActive, setActive] = useState("false");

    const showMobileMenu = () => {
        setActive(!isActive)
    }

    const closeMobileMenu = () => {
        setActive(true);
    }

    const defaultState = {
        translateX: "-100%"
    }

    return (
        <div className="navbar">
            <h2>Mikey</h2>
            <nav>
                <ul>
                    <li><Link to="over-mij" smooth={true}>Over Mij</Link></li>
                    <li><Link to="contact" smooth={true}>Contact</Link></li>
                </ul>
                <i className="navigationIcon fa fa-bars" onClick={showMobileMenu}></i>
            </nav>
            <AnimatePresence>
            {!isActive && (
            <motion.div
             className="mobileNavbar"
             initial = {defaultState}
             exit = {defaultState} 
             onClick={closeMobileMenu}
             animate={{
                translateX: "-5%"
             }}
             >
                <i className="closeIcon fa fa-times"></i>
                <nav>
                    <ul>
                        <li><Link to="over-mij" smooth={true} onClick={closeMobileMenu}>Over Mij</Link></li>
                        <li><Link to="contact" smooth={true} onClick={closeMobileMenu}>Contact</Link></li>
                    </ul>
                </nav>  
            </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;