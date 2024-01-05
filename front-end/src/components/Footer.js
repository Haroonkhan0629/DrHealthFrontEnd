import "../index.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer media">
            <h1 className="media-txt">Developers:</h1>
            <Link to=""><h4 className="media-txt">Haroon Khan</h4></Link>
            <Link to=""><h4 className="media-txt">Francis Cruz</h4></Link>
            <Link to=""><h4 className="media-txt">Anna Bilan</h4></Link>
            <Link to=""><h4 className="media-txt">Matt Herrera</h4></Link> <br />
        </div>
    )
  };

export default Footer