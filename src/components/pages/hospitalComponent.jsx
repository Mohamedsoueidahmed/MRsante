import React from "react";

const HospitalComponent = ({ hospital }) => {
    return (
        <div class="hospital-card">

            <div class="hospital-info">
                <h3>{hospital.name}</h3>
                <span class="hospital-type">{hospital.type}</span>
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i> {hospital.location}
                </div>
                <p>{hospital.description}</p>
                <div class="rating">
                    <i class="fas fa-star"></i> {hospital.rating}/5 ({hospital.reviews} avis)
                </div>
                <button class="btn-view" onclick="viewHospital(${hospital.id})">
                    Voir les médecins
                </button>
            </div>
        </div>
    )
}

export default HospitalComponent;