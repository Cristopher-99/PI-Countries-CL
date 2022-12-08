const { Router }= require("express");
const { Country, Activity } = require("../db");
const axios = require("axios");
const router= Router(); 
const { getDbinfo } = require("../controllers/getApiInfo");

// GET /countries:
// - En una primera instancia deberán traer todos los países desde restcountries
// y guardarlos en su propia base de datos y luego ya utilizarlos desde allí 
// (Debe retonar sólo los datos necesarios para la ruta principal)
// - Obtener un listado de los paises.

// Únicos Endpoints/Flags que pueden utilizar
// GET https://restcountries.com/v3/all
// GET https://restcountries.com/v3/name/{name}
// GET https://restcountries.com/v3/alpha/{code}

//TODO  GET --->  /countries:   
//TODO  GET --->  /countries?name="...":  

router.get("/", async (req, res) =>{
    // con el Async hago un llamado asincrono a la api.
    const {name} = req.query;
    let countriesTotal= await getDbinfo();

    if(name){
        let countryName = await countriesTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
        countryName.length ?
        res.status(200).send(countryName):
        res.status(404).send(`No se encontro el Pais con el nombre "${name}"`);
    
    }
    else {
        res.status(200).send(countriesTotal);
    }
});

//TODO  GET ---> /countries/{idPais}:

router.get("/:id", async (req, res)=>{
    const {id} = req.params ;
    let countriesTotal = await getDbinfo();
    if (id) {
        let countryId = await countriesTotal.filter(el => el.id === id.toUpperCase());
        countryId.length ?
        res.status(200).send(countryId) :
        res.status(404).send(`No se encontro el Pais con el id "${id}"`);

    } 
});

module.exports= router;
