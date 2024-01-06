import { useParams, Link } from "react-router-dom";

const Procedure = (props) => {
    const params = useParams()
    const id = params.id
    const procedures = props.procedures
    const procedure = procedures.find((procedure) => procedure._id === id)

    return (
        <div>
            <h1 className="item-heading">{procedure.name}</h1>
            <div>
                <h2>Cost: {procedure.cost}</h2>
                <p>{procedure.description}</p>
                <img src={procedure.image} /> <br />
                <Link to={`/procedure/${procedure._id}/edit`} className="button">Edit</Link> <br />
                <Link to="/procedure" className="button">Back</Link>
            </div>
        </div>
    )
}

export default Procedure