import { useNavigate, Link } from "react-router-dom"
import { useState } from "react";

const CreateProcedure = (props) => {
    const navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        name: "",
        cost: "",
        description: "",
        image: ""
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createProcedure(newForm)
        setNewForm({
            name: "",
            cost: "",
            description: "",
            image: ""
        })
        navigate("/procedure")
    }
    return (
        <div>
            <h1 className="form-heading">Add Procedure</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                /> <br />
                <input
                    type="text"
                    value={newForm.cost}
                    name="cost"
                    placeholder="cost"
                    onChange={handleChange}
                /> <br />
                <input
                    type="text"
                    value={newForm.description}
                    name="description"
                    placeholder="description"
                    onChange={handleChange}
                /> <br />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                /> <br />
                <input type="submit" className="button" value="Create" /> <br />
                <Link to="/procedure" className="button">Back</Link>
            </form>
        </div>
    )
}

export default CreateProcedure