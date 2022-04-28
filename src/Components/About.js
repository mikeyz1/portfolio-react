import React from 'react';
import "./About.css"

function About() {
    return (
        <div name="over-mij" className="aboutSection">
            <h2>Over Mij</h2>
            <div className="infoSection">
                <div className="infoCard">
                    <h3>Introductie</h3>
                    <p>Hallo mijn naam is Mikey van Zundert. Ik ben een enthousiaste en positieve developer om u te helpen aan uw web gerelateerde ideeën.</p>
                    <p>Als u meer over me  wilt weten, bekijk dan mijn CV via de download knop!</p>
                </div>
                <div className="infoCard">
                    <h3>Programmeer vaardigheden</h3>
                    <p>Ik ben een junior developer en heb de basis kennis van:</p>
                        <ul>
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>Javascript</li>
                            <li>PHP</li>
                        </ul>
                    <p>Daarnaast heb ik verstand van het gebruik van frameworks zoals Laravel, Angular en React.</p>
                </div>
            </div>
        </div>
    );
}

export default About;