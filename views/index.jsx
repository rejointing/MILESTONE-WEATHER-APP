const React = require('react')
const Default = require('./layouts/default')

function Index ({ apps }) {
    return (
      <Default>
        <h2>Index Page</h2>
        <div className="newButton">
        <a href="/apps/new"><button>Add a New Comment!</button></a>
        </div>
        {
            apps.map((app, index) => {
                return (
                    <li key={index}>
                        <a href={`/apps/${index}`}>
                            {app.comment}
                        </a>
                    </li>
                )
            })
        }
      </Default>
    )
}

module.exports = Index
