const React = require("react");
const Default = require("./layouts/default");

function Show({ app }) {
  return (
    <Default>
      <h2>Show Page</h2>
      <h3>{app.comment}</h3>
      <p>{app.getPostBy()}</p>
      <p>Subscribed: {app.subscriber}</p>
      <a
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          minHeight: "40px",
          width: "250px",
          margin: "10px 50px 70px 40px",
          justifyContent: "center",
        }}
        href={`/apps/${app.id}/edit`}
      >
        <button>Edit</button>
      </a>
      <form action={`/apps/${app.id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
    </Default>
  );
}

module.exports = Show;
