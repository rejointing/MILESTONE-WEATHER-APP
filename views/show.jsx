const React = require('react')
const Default = require('./layouts/default')

function Show({ app }) {
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{app.comment}</h3>
            <p>{String(app.username)}, {app.residency} of {app.city}</p>
            <p>Subscribed: {app.subscriber}</p>
            <a href={`/apps/${app.id}/edit`}>
                <button>Edit</button>
            </a>
            <form action={`/apps/${app.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>    
            </form>
        </Default>
    )
}

module.exports = Show