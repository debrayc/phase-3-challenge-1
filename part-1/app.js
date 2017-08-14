const express = require( 'express' )
const app = express()
const bodyParser = require('body-parser')
const morgan = require( 'morgan' )
const port = 3000

const jsonParser = bodyParser.json()

app.use( morgan('combined') )


app.get( '/api/days/:day', ( request, response ) => {
  let day = request.params.day.toLowerCase()
  let daysOfWeek = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7,
  }
  !daysOfWeek[day] ?
  response.status(400).send( `response: '${day}' is not a valid day!` ) :
  response.status(200)
    .set('Content-Type', 'text/plain')
    .send( `response: ${daysOfWeek[day]}` )
})

app.post( '/api/array/concat', jsonParser, ( request, response ) => {

  let array1 = request.body.array1
  let array2 = request.body.array2
  let result = array1.concat(array2)

  Array.isArray(array1) && Array.isArray(array2) ?
  response.header('content-type', 'application/json')
    .json( {"result": result} ) :
  response.status(400)
    .header('content-type', 'application/json')
    .json( {"error": "Input data should be of type Array."} )
})


app.listen( port, () => {
  console.log( `Your app is listening on port ${port}!` )
})
