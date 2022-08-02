import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Navigation from "./components/Navbar";
import Content from "./components/Content";
import { Card, Button } from "react-bootstrap";
import { api_token } from "./config";

function App() {
  const [repoData, setRepoData] = useState();

  function repoDataUrl() {
    const headers = {
      Authorization: `Token ${api_token}`,
    };

    fetch("https://api.github.com/users/Malediktus/repos", {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          const list = result.map((item, index) => (
            <div
              style={{
                position: "absolute",
                margin: "90px",
                top: "1300px",
                left: `${170 + (1500 / result.length) * index}px`,
                width: "100px",
                color: "lightgrey",
                fontFamily: "'Dosis', sans-serif",
                fontSize: "25px",
              }}
            >
              <Card style={{ width: "18rem", height: "700px" }}>
                <Card.Img variant="top" src={item.owner.avatar_url} />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    {item.name}
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    {item.description}
                  </Card.Text>
                  <Card.Text style={{ color: "darkgrey" }}>
                    {item.language}
                  </Card.Text>
                  <Button href={item.html_url} variant="primary">
                    Go to Repository
                  </Button>
                </Card.Body>
              </Card>

              <br />
              <br />
              <br />
            </div>
          ));
          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  repoDataUrl();

  return (
    <div className="App">
      <Navigation />
      <div
        style={{
          position: "fixed",
          background: "linear-gradient(180deg, #000000 0%, #10502D 100%)",
          width: "100%",
          height: "100vh",
          margin: "0px",
        }}
      ></div>
      <Content />
      {repoData}
    </div>
  );
}

export default App;
