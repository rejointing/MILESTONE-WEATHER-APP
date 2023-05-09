const React = require("react");
const Default = require("./layouts/default");

function Index({ apps }) {
  return (
    <Default>
      {/* <h2>Index Page</h2> */}
      <div className="newButton">
        <a href="/apps/new">
          <button
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
              //   display: "grid",
              placeItems: "center",
            }}
          >
            Add a New Comment!
          </button>
        </a>
      </div>
      {apps.map((app) => {
        return (
          <li key={app.id}>
            <a href={`/apps/${app.id}`}>{app.comment}</a>
          </li>
        );
      })}
    </Default>
  );
}

module.exports = Index;
