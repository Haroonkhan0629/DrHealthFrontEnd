import { useNavigate, useHistory } from "react-router-dom"
import { useState, useEffect } from "react";

const Login = (props) => {
    const URL = "https://drhealthbackend.onrender.com/auth/logout"
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handleLogin = async () => {
        try {
          const response = await fetch("https://drhealthbackend.onrender.com/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        console.log(response)
      
          if (response.ok) {
            // Successful authentication
            const data = await response.json();
            console.log('Authentication successful:', data);
          } else {
            // Authentication failed
            console.log('Authentication failed');
          }
        } catch (error) {
          console.error('Error during authentication:', error);
        }
      };


    const [newForm, setNewForm] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     setNewForm({
    //         username: "",
    //         password: ""
    //     })
    //     navigate("/illness")
    // }


    return (
        <div>
            <h1 className="form-heading">Login</h1>
            <form onSubmit={handleLogin}>
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
                <input type="submit" className="button" value="Login" /> <br />
            </form>
        </div>
    )
}

export default Login