import { useNavigate, useParams, Link } from "react-router-dom"
import { useState } from "react";

const EditIllness = (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const illnesses = props.illnesses
    const illness = illnesses.find((illness) => illness._id === id)

    const [editForm, setEditForm] = useState(illness)

    const handleChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateIllness(editForm, illness._id)
        navigate(`/illness/${id}`)
    }

    const removeIllness = (event) => {
        event.preventDefault()
        props.deleteIllness(illness._id)
        navigate("/illness")
    }

    return (
        <div>
            <h1 className="item-heading">Change Illness</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                /> <br />
                <input
                    type="text"
                    value={editForm.symptoms}
                    name="symptoms"
                    placeholder="Symptoms"
                    onChange={handleChange}
                /> <br />
                <input
                    type="text"
                    value={editForm.description}
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                /> <br />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                /> <br />
                <input type="submit" className="button" value="Update" /> <br />
                <button className="button" onClick={removeIllness}>Delete</button> <br />
                <Link to={`/illness/${illness._id}`} className="button space">Back</Link>
            </form>
        </div>
    )
}

export default EditIllness