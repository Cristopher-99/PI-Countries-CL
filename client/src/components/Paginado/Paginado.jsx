import React from "react";
import "../Paginado/Paginado.css"

export default function Paginado({countriesPerPage, countries, paginado}){
    
    const pagesNumbers= []
    for (let i = 0; i < Math.ceil(countries/countriesPerPage); i++) {
        
        pagesNumbers.push(i);
        
    }
    return (
        <nav className="paginadoContainer">
            <ul className="ul">
                {pagesNumbers && pagesNumbers.map (number=>(
                    <li key={number} className="paginas">
                        <a className="numeroPaginado"  href onClick={()=>paginado(number)}>{number} </a>
                    </li>
                ))}

            </ul>
        </nav>
    )



}