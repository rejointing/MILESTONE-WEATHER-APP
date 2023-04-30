const React = require('react')
const Default = require('./layouts/default')

function Show({ app, index }) {
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{app.comment}</h3>
            <h3>{app.username}, {app.city}</h3>
            <p>Subscriber: {String(app.subscriber)}</p>
            <form action={`/apps/${index}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>    
            </form>
        </Default>
    )
}

module.exports = Show