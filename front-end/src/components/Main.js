import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Illnesses from "../pages/Illnesses"
import Illness from "../pages/Illness";
import Procedure from "../pages/Procedure";
import Procedures from "../pages/Procedures";
import About from '../pages/About';
import Home from '../pages/Home';
import "./Main.css"

const Main = (props) => {
    const [illnesses, setIllnesses] = useState(null)
    const [procedures, setProcedures] = useState(null)

    const URL = "http://localhost:4000/people/"
    const URL2 = "http://localhost:4000/test/"

    const getIllnesses = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setIllnesses(data.data)
    }

    const getProcedures = async () => {
        const response = await fetch(URL2);
        const data = await response.json();
        setProcedures(data.data)
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
                <Route path="/illnesses" element={<Illnesses illnesses={illnesses} createIllness={createIllness} />} />
                <Route path="/procedures" element={<Procedures procedures={procedures} createProcedure={createProcedure} />} />
                <Route path="/illnesses/:id" element={<Illness illnesses={illnesses} updateIllness={updateIllness} deleteIllness={deleteIllness} />} />
                <Route path="/procedures/:id" element={<Procedure procedures={procedures} updateProcedure={updateProcedure} deleteProcedure={deleteProcedure} />} />
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </main>
    )
}

export default Main