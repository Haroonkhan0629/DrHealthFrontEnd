import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Illnesses from "../pages/Illnesses"
import Illness from "../pages/Illness";
import Procedure from "../pages/Procedure";
import Procedures from "../pages/Procedures";
import About from '../pages/About';
import Home from '../pages/Home';
import CreateIllness from "../pages/createIllness";
import EditIllness from "../pages/EditIllness";
import CreateProcedure from "../pages/createProcedure";
import EditProcedure from "../pages/editProcedure";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Main = () => {
    const [illnesses, setIllnesses] = useState(null)
    const [procedures, setProcedures] = useState(null)
    const [users, setUsers] = useState(null)

    const URL = "https://drhealthbackend.onrender.com/illness"
    const URL2 = "https://drhealthbackend.onrender.com/procedure"
    const URL3 = "https://drhealthbackend.onrender.com/auth/register"

    const getIllnesses = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setIllnesses(data.data)
    }

    const getProcedures = async () => {
        const response = await fetch(URL2)
        const data = await response.json()
        setProcedures(data.data)
    }

    const getUsers = async () => {
        const response = await fetch(URL3)
        const data = await response.json()
        setUsers(data.data)
    }

    const createIllness = async (illness) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(illness)
        });
        getIllnesses()
    };

    const createProcedure = async (procedure) => {
        await fetch(URL2, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(procedure)
        });
        getProcedures()
    };

    const createUser = async (user) => {
        await fetch(URL3, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        getUsers()
    };

    const updateIllness = async (illness, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(illness)
        });
        getIllnesses()
    }

    const updateProcedure = async (procedure, id) => {
        await fetch(URL2 + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(procedure)
        });
        getProcedures()
    }

    const deleteIllness = async (id) => {
        await fetch(URL + id, {
            method: "DELETE"
        });
        getIllnesses()
    }

    const deleteProcedure = async (id) => {
        await fetch(URL2 + id, {
            method: "DELETE"
        });
        getProcedures()
    }

    useEffect(() => {
        getIllnesses()
        getProcedures()
    }, []);


    return (
        <main>
            <Routes>
                <Route path="/illness" element={<Illnesses illnesses={illnesses} />} />
                <Route path="/procedure" element={<Procedures procedures={procedures} />} />
                <Route path="/illness/:id" element={<Illness illnesses={illnesses} />} />
                <Route path="/procedure/:id" element={<Procedure procedures={procedures} />} />
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register createUser={createUser} users={users} />} />
                <Route path="/illness/create" element={<CreateIllness illnesses={illnesses} createIllness={createIllness} />} />
                <Route path="/procedure/create" element={<CreateProcedure procedures={procedures} createProcedure={createProcedure} />} />
                <Route path="/illness/:id/edit" element={<EditIllness illnesses={illnesses} updateIllness={updateIllness} deleteIllness={deleteIllness} />} />
                <Route path="/procedure/:id/edit" element={<EditProcedure procedures={procedures} updateProcedure={updateProcedure} deleteProcedure={deleteProcedure} />} />
            </Routes>
        </main>
    )
}

export default Main