const React = require('react')

function Def (html) {
  return (
      <html>
          <head>
              <title>Title</title>
          </head>
          <body>
              {html.children}
          </body>
      </html>
  )
}

//this allows the name Def to be used in other files , without modules.exports=Def you can use the name Def in other files
module.exports = Def