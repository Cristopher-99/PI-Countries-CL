const { Router } = require("express");
const router = Router();
const {Country , Activity}= require("../db.js")
const { getActivities } = require("../controllers/getApiInfo.js");

//TODO  POST ---> /activities:

router.post("/", async(req,res) =>{
    const {name, difficulty, duration, season, countryId}= req.body;
    const createActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
        countryId,
    });
    const countries= await Country.findAll({
        where: {
            id: countryId,
        }
    });
    createActivity.addCountries(countries);
    res.status(200).send("Se creo correctamente la actividad "+ createActivity.name); /// trycatch
});
//TODO  GET ---> /activities:
router.get("/", async(req,res) => {
    const activities= await getActivities();
    res.status(200).send(activities);

});



module.exports = router;