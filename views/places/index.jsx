const React = require('react')
const Def = require('../default')

function index (data)
{
    //defining a variable named placesFormatted
    //the variable named placesFormatted will contain html and information in the variable named data
    //in other words placesFormatted will contain the value of html data
    let placesFormatted = data.places.map(
                                           (place) => {
                                                        return (
                                                                <div>
                                                                    <h2>{place.name}</h2>
                                                                    <img src={place.pic} alt={place.name}/>
                                                                </div>
                                                               )
                                                      }
                                         )

  //finally index function returns the html in lines 23-28
  //placesFormatted variable defined above is now used on line 27                                       
  return
  (
       <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
       </Def>
  )
}


module.exports = index



