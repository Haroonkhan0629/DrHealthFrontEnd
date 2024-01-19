import "../index.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <h3>Developer Links:</h3>
            <Link to="https://www.linkedin.com/in/haroon-khan-0101z1010/"><h5>Haroon Khan</h5></Link>
            <Link to="https://www.linkedin.com/in/franciscruzjr/"><h5>Francis Cruz</h5></Link>
            <Link to="https://www.linkedin.com/in/bilananna/"><h5>Anna Bilan</h5></Link>
            <Link to="https://www.linkedin.com/in/mherrera491/"><h5>Matt Herrera</h5></Link> <br />
        </div>
    )
  };

export default Footer