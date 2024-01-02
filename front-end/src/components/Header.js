import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div className="nav">
            <Link to="/home" className="navlink"><div>Home</div></Link> <br/>
            <Link to="/illnesses" className="navlink"><div>Illnesses</div></Link><br/>
            <Link to="/procedures" className="navlink"><div>Procedures</div></Link><br/>
            <Link to="/about" className="navlink"><div>About</div></Link>
        </div>
    )
}

export default Header
