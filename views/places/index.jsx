const React = require('react')
const Def = require('../default')


function index (data)
{
    //defining a variable named placesFormatted
    //the variable named placesFormatted will contain html and information in the variable named data
    //in other words placesFormatted will contain the value of html data
     let placesFormatted = data.places.map((place) => 
     {
      return (
      <div className="col-sm-6">
        <h2>
        <a href={`/places/${place.id}`} >
            {place.name}
        </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name}/>
        <p className="text-center">
            Located in {place.city}, {place.state}
        </p>
      </div>
      )
       })

  //finally index function returns the html in lines 23-28
  //placesFormatted variable defined above is now used on line 27                                       
  return (
    <Def>
        <main>
            <h1>Places I Like</h1>
            <div className="row">
               {placesFormatted}
            </div>
        </main>
    </Def>
  )
}




module.exports = index



