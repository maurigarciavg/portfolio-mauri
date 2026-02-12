import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar-glass">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/">Mauri<span>.dev</span></Link>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-links">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/proyectos" className="nav-links">Proyectos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sobre-mi" className="nav-links">Sobre mí</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacto" className="nav-links">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;