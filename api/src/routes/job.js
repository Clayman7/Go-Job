const { Router} = require('express');
const jobHandlers = require("../handlers/jobHandler");
const { auth, verifyRole } = require('../middlewares/auth');

const router = Router();
/*******GET ********* */
router.get("/", jobHandlers.getAllJobs);
router.get("/:id", jobHandlers.getIdJob);

/***** POST ******* */
router.post("/", jobHandlers.createJob);

//creacion hardcore de Jobs (solo en modo desarrollo)
router.post("/hardcore", jobHandlers.creacionDeJobsParaPruebas)

/****** DELETE ******** */
router.delete("/:id", jobHandlers.deleteJob);

/******** PUT ********* */
router.put("/:id", jobHandlers.actulizarJob);



module.exports = router;