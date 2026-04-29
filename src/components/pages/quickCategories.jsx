import React from "react";
import '../styles/quickCategories.css';
const QuickCategories = () => {

    return (
        <section id="categories" className="quick-categories">
            <div className="container">
                <h2 className="section-title">Trouvez un spécialiste</h2>
                <div className="categories-grid">
                    <a href="#" className="category-card" data-specialty="generaliste">
                        <div className="category-icon">
                            <i className="fas fa-user-md"></i>
                        </div>
                        <h3>Médecin Généraliste</h3>
                        <p>Consultation générale</p>
                    </a>
                    <a href="#" className="category-card" data-specialty="dentiste">
                        <div className="category-icon">
                            <i className="fas fa-tooth"></i>
                        </div>
                        <h3>Dentiste</h3>
                        <p>Soins dentaires</p>
                    </a>
                    <a href="#" className="category-card" data-specialty="pediatre">
                        <div className="category-icon">
                            <i className="fas fa-baby"></i>
                        </div>
                        <h3>Pédiatre</h3>
                        <p>Santé des enfants</p>
                    </a>
                    <a href="#" className="category-card" data-specialty="gynecologue">
                        <div className="category-icon">
                            <i className="fas fa-female"></i>
                        </div>
                        <h3>Gynécologue</h3>
                        <p>Santé féminine</p>
                    </a>
                    <a href="#" className="category-card" data-specialty="cardiologue">
                        <div className="category-icon">
                            <i className="fas fa-heartbeat"></i>
                        </div>
                        <h3>Cardiologue</h3>
                        <p>Cœur et vaisseaux</p>
                    </a>
                    <a href="#" className="category-card" data-specialty="dermatologue">
                        <div className="category-icon">
                            <i className="fas fa-allergies"></i>
                        </div>
                        <h3>Dermatologue</h3>
                        <p>Peau et cheveux</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default QuickCategories;