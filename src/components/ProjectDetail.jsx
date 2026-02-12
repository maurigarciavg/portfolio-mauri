import { useParams, Link, useNavigate } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const misProyectos = [
    { id: "todolist", nombre: "ToDo List" },
    { id: "calculadora", nombre: "Calculadora" },
    { id: "clon-netflix", nombre: "Clon de Netflix" }
  ];

  const otrosProyectos = misProyectos.filter((proyecto) => proyecto.id !== id);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Estás viendo: {id}</h2>
          
      <button onClick={() => navigate("/proyectos")}>🔙 Volver a la lista</button>

      <hr style={{ margin: '30px 0' }} />

      <h3>Ver otros proyectos:</h3>
      <ul>
        {otrosProyectos.map((proyecto) => (
          <li key={proyecto.id}>
            <Link to={`/proyectos/${proyecto.id}`}>
              Ir a {proyecto.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDetail;