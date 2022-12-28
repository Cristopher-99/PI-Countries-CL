import React from "react";
import {Link} from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage(){
    return (
        <div className="landingPage">
            <div className="Landingtitle">
                <h1 >Bienvenidos a  mi PI de Countries</h1>
                <Link to = '/home'>
                    <button className="landingButton"> Iniciar </button>
                </Link>
            </div>
           
        </div>
    )
}