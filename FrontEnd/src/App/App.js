import React, {useContext,useState} from "react"
import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom';
import Home from "./Home";
import Login from "../Login/Login";
import './App.css'
import { AuthContext } from "../Store/auth-context";

export default function App(){
    const {isLoggedIn} = useContext(AuthContext);
    return(
            <Router>
                <Routes>
                    <Route exact path="/home"
                        element = {isLoggedIn ?  <Home />: <Login/>} />
                    <Route exact path="/login" element={<Login />} />
                </Routes>
            </Router>
    )
}