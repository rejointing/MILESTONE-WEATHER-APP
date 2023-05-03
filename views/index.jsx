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
            apps.map((app) => {
                return (
                    <li key={app.id}>
                        <a href={`/apps/${app.id}`}>
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
