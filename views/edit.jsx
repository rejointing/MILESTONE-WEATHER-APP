const React = require('react') 
const Default = require('./layouts/default') 

function Edit ({ app }) { 
    return ( 
    <Default> 
        <h2>Edit a Comment</h2> 
        <form action={`/apps/${app.id}?_method=PUT`} method='POST'> 
            <label htmlFor="username">Username</label> 
            <input 
                type="text" 
                username="username" 
                id="username" 
                required
                defaultValue={app.username} 
            /> 
            <label htmlFor="city">City</label> 
            <input 
                type="text" 
                name="city" 
                id="city"
                defaultValue={app.city}
            />
            <label htmlFor="comment">Comment</label> 
            <input 
                type="text" 
                name="comment" 
                id="comment"
                defaultValue={app.comment}
            />
            <label htmlFor="residency">Residency</label>
            <select name="residency" id="residency" defaultValue={app.residency}>
                <option value="Resident">Resident</option>
                <option value="Non-Resident">Non-Resident</option>
            </select> 
            <label htmlFor="subscriber">Subscribed?</label> 
            <input 
                type="checkbox" 
                name="subscriber" 
                id="subscriber" 
                defaultChecked={app.subscriber}
            /> 
            <br /> 
            <input 
                type="submit"
            /> 
            </form> 
            </Default> 
        ) } 
        
        module.exports = Edit
