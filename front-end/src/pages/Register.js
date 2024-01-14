import { useNavigate } from "react-router-dom"
import { useState } from "react";

const Register = (props) => {
    const navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createUser(newForm)
        console.log(props.users)
        setNewForm({
            username: "",
            password: ""
        })
        navigate("/auth/login")
    }

    return (
        <div>
            <h1 className="item-heading">Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.username}
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                /> <br />
                <input
                    type="password"
                    value={newForm.password}
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                /> <br />
                <input type="submit" className="button" value="Register" /> <br />
            </form>
        </div>
    )
}

export default Register