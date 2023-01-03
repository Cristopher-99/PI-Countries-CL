import React from "react";
import "../Paginado/Paginado.css"

export default function Paginado({countriesPerPage, countries, paginado, prevHandler, nextHandler}){

    const pagesNumbers= []
    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) {
        pagesNumbers.push(i);
    }
    return (
        <nav className="paginadoContainer">
            <ul className="ul">
                {pagesNumbers && pagesNumbers.map (number=>(
                    <li key={number} className="paginas">
                        <button href onClick={()=>paginado(number)} className="numeroPaginado" >{number}</button>
                    </li>
                ))}

            </ul>
                <button className="prevPage" onClick={prevHandler}>prev</button>
                <button className="nextPage" onClick={nextHandler}>next</button>
        </nav>
    )



}