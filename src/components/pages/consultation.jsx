import React from "react";
import '../styles/consultationType.css';

const Consultation = () => {

    return (
        <section class="payment-section">
            <div class="container">
                <h2 class="section-title">Types de consultation disponibles</h2>
                <div class="consultation-types">
                    <div class="consultation-type" data-type="cabinet">
                        <i class="fas fa-clinic-medical"></i>
                        <h4>En cabinet</h4>
                        <p>Consultation physique avec le médecin</p>
                        <small>Paiement sur place</small>
                    </div>
                    <div class="consultation-type" data-type="video">
                        <i class="fas fa-video"></i>
                        <h4>Visioconférence</h4>
                        <p>Consultation à distance par vidéo</p>
                        <small>Paiement en ligne requis</small>
                    </div>
                    <div class="consultation-type" data-type="urgence">
                        <i class="fas fa-ambulance"></i>
                        <h4>Consultation d'urgence</h4>
                        <p>Rendez-vous prioritaire</p>
                        <small>Majoration de 25%</small>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Consultation;