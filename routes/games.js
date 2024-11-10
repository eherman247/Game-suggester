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

const router = express.Router()

router.get('/', getGames)

router.get('/:id', getGame)

router.post('/', createGame)

router.delete('/:id', deleteGame)

router.put('/:id', updateGame)

module.exports = router