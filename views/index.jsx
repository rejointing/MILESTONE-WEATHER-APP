const React = require('react')
const Default = require('./layouts/default')

function Index ({ apps }) {
    return (
      <Default>
        <h2>Index Page</h2>
        {
            apps.map((app, index) => {
                return (
                    <li key={index}>
                        <a href={`/apps/${index}`}>
                            {app.rate}
                        </a>
                    </li>
                )
            })
        }
      </Default>
    )
}

module.exports = Index
