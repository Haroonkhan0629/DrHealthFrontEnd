import { useParams, Link } from "react-router-dom";

const Illness = (props) => {
    const params = useParams()
    const id = params.id
    const illnesses = props.illnesses
    const illness = illnesses.find((illness) => illness._id === id)

    return (
        <div>
            <h1 className="item-heading">{illness.name}</h1>
            <div>
                <h2>Symptoms: {illness.symptoms}</h2>
                <p>{illness.description}</p>
                <img src={illness.image} /> <br />
                <Link to={`/illness/${illness._id}/edit`} className="button">Edit</Link> <br />
                <Link to="/illness" className="button space">Back</Link>
            </div>
        </div>
    )
}

export default Illness