const Game = require('../models/gamesModel')
const mongoose = require('mongoose')

const getGames = async (req, res) => {
  const games = await Game.find({}).sort()

  res.status(200).json(games)
}

const getGame = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such game"})
  }

  const game = await Game.findById(id)

  if(!game) {
    return res.status(404).json({error: "No such game"})
  }

  res.status(200).json(game)
}

// create a new game
const createGame = async (req, res) => {
  
  const {title, hoursPlayed} = req.body
  // let stuff = req.body
  // console.log(stuff)
  // add to db
  try{
    const game = await Game.create({title, hoursPlayed})
    res.status(200).json(game)
  }catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a game
const deleteGame = async (req, res) => {
const {id} = req.params

if(!mongoose.Types.ObjectId.isValid(id)){
  return res.status(404).json({error: "No such game"})
}

const game = await Game.findOneAndDelete({_id: id})

if(!game) {
  return res.status(400).json({error: "No such game"})
}

res.status(200).json(game)
}

// update a game
const updateGame = async (req, res) => {
const {id} = req.params

if(!mongoose.Types.ObjectId.isValid(id)){
  return res.status(404).json({error: "No such game"})
}

const game = await Game.findOneAndUpdate({_id: id}, {
  ...req.body
})

if(!game) {
  return res.status(400).json({error: "No such game"})
}

res.status(204).json(game)
}

module.exports = {getGames,
   getGame,
   createGame, 
   deleteGame,
   updateGame}