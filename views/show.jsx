const React = require('react')
const Default = require('./layouts/default')

function Show({ app, index }) {
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{app.comment}</h3>
            <p>{String(app.username)}, {app.city}</p>
            <p>Subscribed: {String(app.subscriber)}</p>
            <a href={`/apps/${index}/edit`}>
                <button>Edit</button>
            </a>
            <form action={`/apps/${index}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>    
            </form>
        </Default>
    )
}

module.exports = Show