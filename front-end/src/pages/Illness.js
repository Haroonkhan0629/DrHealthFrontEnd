import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const Illness = (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const illnesses = props.illnesses
    const illness = illnesses.find((illness) => illness._id === id)

    const [editForm, setEditForm] = useState(illness)

    const handleChange = (event) => {
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateIllness(editForm, illness._id)
        navigate(`/illnesses/${id}`)
    }

    const removeIllness = (event) => {
        event.preventDefault()
        props.deleteIllness(illness._id)
        navigate("/illnesses")
    }

    return (
        <div className="illness">
            <h1>{illness.name}</h1>
            {/* <h2>{illness.symptoms}</h2>
            <p>{illness.description}</p> */}
            <img src={illness.image}/> <br/>
            <button className="delete" onClick={removeIllness}>
                Delete
            </button> <br/>
            <form onSubmit={handleSubmit} className="editform">
              <input
                  type="text"
                  value={editForm.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
              /> <br/>
              <input
                  type="text"
                  value={editForm.symptoms}
                  name="symptoms"
                  placeholder="symptoms"
                  onChange={handleChange}
              /> <br/>
              <input
                  type="text"
                  value={editForm.description}
                  name="description"
                  placeholder="description"
                  onChange={handleChange}
              /> <br/>
              <input
                  type="text"
                  value={editForm.image}
                  name="image"
                  placeholder="image URL"
                  onChange={handleChange}
              /> <br/>
              <input type="submit" value="Update Illness" />
          </form>
        </div>
    )
}

export default Illness