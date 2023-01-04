import React from "react";
import "../ActivitiesList/ActivitiesList"

export default function Activity({name, difficulty, duration, season}){
    return (
        <div>
            <div className="divActivityContainer">
                <h2 className="h2Activity">{name}</h2>
                <h3 className="h3Activity">Duracion: {duration}</h3>
                <h3 className="h3Activity">Temporada: {season}</h3>
                <h3 className="h3Activity">Dificultad: {difficulty}</h3>

            </div>
        </div>
    )
}