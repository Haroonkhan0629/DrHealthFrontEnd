import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [newForm, setNewForm] = useState({
        username: "",
        password: ""
    });

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("https://drhealthbackend.onrender.com/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: newForm.username, password: newForm.password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Authentication successful:', data);
                navigate("/illness");
            } else {
                console.log('Authentication failed');
                alert("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error('Error during authentication:', error);
            alert("An error occurred during login.");
        }
    };

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

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
                <input type="submit" className="button" value="Login" />
            </form>
        </div>
    )
}

export default Login;