const {Router} = require('express')

const router = Router();

const getall = require('./GetAll.js')
const getEpisodes = require('./Charge-episode.js');
const CreateCharacter = require('./PostCharacter.js')
const postuser = require("./PostUser.js")

router.use('/characters', getall)
router.use('/episodes', getEpisodes)
router.use('/createcharacter', CreateCharacter)
router.use("/postuser", postuser)


module.exports = router