import { useNavigate, Link } from "react-router-dom"
import { useState } from "react";

const CreateIllness = (props) => {
    const navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        name: "",
        symptoms: "",
        description: "",
        image: ""
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createIllness(newForm)
        setNewForm({
            name: "",
            symptoms: "",
            description: "",
            image: ""
        })
        navigate("/illness")
    }
    return (
        <div>
            <h1 className="form-heading">Add Illness</h1>
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
                    value={newForm.symptoms}
                    name="symptoms"
                    placeholder="symptoms"
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
                <input type="submit" className="button" value="Create" /> <br/>
                <Link to="/illness" className="button">Back</Link>
            </form>
        </div>
    )
}

export default CreateIllness