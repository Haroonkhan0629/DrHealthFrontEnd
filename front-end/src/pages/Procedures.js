import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Procedures = (props) => {
    const navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        name: "",
        cost: "",
        description: "",
        image: ""
      });

      const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
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
        navigate("/procedures")
      }

    const loaded = () => {
        return props.procedures.map((procedure) => (
            <div className="procedures">
                <Link to={`/procedures/${procedure._id}`}><h3>{procedure.name}</h3></Link>
            </div>
        ));
    }

    const loading = () =>{
        return <h1>Loading...</h1>
    };

    return (
        <section>
        {props.procedures ? loaded() : loading()}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          /> <br/>
          <input
            type="text"
            value={newForm.cost}
            name="cost"
            placeholder="cost"
            onChange={handleChange}
          /> <br/>
          <input
            type="text"
            value={newForm.description}
            name="description"
            placeholder="description"
            onChange={handleChange}
          /> <br/>
          <input
            type="text"
            value={newForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
          /> <br/>
          <input type="submit" value="Add Procedure" />
        </form>
      </section>
    )
}

export default Procedures