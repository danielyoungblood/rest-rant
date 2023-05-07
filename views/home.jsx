const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
        <main>
            <h1>HOME</h1>
            <div> 
              <img src="/images/drink.jpg" alt="fruit drink" height="400px" width="400px" />
            </div>
             <div>
              Photo by <a href='https://unsplash.com/es/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Brenda Godinez</a> on <a href='https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
            </div>
          <a href="/places">
            <button className="btn btn-primary">Places Page</button>
          </a>
        </main>
    </Def>
  )
}

module.exports = home

