import React from "react";
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <Card className="bg-dark text-white" >
      <Card.Img style={{height:"92vh"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6gnCF0igPg75juBi0RwGXAVRmKGsBafrvsQ&s" alt="Card image" />
      <Card.ImgOverlay>
        <h1 className="text-center " style={{marginTop:"40px"}}>Welcome to Home page ..</h1>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Home;
