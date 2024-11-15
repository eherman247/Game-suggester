const express = require('express')
const app = express()

app.use(express.json());
const {
  getGames,
  getGame,
  createGame,
  deleteGame,
  updateGame
} = require("../controllers/gamesController.js")

const authCheck = (req, res, next) => {
  if(!req.user){
    res.redirect('/auth/login');
  }else{
    next();
  }
}

const router = express.Router()

router.get('/', authCheck, getGames)

router.get('/:id', authCheck, getGame)

router.post('/', authCheck, createGame)

router.delete('/:id', authCheck, deleteGame)

router.put('/:id', authCheck, updateGame)

module.exports = router