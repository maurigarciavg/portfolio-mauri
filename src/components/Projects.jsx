import { Link } from 'react-router-dom';

function Projects() {
  const misProyectos = [
    { id: "todolist", nombre: "ToDo List", descripcion: "Gestión de tareas eficiente." },
    { id: "calculadora", nombre: "Calculadora", descripcion: "Lógica matemática con React." },
    { id: "clon-netflix", nombre: "Clon de Netflix", descripcion: "Interfaz dinámica y moderna." }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Mis Proyectos</h2>
      
      <div className="projects-grid">
        {misProyectos.map((proyecto) => (
          <div key={proyecto.id} className="project-card">
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
          
            <Link to={`/proyectos/${proyecto.id}`} className="project-link">
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;