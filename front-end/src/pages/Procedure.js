import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const Procedure = (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const procedures = props.procedures
    const procedure = procedures.find((procedure) => procedure._id === id)

    const [editForm, setEditForm] = useState(procedure)

    const handleChange = (event) => {
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateProcedure(editForm, procedure._id)
        navigate(`/procedures/${id}`)
    }

    const removeProcedure = (event) => {
        event.preventDefault()
        props.deleteProcedure(procedure._id)
        navigate("/procedures")
    }

    return (
        <div className="procedure">
            <h1>{procedure.name}</h1>
            {/* <h2>{procedure.cost}</h2>
            <p>{procedure.description}</p>
            <img src={procedure.image}/> */} <br/>
            <button className="delete" onClick={removeProcedure}>
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
                  value={editForm.cost}
                  name="cost"
                  placeholder="cost"
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
              <input type="submit" value="Update Procedure" />
          </form>
        </div>
    )
}

export default Procedure