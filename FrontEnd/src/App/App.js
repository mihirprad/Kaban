import React, {useState} from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";

import './App.css'

export default function App(){

    return(
        <Router>
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>

        </Router>
    )
}