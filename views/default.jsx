const React = require('react')

function Def (html) {
  return (
      <html>
          <head>
              <title>Title</title>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
              <link rel="stylesheet" href="/css/style.css"/>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script> 
          </head>
          <body>
              {html.children}
          </body>
      </html>
  )
}

//this allows the name Def to be used in other files , without modules.exports=Def you can use the name Def in other files
module.exports = Def