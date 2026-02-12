import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>Sobre <span className="highlight">Mí</span></h2>
          <p className="subtitle">De Granada al mundo digital.</p>
        </div>
        <div className="about-grid">
          <div className="glass-card bio-card">
            <h3>🚀 El Origen</h3>
            <p>
              Soy Mauri (1988), un granadino curioso por naturaleza. Mi trayectoria no es lineal, y eso es mi mayor fortaleza.
              Vengo del mundo del <strong>Turismo y la Innovación</strong>, he vivido en Brighton y Eslovaquia, y actualmente
              gestiono mercados internacionales en <strong>Muziker</strong> (España, Portugal, UK...).
            </p>
            <p>
              ¿Mi superpoder? La gestión del caos. He llegado a manejar 192 actividades en un solo día cubriendo múltiples mercados.
              Ahora, canalizo esa energía y resistencia hacia el <strong>Desarrollo Full Stack</strong>.
            </p>
          </div>
          <div className="glass-card personal-card">
            <h3>🌌 Qué me mueve</h3>
            <ul className="interests-list">
              <li>🧠 <strong>Curiosidad Radical:</strong> Necesito entender el "porqué" de las cosas, no solo usarlas.</li>
              <li>🎮 <strong>Sci-Fi & Tech:</strong> Desde videojuegos hasta la inmensidad del espacio. La tecnología es mi medio natural.</li>
              <li>🐾 <strong>Equipo en casa:</strong> Vivo en Cenes de la Vega con Monika, nuestra perra Meri y el gato Miki.</li>
              <li>📈 <strong>Mejora Continua:</strong> Obsesionado con optimizar procesos, ya sean financieros o de código.</li>
            </ul>
          </div>
          <div className="glass-card tech-card">
            <h3>💻 Stack Tecnológico</h3>
            <div className="tech-badges">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Vite</span>
              <span>Git</span>
              <span>Atención al Cliente</span>
              <span>Resolución de Problemas</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;