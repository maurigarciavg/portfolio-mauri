import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        <div className="contact-info-centered">
          <h2>Hablemos <span className="highlight">Ahora</span></h2>
          <p className="contact-desc">
            ¿Tienes un proyecto en mente o buscas un perfil híbrido que entienda
            tanto de código como de gestión de clientes? Estoy listo para nuevos retos.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <span className="icon">📧</span>
              <a href="mailto:maurigvg88@gmail.com" className="email-link">
                maurigvg88@gmail.com
              </a>
            </div>
            <div className="detail-item">
              <span className="icon">📍</span>
              <p>Granada, España (Remoto)</p>
            </div>
            <div className="detail-item">
              <span className="icon">💼</span>
              <p>Disponible para contratación</p>
            </div>
          </div>
          <div className="cta-container">
            <a href="mailto:maurigvg88@gmail.com" className="submit-btn primary-btn">
              Envíame un correo 🚀
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;