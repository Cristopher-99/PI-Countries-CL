const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const routerCountry = require('./Country.js'); 
const routerActivity = require("./Activity.js")
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", routerCountry);
router.use("/activity", routerActivity);

module.exports = router;
