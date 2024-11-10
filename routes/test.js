const express = require('express')
const app = express()

app.use(express.json());
const {
  joeRoute
} = require("../controllers/testController")

const router = express.Router()

router.get('/', joeRoute)

module.exports = router

