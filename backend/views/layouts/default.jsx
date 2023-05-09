const React = require("react");

function Default(html) {
  return (
    <html>
      <head>
        <title>Default</title>
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/weather.js" />
      </head>
      <body>
        <div className="wrapper">
          <header>
            <h1 style={{ color: "green", textAlign: "center" }}>
              <a href="/apps">WeatherDaily</a>
            </h1>
          </header>
          <div className="container">{html.children}</div>
        </div>
      </body>
    </html>
  );
}

module.exports = Default;
