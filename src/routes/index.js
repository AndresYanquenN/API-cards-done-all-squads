const { Router } = require('express')
const path = require('path')
const fs = require('fs')
const router = Router()
const cards= require('../controllers/cards');
const squads = require('../controllers/squads')
const returningAllSquads = require('../controllers/allsquads')
/* const getTalentResults = require('../controllers/cards') */




const priority = ['Medium', 'High', 'Highest']
const typeBug = ['Bug', 'Post-release bug']

// Routes



/* router.get('/talent', cards.getTalentResults);
router.get('/savetalent',  cards.saveDataTalent);
router.get('/count/:squad', squads.counterSquad); */
router.get('/allsquads', returningAllSquads.fetchAllSquads );


module.exports = router;