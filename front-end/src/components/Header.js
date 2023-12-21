import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header style={headerStyle}>
          <div style={containerStyle}>
            <div style={logoStyle}>
              <h1 style={{ fontFamily: 'Cocomat Pro', color: '#3a76e4' }}>Dr. Health</h1>
              <p>Your Marketplace for Health Tourism</p>
            </div>
            <nav style={navStyle}>
              <ul style={navList}>
                <li><a href="#illnesses" style={navLink}>Illnesses</a></li>
                <li><a href="#destinations" style={navLink}>Destinations</a></li>
                <li><a href="#about" style={navLink}>About Us</a></li>
                <li><a href="#contact" style={navLink}>Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </header>
      );
    };
    
    // Styles
    const headerStyle = {
      background: '#e4eeff',
      padding: '20px 0',
      fontWeight: 'bold',
      color: '#3a76e4',
      fontFamily: 'Montserrat',
      borderBottom: '2px solid #B0C5FF',
    };
    
    const containerStyle = {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
    };
    
    const logoStyle = {
      flex: '1',
    };
    
    const navStyle = {
      flex: '2',
    };
    
    const navList = {
      listStyle: 'none',
      padding: '0',
      margin: '0',
      display: 'flex',
      justifyContent: 'space-around',
    };
    
    const navLink = {
      textDecoration: 'none',
      color: '#3a76e4',
      fontSize: '1rem',
    };
    
    export default Header;