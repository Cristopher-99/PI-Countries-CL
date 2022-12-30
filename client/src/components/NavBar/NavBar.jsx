import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";

import "./NavBar.css"
export default function NavBar(){
    return (
        <div className="navBar">

            <div className="navContent">
                <Link className="navLink" to="/home">Home </Link>
                <Link className="navLink" to="/activity">Crear Actividad </Link>
                <Link className="navLink" to="/activities">Lista de Actividades </Link>
             </div>
                <SearchBar className="searchBar"/>
       
        </div>

    );
}

