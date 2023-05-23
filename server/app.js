const express = require('express')
const cors = require('cors')
const swaggerJSDocs = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')


const app = express()
const indexRouter= require('./router/router.js')
const PORT = 4000

// middleware
app.use(express())

app.use(cors())

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Comsco api',
        version: '1.0.0',
      },
    },
    apis: ['app.js', './router/*.js'], // files containing annotations as above
};
    
const openapiSpec = swaggerJSDocs(options);
    
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup( openapiSpec));

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next()    
})  

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
}) 


// import indexRouter from './routes/index.js'



app.use('/api/', indexRouter)
