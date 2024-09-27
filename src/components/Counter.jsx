import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [lighttheme, settheme] = useState(true);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDeccrement = () => {
    setCount(count - 1);
  };
  return (
    <Container className="d-flex mw-100 flex-row justify-content-center align-items-center p-4 bg-secondary bg-gradient" >
      {" "}
      <Card
        style={{ width: "18rem" }}
        className={`${lighttheme ? "bg-dark" : "bg-white"} text-light m-4`}
      >
        <Card.Body>
          <Card.Title
            className={`${
              !lighttheme ? "text-black" : "text-white"
            } text-center`}
          >
            Counter App
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <p className="text-primary">
              {" "}
              Increments and Decrements value by 1
            </p>
          </Card.Subtitle>
          <Card.Text>
            <h1
              className={`${
                !lighttheme ? "text-black" : "text-white"
              } text-center`}
            >
              {count}
            </h1>
          </Card.Text>
          <Button
            className="mx-2"
            variant="outline-success"
            onClick={() => {
              handleIncrement();
            }}
          >
            Increment
          </Button>
          <Button
            className="mx-2"
            variant="outline-danger"
            onClick={() => {
              handleDeccrement();
            }}
          >
            Decrement
          </Button>

          {count === 0 ? (
            <div className="text-center text-primary">Count value is zero</div>
          ) : count > 0 ? (
            <div className="text-center text-primary">
              Count value is positive
            </div>
          ) : (
            <div className="text-center text-primary">
              count value is negative
            </div>
          )}

          <Button
            variant={lighttheme ? "light" : "dark"}
            onClick={() => settheme(!lighttheme)}
          >
            {lighttheme ? "Light theme" : "Dark theme"}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Counter;
