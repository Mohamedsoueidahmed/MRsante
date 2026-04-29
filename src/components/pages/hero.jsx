import React from "react";
import '../styles/hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <h1>Prenez rendez-vous avec les meilleurs médecins à Dakar</h1>
                <p>Consultation en ligne ou en cabinet • Réservation instantanée • Rappels automatiques</p>

                <div className="search-container">
                    <div className="search-box">
                        <input type="text" placeholder="Spécialité, symptôme, médecin..." />
                            <input type="text" placeholder="Dakar, Sénégal" />
                                <button className="search-btn">Rechercher</button>
                            </div>
                            <div>
                                <small>Ex: Cardiologue, Dentiste, Pédiatre, Gynecologue</small>
                            </div>
                    </div>
            </div>
        </section>
    );
}

export default Hero;