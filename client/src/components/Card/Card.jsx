import React from "react"
import "./Card.css"

export default function Card({name,flag_img,continent, capital,population,id}){
    return (
        <div className="cardContainer">
            <h2 className="titleCard">{name}</h2>
            <img className="cardImg" src={flag_img} alt="Imagen no encontrada" width='250px' height='175px'/>
            <div className="infoContainer">
                <h5>Capital: {capital}</h5>
                <h5>Continente: {continent}</h5>
                <h5>Poblacion: {population} /hab</h5>
                
            </div>
        </div>
    )
}