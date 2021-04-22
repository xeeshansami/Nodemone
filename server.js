const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/test', (req, res) => {
  
  res.send(
    {
      "code":200,
      "message":'Hello World!',
      "data":{} 
    })
})

app.get("/list_movies", (req, res) => {
    fs.readFile(__dirname + '/' + 'movies.json', 'utf8', (err, data) => {
        res.end({data});
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})