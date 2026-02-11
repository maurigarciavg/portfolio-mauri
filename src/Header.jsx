import './Header.css'

const Header = () => {


    return (
        <>
        <img className="profilePic"src="./src/assets/A GTA-style digital .png" alt="Foto de Mauri García" width="300"/>
         <h1 className="mainTitle">Mauri García | Desarrollador Full Stack en formación</h1>
        <p className="subtitle">
            De gestionar la experiencia de cliente en distintos mercados internacionales 
            a construir experiencias digitales eficientes. Transformando problemas 
            complejos en código limpio.
        </p>
        </>
    );
};

export default Header;