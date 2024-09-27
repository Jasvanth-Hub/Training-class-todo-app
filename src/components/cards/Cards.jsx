import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { v4 as uuidv4 } from "uuid";
const Cards = () => {
  const [cards, setcards] = useState([]);
  const [card, setcard] = useState({
    id: "",
    title: "",
    description: "",
    imageUrl: "",
  });

  useState(()=>{
    const data = localStorage.getItem("cards") || []
    if(data?.length>0)
    {
      setcards(JSON.parse(data))
    }
  },[])

  const [show, setShow] = useState(false);
  const [edit, setedit] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [search, setsearch] = useState("");

  const handleSaveCard = () => {
    let existingCardId = card.id;
    console.log(existingCardId);
    if (existingCardId) {
      const newCards = cards.filter((c) => c.id !== existingCardId);
      setcards([...newCards, card]);
      localStorage.setItem("cards",JSON.stringify(newCards))
      handleClose();
      setcard({
        id: "",
        title: "",
        description: "",
        imageUrl: "",
      });
      return;
    }
    const cardId = uuidv4();
    card.id = cardId;
    setcards([...cards, card]);
    localStorage.setItem("cards",JSON.stringify(cards))
    handleClose();
    setcard({
      id: "",
      title: "",
      description: "",
      imageUrl: "",
    });
  };

  const handleDeleteCard = (id) => {
    let filteredCards = cards.filter((card) => card.id !== id);
    setcards(filteredCards);
    localStorage.setItem("cards",JSON.stringify(filteredCards))
  };
  const handleEdit = (id) => {
    setedit(true);
    let editCard = cards.filter((card) => card.id === id)[0];
    setcard(editCard);
    handleShow();
  };
  return (
    <div style={{backgroundColor:"#585a5c",height:"100%"}}>
      <Container className="pt-3 p-2 d-flex flex-column justify-content-center ">
        <InputGroup className="mb-3 d-flex justify-content-center ">
          <InputGroup.Text id="basic-addon1" value={search}>
            Search
          </InputGroup.Text>
          <Form.Control
            placeholder="Search by title"
            aria-label="search-title"
            aria-describedby="basic-addon1"
          />
          <Button
            size="lg"
            variant="info"
            onClick={() => {
              setcard({
                id: "",
                title: "",
                description: "",
                imageUrl: "",
              });
              handleShow();
            }}
          >
            Add Card
          </Button>
        </InputGroup>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{edit ? "Edit Card" : "New Card"} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => {
                    setcard({ ...card, title: e.target.value });
                  }}
                  placeholder="enter title"
                  value={card.title}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setcard({ ...card, description: e.target.value });
                  }}
                  required
                  as="textarea"
                  rows={3}
                  value={card.description}
                  maxLength={70}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setcard({ ...card, imageUrl: e.target.value });
                  }}
                  required
                  type="text"
                  placeholder="enter image url"
                  value={card.imageUrl}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleSaveCard()}>
              Save Card
            </Button>
          </Modal.Footer>
        </Modal>

        <Container className=" p-3 gap-4  d-flex justify-content-evenly flex-wrap ">
          {cards.map((card,ind) => {
            return (
              <div key={ind}>
                <Card className="bg-dark mb-4" style={{ width: "18rem", height:"27rem"}}>
                  <Card.Img className="bg-dark  w-100 h-50"
                    variant="top"
                    src={card?.imageUrl}
                    style={{ width: "200px" }}
                  />
                  <Card.Body className="bg-dark text-white d-flex flex-column justify-content-between">
                    <div>
                    <Card.Title>{card?.title}</Card.Title>
                    <Card.Text>{card?.description}</Card.Text>
                    </div>
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="primary"
                        onClick={() => handleEdit(card.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          window.confirm(
                            "Are You Sure want to delete this card"
                          ) && handleDeleteCard(card.id);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Container>
      </Container>
    </div>
  );
};

export default Cards;
