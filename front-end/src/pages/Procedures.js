import { Link } from "react-router-dom"

const Procedures = (props) => {
    const loaded = () => {
        return (
            <div>
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
        return <h1>Loading...</h1>
    };

    return (
        <section>
            {props.procedures ? loaded() : loading()}
            <Link to="/procedure/create" className="button">Create</Link>
        </section>
    )
}

export default Procedures