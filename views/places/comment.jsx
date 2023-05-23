const React = require('react')
const Def = require('../default.jsx')

function comment_form (data) {
    return (
        <Def>
          <main>
            <h1>Adding Comment</h1>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
  <div className="form-group">
    <label htmlFor="author">author</label>
    <input className="form-control" id="author" name="author" required />
  </div>
  <div className="form-group">
    <label htmlFor="content">content</label>
    <textarea className="form-control" id="content" name="content" required />
    </div>
  <div className="form-group">
    <label htmlFor="stars">stars</label>
    <input type="range" step="0.5" min="1" max="5" className="form-control" id="stars" name="stars" required/>
  </div>
  <div className="form-group">
    <label htmlFor="rant">rant</label>
    <input type="checkbox" className="form-control" id="rant" name="rant" required/>
  </div>
  <input className="btn btn-primary" type="submit" value="Add Comment" />
</form>
          </main>
        </Def>
    )
}

module.exports = comment_form