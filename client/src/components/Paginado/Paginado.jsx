import React from "react";
import "../Paginado/Paginado.css"

export default function Paginado({countriesPerPage, countries, paginado, prevHandler, nextHandler,currentPage}){

    const pagesNumbers= []
    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) {
        pagesNumbers.push(i);
    }
    return (
        <nav className="paginadoContainer">
            <ul className="ul">
                
                {pagesNumbers && pagesNumbers.map (number=>(
                    <li key={number} className="paginas">
                        <button onClick={()=>paginado(number)} className="numeroPaginado" >{number}</button>
                    </li>
                ))}

            </ul>
                <button className="btnPage" onClick={prevHandler}>Prev</button>
                <button className="btnPage" onClick={nextHandler}>Next</button>
                <p className="currentPage">Pagina: {currentPage} </p>
        </nav>
    )



}