import "../index.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <h1>Developer Links:</h1>
            <Link to="https://www.linkedin.com/in/haroon-khan-0101z1010/"><h4>Haroon Khan</h4></Link>
            <Link to="https://www.linkedin.com/in/franciscruzjr/"><h4>Francis Cruz</h4></Link>
            <Link to="https://www.linkedin.com/in/bilananna/"><h4>Anna Bilan</h4></Link>
            <Link to="https://www.linkedin.com/in/mherrera491/"><h4>Matt Herrera</h4></Link> <br />
        </div>
    )
  };

export default Footer