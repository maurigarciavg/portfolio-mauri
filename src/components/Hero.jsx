import './Hero.css'
import profilePic from '../assets/foto-perfil.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <div className="image-wrapper">
                    <img src={profilePic} alt="Mauri" className="profile-img" />
                </div>
                <h1 className="hero-title" ><span className="highlight">Mauri García</span></h1>
                 <h2 className="hero-title"> Desarrollador Full Stack en formación</h2>
                <h3 className="hero-subtitle">
                    Customer Support Expert ➡️ Full Stack Developer
                </h3>

                <p className="hero-text">
                    Con base en Granada y mentalidad global. Tras gestionar mercados internacionales en Muziker,
                    ahora aplico mi capacidad analítica y resolución de problemas al código.
                    Buscando el "porqué" de las cosas, no solo cómo funcionan.
                </p>

                <div className="hero-buttons">
                    <Link to="/proyectos" className="btn primary">Ver Proyectos</Link>
                    <Link to="/contacto" className="btn secondary">Hablemos</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;