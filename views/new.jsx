const React = require('react') 
const Default = require('./layouts/default') 

function New () { 
    return ( 
    <Default> 
        <h2>Share a New Comment</h2> 
        <div className="backButton">
            <a href="/apps"><button>Back to Weather Daily</button></a></div>
        <form action='/apps' method='POST'> 
            <label htmlFor="username">User Name</label> 
            <input 
            type="text"
            name="username" 
            id="username" 
            required
            /> 
        <label htmlFor="city">City</label> 
        <input 
        type="text" 
        name="city" 
        id="city"
        />
        <label htmlFor="comment">Comment</label> 
        <input 
        type="text" 
        name="comment" 
        id="comment"
        />  
        <label htmlFor="subscriber">Subscriber?</label> 
        <input 
        type="checkbox" 
        name="subscriber" 
        id="subscriber" 
        defaultChecked 
        /> 
        <br /> 
        <input type="submit"/> 
        </form> 
        </Default> 
    ) } 

        module.exports = New