const { Router }= require("express");
const axios = require("axios");
const router= Router(); 
const { getDbinfo } = require("../controllers/getApiInfo");


// GET --->  /countries:   
// GET --->  /countries?name="...":  

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

//GET ---> /countries/{idPais}:
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
