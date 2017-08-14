const express = require( 'express' )
const app = express()
const morgan = require( 'morgan' )
const port = 3000


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
  response.status(200).send( `response: ${daysOfWeek[day]}` )
})

app.listen( port, () => {
  console.log( `Your app is listening on port ${port}!` )
})
