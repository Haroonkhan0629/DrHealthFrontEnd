import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Illnesses = (props) => {
    const navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        name: "",
        symptoms: "",
        description: "",
        image: ""
      });

      const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
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
        navigate("/illnesses")
      }

    const loaded = () => {
        return props.illnesses.map((illness) => (
            <div className="illnesses">
                <Link to={`/illnesses/${illness._id}`}><h3>{illness.name}</h3></Link>
            </div>
        ));
    }

    const loading = () =>{
        return <h1>Loading...</h1>
    };

    return (
        <section>
        {props.illnesses ? loaded() : loading()}
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
            value={newForm.symptoms}
            name="symptoms"
            placeholder="symptoms"
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
          <input type="submit" value="Add Illness" />
        </form>
      </section>
    )
}

export default Illnesses