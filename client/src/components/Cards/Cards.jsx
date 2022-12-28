import React , {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {getCountries} from "../../redux/actions"

import Paginado from "../Paginado/Paginado"
import Card from "../Card/Card"
import "./Cards.css"
// pendiente el PAGINADO y el CSS

export default function Home(){
    const dispatch= useDispatch();
    const activities= useSelector((state) => state.activities);

    const countries = useSelector((state) => state.countries);

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10);
    const lastCountry = currentPage * countriesPerPage;
    const firstCountry = lastCountry - countriesPerPage;
    const currentCountry = countries.slice(firstCountry, lastCountry);
    const [, setOrden] = useState("");

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    function reloadButton(e){
        e.preventDefault()
        dispatch(getCountries())
        }
    
    useEffect(() => {
        dispatch(getCountries());
    // dispatch(getActivities());
    }, [dispatch]);

  return (
    <div className="cardsContainer">
      <button id='b1' className='filterAndOrder' onClick={(e)=>reloadButton(e)}>Recargar</button>

      <div className='cardsBox'>
        {currentCountry?.map((country) => {
          return (
            <div className="Card" key={country.id}>
              <Link to={"/home/" + country.id}>
                <Card
                  name={country.name}
                  flag_img={country.flag_img}
                  continent={country.continent}
                  capital={country.capital}
                  population={country.population}
                  />
          
              </Link>
            </div>
          );
        })}
      </div>
      <Paginado
        countriesPerPage={countriesPerPage}
        countries={countries.length}
        paginado={paginado}
        />
    </div>
  );
}