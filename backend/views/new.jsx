const React = require("react");
const Default = require("./layouts/default");

const { useState } = React; // <-- added import statement

function New() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [residency, setResidency] = useState("Resident");
  const [comment, setComment] = useState("");
  const [subscriber, setSubscriber] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to handle form submission
    console.log("Name:", name);
    console.log("City:", city);
    console.log("Residency:", residency);
    console.log("Comment:", comment);
    console.log("Subscriber:", subscriber);
  };
  return (
    <Default>
      <div style={{ marginRight: "10px" }}>
        <nav style={{ backgroundColor: "#333", padding: "10px" }}>
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{ marginRight: "10px" }}>
              <a href="https://example.com">Weather page</a>
            </li>
            <li style={{ marginRight: "10px" }}>
              <a href="/apps">Comments</a>
            </li>
          </ul>
        </nav>
      </div>
      <h2 style={{ color: "green", textAlign: "center" }}>
        Share a New Comment
      </h2>

      <form
        action="/apps"
        method="POST"
        onSubmit={handleSubmit}
        style={{
          marginTop: "50px",
          marginBottom: "10px",
          backgroundColor:
            "linear-gradient(45deg,  rgba(66, 183, 245,0.8) 0%,rgba(66, 245, 189,0.4) 100%)",
          color: "$gray",
          //maxWidth: "80%",
          display: "flex",
          //   flexDirection: "column",
          //   color: "#000",
          fontSize: "19px",
          //   textAlign: "right",

          height: "16px",
          border: "5px solid #ddd",
          borderRadius: "4px",
          fontFamily: "'Rubik', sans-serif",
          display: "flex",
          backgroundColor: "#7CB9E8",
          width: "30vh",
          margin: "30px 100px 50px 410px",
          //   justifyContent: "center",
          alignAlign: "left",
          minHeight: "40vh",
          //   display: "flex",
          flexDirection: "column",
          padding: "70px 160px 200px 70px",
          color: "dark",
          //   fontSize: "120px",
        }}
        action="/apps"
        method="POST"
      >
        {/* <label for="name">User name</label> */}
        <input
          style={{
            fontSize: "20px",
            display: "block",
            marginBottom: "20px",
            minHeight: "40px",
            width: "320px",
          }}
          type="text"
          className="form-control"
          id="name"
          aria-describedby="name"
          placeholder="name"
        ></input>
        {/* <label for="city">City</label> */}
        <input
          style={{
            display: "block",
            marginBottom: "20px",
            minHeight: "40px",
            width: "320px",
            fontSize: "20px",
          }}
          type="text"
          className="form-control"
          id="city"
          aria-describedby="city"
          placeholder="city"
        ></input>
        {/* <label htmlFor="residency">Residency</label> */}
        <select
          style={{
            fontSize: "20px",
            display: "block",
            marginBottom: "20px",
            minHeight: "43px",
            width: "330px",
          }}
          name="residency"
          id="residency"
        >
          <option value="Resident">Resident</option>
          <option value="Non-Resident">Non-Resident</option>
        </select>
        {/* <label for="comment">Comment</label> */}
        <input
          style={{
            display: "block",
            marginBottom: "20px",
            minHeight: "130px",
            width: "330px",
            fontSize: "20px",
          }}
          type="text"
          name="comment"
          id="comment"
          aria-describedby="comments"
          placeholder="comments"
        />
        <label htmlFor="subscriber">Subscriber?</label>
        <input
          type="checkbox"
          name="subscriber"
          id="subscriber"
          defaultChecked
        />
        <br />
        {/* <input
          type="submit"
          value="Submit"
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
        ></input> */}

        <input
          type="submit"
          value="Submit"
          onClick={handleSubmit}
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
        />
        <a href="/apps">
          <div>Daily Weather</div>
        </a>
      </form>

      <div
        style={{ backgroundColor: "black", color: "white", padding: "20px" }}
      ></div>
    </Default>
  );
}

module.exports = New;
