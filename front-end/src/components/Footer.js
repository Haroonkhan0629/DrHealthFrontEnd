import "../index.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer media">
            <h1>Developers:</h1>
            <Link to=""><h4>Haroon Khan</h4></Link>
            <Link to=""><h4>Francis Cruz</h4></Link>
            <Link to=""><h4>Anna Bilan</h4></Link>
            <Link to=""><h4>Matt Herrera</h4></Link> <br />
        </div>
    )
  };

export default Footer