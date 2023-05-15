const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div id="name">
              <h1>{data.place.name}</h1>
            </div>
            <div class="container" id="pic_info">
               <img class="styles" src ={data.place.pic} alt="picture of restraunt" height="400" width="400" 
               />
               <div>
                  <div>
                    <h2>Rating</h2>
                    <p>Not Rated</p>
                  </div>
                  <div>
                    <h2>Description</h2>
                    <p>Located in Phoenix, AZ and serving area</p>
                  </div>
               </div>
            </div>
            <div id="comments">
              <h2>Comments</h2>
              <p>No comments yet!</p>
            </div>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
              </a> 
              <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
          </main>
        </Def>
    )
}

module.exports = show
