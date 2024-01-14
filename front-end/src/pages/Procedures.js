import { Link } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";

const Procedures = (props) => {
    const loaded = () => {
        return (
            <div className="item-container">
                <h1 className="item-heading">Procedures</h1>
                <div className="items">
                    {props.procedures.map((procedure) => (
                        <div className="item">
                            <Link to={`/procedure/${procedure._id}`} className="item-link"><h3>{procedure.name}</h3></Link>
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
            {props.procedures ? loaded() : loading()}
            <Link to="/procedure/create" className="button space">Create</Link>
        </section>
    )
}

export default Procedures