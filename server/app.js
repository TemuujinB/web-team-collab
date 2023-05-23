const express = require('express');
const cors = require('cors');
const swaggerJSDocs = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const indexRouter = require('./router/router.js');
const PORT = 4000;

// Middleware
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cors());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Comsco API',
      version: '1.0.0',
    },
  },
  apis: ['app.js', './router/*.js'], // Files containing annotations
};

const openapiSpec = swaggerJSDocs(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpec));

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/', indexRouter);
