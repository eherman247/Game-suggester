require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json')


app
  // .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(cors())
  .use(express.json())




app.use('/', require('./routes/index'))
app.use('/games', require('./routes/games'))

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
