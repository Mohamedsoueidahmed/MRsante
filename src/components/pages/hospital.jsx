import { useEffect, useState} from "react";
import '../styles/doctorHospital.css';
import HospitalComponent from "./hospitalComponent";
import { supabase } from "../../../config/supabase";

const hospitalList = [
    {
        id: 1,
        name: "Hôpital Principal de Dakar",
        type: "Hôpital Public",
        image: "https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        location: "Avenue Nelson Mandela, Dakar",
        rating: 4.2,
        reviews: 420,
        description: "Hôpital public de référence avec service d'urgences 24h/24 et toutes les spécialités médicales"
    },
    {
        id: 2,
        name: "Clinique de la Madeleine",
        type: "Clinique Privée",
        image: "https://images.unsplash.com/photo-1516549655669-df6654e435de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        location: "Rue de la Madeleine, Plateau",
        rating: 4.5,
        reviews: 310,
        description: "Clinique privée moderne avec équipements de pointe et médecins spécialistes"
    },
    {
        id: 3,
        name: "Clinique du Cap Vert",
        type: "Clinique Privée",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        location: "Almadies, Dakar",
        rating: 4.7,
        reviews: 285,
        description: "Clinique haut de gamme avec médecins internationaux et équipements dernier cri"
    }
];

const Hospital = () => {

    const [hospitals, setHospitals] = useState([]);
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const fetchHospitals = async () => {
                try {
                    const { data, error } = await supabase
                        .from("hospitals")
                        .select("*");
    
                    if (error) throw error;
                    
                    console.log("Hospitals", data);
                    
                    setHospitals(data);
                } catch (err) {
                    console.error("Erreur Supabase", err);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchHospitals();
        }, []);
    
        if(loading) return <p> Chargement ... </p>

    return (
        <section id="hospitals" class="hospitals-section">
            <div class="container">
                <h2 class="section-title">Hôpitaux et Cliniques à Dakar</h2>
                <div class="hospitals-grid" id="hospitalsList">
                    {/* <!-- Hospitals will be loaded by JavaScript --> */}
                    {
                        hospitals.map((hospital, i) => {
                            return <HospitalComponent hospital={hospital}/>
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Hospital;