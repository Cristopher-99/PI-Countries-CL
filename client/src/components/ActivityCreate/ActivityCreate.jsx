import React, {useEffect, useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { postActivities, getActivities, getCountries } from "../../redux/actions";
import { INVIERNO, VERANO, OTOÑO, PRIMAVERA  } from "../../Const/Const";
import NavBar from "../NavBar/NavBar"
import "./ActivityCreate.css"

//Validate
function validate (input){
    let errors ={};
    if(!input.name){
        errors.name= "Debe colocar un Nombre";
    } else if (!input.duration){
        errors.duration= "Debe colocar una Duracion";
    } else if (!input.difficulty){
        errors.difficulty= "Debe seleccionar la Dificultad";
    } else if (!input.season){
        errors.season= "Debe seleccionar la Temporada";
    } else if (input.countryId === []){
        errors.countryId= "Debe seleccionar un Pais";
    }
    return errors;
}

export default function ActivityCreate(){
    const dispatch= useDispatch();
    const history= useHistory();
    const countries =useSelector((state)=> state.allCountries);
    const [errors, setErrors] = useState({});

    const [input, setInput]= useState({
        name: "",
        duration: "",
        difficulty: "",
        season: "",
        countryId: [],
    });
/// CONFIGURE EL USEEFFECT CON EL GET COUNTIRES POR EL ERROR DE CREAR ACTIVIDAD
    useEffect(()=> {
        dispatch(getCountries());
        dispatch(getActivities());
    }, [dispatch]);

    function handleChange(e){
        setInput ({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }
    function handleDelete(i){
        setInput({
            ...input,
            countryId: input.countryId.filter((el)=> el !== i),
        });

    }
    function handleSelect(e){
        setInput({
            ...input, 
            countryId: [...input.countryId, e.target.value]
        });
    }
    function handleSubmit(e){
        e.preventDefault();
        if(input.name === "" ||
         input.duration ==="" ||
         input.difficulty === "" ||
         input.season === "" ||
         input.countryId.length === 0) return alert("Debe llenar los campos");
         dispatch(postActivities(input));
         alert("Actividad Creada");

         setInput({
            name: "",
            duration: "",
            difficulty: "",
            season: "",
            countryId: [],
         });
         history.push("/home");
    }

    return (
        <div className="ActivityCreate">
            <div>
                <NavBar/>
            </div>
            <div className="activityCardContainer">
                <div className="activityCard">

                    <div className="activityTitle">
                        <h2>Crea una Actividad </h2>
                    </div>
                    <form className="formActivity" onSubmit={handleSubmit}>
                        <div className="inputActivities">
                            <label className="labelActivity"> Nombre </label>
                            <input 
                                className="i" 
                                type= "text" 
                                placeholder= "Coloque una Actividad..."
                                value= {input.name}
                                name= "name"
                                onChange={handleChange}
                            />
                            {errors.name && <label className="e">{errors.name}</label>}
                        </div>

                        <div className="inputActivities">
                            <label> Duracion (hs): </label>
                            <input
                                className="i"
                                type="text"
                                value={input.duration}
                                name="duration"
                                placeholder="Coloque la Duracion..."
                                onChange={handleChange}
                            />
                            {errors.duration && <label className="e">{errors.duration}</label>}
                        </div>

                        <div className="inputActivities">
                            <label> Dificultad: {input.difficulty}</label>
                            
                            <input
                                className="i"
                                type="range"
                                name="difficulty"
                                min="1"
                                max="5"
                                inlist="1"
                                value={input.difficulty}
                                onChange={(e)=> handleChange(e)}
                            />
                            {errors.difficulty && <label className="e">{errors.difficulty}</label>}
                        </div>

                        <div className="inputActivities">
                            <label>Temporada </label>
                            <select 
                                className="i" 
                                name="season" 
                                value={input.season} 
                                onChange={(e) => handleChange(e)}
                             > 
                                <option className="op"> Temporada </option>
                                <option className="op" value={INVIERNO}>Invierno</option>
                                <option className="op" value={VERANO}>Verano</option>
                                <option className="op" value={OTOÑO}>Otoño</option>
                                <option className="op" value={PRIMAVERA}>Primavera</option>
                            </select>
                            {errors.season && <label className="e">{errors.season}</label>}
                        </div>

                        <div>
                          {errors.countryId && <label className="e">{errors.countryId}</label>}

                          <div className="inputActivities">
                           <label>Selecciona : </label>
                            <select className="i" onChange={(e)=>handleSelect(e)}>
                                <option className="op"> Paises </option>
                                {countries.map((v)=>(
                                    <option className="op" value={v.id}>{v.name}</option>
                                    ))}
                            </select>
                           </div>
                           <div className="textArea">
                            {input.countryId.map((country)=>(
                                <div className="countrieAndButton">
                                    <input className="btnDelete" type="button" value="X" onClick={()=> handleDelete(country)}/>
                                    <p className="pOfCountry">{country}</p>
                                </div>
                             ))}    
                            </div>
                        </div>
                        <div>
                            <button className="btnActivity" type="submit" >Crear Actividad</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )



}