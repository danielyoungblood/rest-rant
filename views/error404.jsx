const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <center> 
            <p>Oops, sorry, we can't find this page!</p>
            <img src="https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=900&name=shutterstock_774749455.jpg" alt="error404" />
            <div>
                photo provided by the website <a href="https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=900&name=shutterstock_774749455.jpg"> blog.thomasnet.com</a>
            </div>
            </center>
        </main>
    </Def>
  )
}

module.exports = error404
