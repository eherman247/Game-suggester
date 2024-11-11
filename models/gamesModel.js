const mongoose = require('mongoose')

const Schema = mongoose.Schema

const createGameSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  hoursPlayed: {
    type: Number
  }
})

module.exports = mongoose.model('game', createGameSchema, "games")