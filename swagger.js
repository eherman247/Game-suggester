const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config()

const doc = {
  info: {
    title: 'My API'
  },
  host: 'cse-341-jzht.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)