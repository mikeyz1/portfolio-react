import React from 'react';
import { motion } from "framer-motion";
import "./Hero.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Hero() {
    return (
        <div className="hero">
            <div className="intro">
                
                <motion.img 
                    initial= {{ scale: 0 }}
                    animate= {{ scale: 1 }}
                    transition= {{
                        delay: 0.75,
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                    }}
                    src="https://rogroep.nl/wp-content/uploads/2020/09/blank-profile-picture-973460_640.png"
                />
                <motion.div
                    initial= {{ x: -50, opacity: 0 }}
                    animate= {{ x: 0, opacity: 1 }}
                    transition= {{ delay: 0.25, duration: 0.5 }}
                    className="introduction"
                    >
                        <h1>Junior Web Dev</h1>
                        <p>Ik breng de oplossing voor uw site ideeën!</p>
                </motion.div>
            </div>
            <div className="cvContainer">
                <Router>
                    <Link to="/files/Mikey_Zundert_CV.odt" target="_blank" download>
                        <motion.button
                            whileHover={{
                                scale: 1.1
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                        >
                            Download CV
                        </motion.button>
                    </Link>
                    </Router>
            </div>
        </div>
    );
}

export default Hero;