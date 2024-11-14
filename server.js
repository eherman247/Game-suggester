require('dotenv').config()

// const keys = require('./config/keys')
const path = require('path')
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const exphbs = require("express-handlebars");
const cookieSession = require('cookie-session');
const passport = require('passport');

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json')

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'public')))

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
