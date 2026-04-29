import React from "react";
import '../styles/features.css';

const Features = () => {

    return (
        <section id="features" class="features">
            <div class="container">
                <h2 class="section-title">Pourquoi choisir WerGui ?</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-calendar-check"></i>
                        </div>
                        <h3>Réservation facile</h3>
                        <p>Prenez rendez-vous en quelques clics, 24h/24 et 7j/7</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-video"></i>
                        </div>
                        <h3>Consultation vidéo</h3>
                        <p>Consultez un médecin depuis chez vous par vidéo</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h3>Rappels automatiques</h3>
                        <p>Recevez des rappels SMS et email pour vos rendez-vous</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-file-medical"></i>
                        </div>
                        <h3>Carnet de santé</h3>
                        <p>Conservez tous vos documents médicaux au même endroit</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-star"></i>
                        </div>
                        <h3>Avis vérifiés</h3>
                        <p>Consultez les avis des autres patients</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h3>Sécurité des données</h3>
                        <p>Vos données médicales sont protégées et confidentielles</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;