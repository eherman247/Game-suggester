const mongoose = require('mongoose')

const Schema = mongoose.Schema

const createGameSchema = new Schema({
  title: {
    type: String
  }
})

module.exports = mongoose.model('game', createGameSchema, "games")