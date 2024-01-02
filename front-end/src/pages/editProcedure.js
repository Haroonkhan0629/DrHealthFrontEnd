import { useNavigate, useParams, Link } from "react-router-dom"
import { useState } from "react";

const EditProcedure = (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const procedures = props.procedures
    const procedure = procedures.find((procedure) => procedure._id === id)

    const [editForm, setEditForm] = useState(procedure)

    const handleChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateProcedure(editForm, procedure._id)
        navigate(`/procedure/${id}`)
    }

    const removeProcedure = (event) => {
        event.preventDefault()
        props.deleteProcedure(procedure._id)
        navigate("/procedure")
    }

    return (
        <div>
            <h1 className="form-heading">Change Procedure</h1>
            <form onSubmit={handleSubmit} className="editform">
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                /> <br />
                <input
                    type="text"
                    value={editForm.cost}
                    name="cost"
                    placeholder="cost"
                    onChange={handleChange}
                /> <br />
                <input
                    type="text"
                    value={editForm.description}
                    name="description"
                    placeholder="description"
                    onChange={handleChange}
                /> <br />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                /> <br />
                <input type="submit" className="button" value="Update" /> <br />
                <button className="button" onClick={removeProcedure}>Delete</button> <br />
                <Link to={`/procedure/${procedure._id}`} className="button">Back</Link>
            </form>
        </div>
    )
}

export default EditProcedure