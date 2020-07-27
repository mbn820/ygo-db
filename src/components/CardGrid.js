import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import cardBack from '../assets/card-back.png'

const CardGrid = ({cards}) => {
  const [selectedCard, setSelectedCard] = useState(cards ? cards[0] : {});
  const [showModal, setShowModal] = useState(false);

  const onSelectCard = card => {
    setSelectedCard(card);
    setShowModal(true);
  };

  return (
    <div>
      <Row className="d-flex">
        {cards.map(card => (
          <Col sm={6} md={6} lg={3} className="mb-3 d-flex justify-content-center" key={card.id}>
            <Card src={card?.card_images[0]?.image_url_small} height={250} onClick={() => onSelectCard(card)} style={{ cursor: 'pointer' }} />
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered="true">
        <Modal.Header closeButton>
          <Modal.Title>{selectedCard?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Card src={selectedCard?.card_images[0]?.image_url} className="container-fluid"></Card>
        </Modal.Body>
      </Modal> 
    </div>
  );
}

const Card = ({ src, height, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {loaded
        ? null
        : <Image src={cardBack} height={height}></Image>
      }
      <Image src={src} 
        height={height} onClick={onClick} 
        onLoad={() => setLoaded(true)}
        style= {{ display: loaded ? '' : 'none', cursor: 'pointer' }}/>
    </>  
  );
};

export default CardGrid;