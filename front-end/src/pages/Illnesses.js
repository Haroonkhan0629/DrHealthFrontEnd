import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Illnesses = (props) => {
    const loaded = () => {
        return (
            <div className="item-container">
                <h1 className="item-heading">Illnesses</h1>
                <div className="items">
                    {props.illnesses.map((illness) => (
                        <div className="item">
                            <Link to={`/illness/${illness._id}`} className="item-link"><h3>{illness.name}</h3></Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    const loading = () => {
        return (
            <div className="loader">
                <ClipLoader />
            </div>
        )
    };

    return (
        <section>
            {props.illnesses ? loaded() : loading()}
            <Link to="/illness/create" className="button space">Create</Link>
        </section>
    )
}

export default Illnesses