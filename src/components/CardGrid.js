import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal'

const CardGrid = props => {
  const [selectedCard, setSelectedCard] = useState(props.cards[0]);
  const [showModal, setShowModal] = useState(false);

  const onSelectCard = card => {
    setSelectedCard(card);
    setShowModal(true);
  };

  return (
    <div>
      <Row className="d-flex justify-content-center">
        {props.cards.map(card => (
          <Col sm={6} md={6} lg={3} className="mb-3 d-flex justify-content-center" key={card.id}>
            <Image src={card?.card_images[0]?.image_url_small} onClick={() => onSelectCard(card)}></Image>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered="true">
        <Modal.Header closeButton>
          <Modal.Title>{selectedCard?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Image src={selectedCard?.card_images[0]?.image_url} className="container-fluid"></Image>
        </Modal.Body>
      </Modal> 
    </div>
  )
}

export default CardGrid;
