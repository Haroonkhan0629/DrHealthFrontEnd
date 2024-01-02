import { Link } from "react-router-dom"

const Illnesses = (props) => {
    const loaded = () => {
        return (
            <div>
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
        return <h1>Loading...</h1>
    };

    return (
        <section>
            {props.illnesses ? loaded() : loading()}
            <Link to="/illness/create" className="button">Create</Link>
        </section>
    )
}

export default Illnesses