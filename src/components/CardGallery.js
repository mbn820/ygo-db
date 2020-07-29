import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import cardBack from '../assets/card-back.png';
 
const CardGallery = ({ cards }) => {
  return (
    <>
      {cards.map(card => <CardGalleryItem card={card} key={card.id} />)}
    </>
  );
};

const CardGalleryItem = ({ card }) => {
  return (
    <>
      <Card body>
        <Row>
          <Col sm={12} md={2}>
            <div className="mb-3 mb-md-0">
              <CardImage src={card?.card_images[0]?.image_url} height="250" onClick={() => console.log('Clicked...')} />
            </div>
          </Col>
          <Col sm={12} md={10}>
            <div className="d-flex space-between">
              <h5><strong>{card.name}</strong></h5>
              <span className="ml-auto">{card.archetype}</span>
            </div>

            <hr className="border-top my-1" />

            <CardDetails card={card} />

            <hr className="border-top my-1" /> 
            {/* <hr style={{ borderTop: '1px solid white', margin: '5px 0' }} /> */}

            <p className="text-muted">{card.desc}</p>
            {/* <hr style={{ borderTop: '1px solid white', margin: '5px 0' }} />
            {JSON.stringify(card)} */}
          </Col>
        </Row>
      </Card>
    </>  
  );
};

const CardImage = ({ src, height, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {loaded
        ? null
        : <Image src={cardBack} height={height} className="container-fluid p-0"></Image>
      }
      <Image src={src} 
        onClick={onClick} 
        onLoad={() => setLoaded(true)}
        className="container-fluid p-0"
        style= {{ display: loaded ? '' : 'none', cursor: 'pointer' }}/>
    </>  
  );
};

const CardDetails = ({ card }) => {
  const isMonster = card.type.includes("Monster");

  const attributeIcon = ['Spell Card', 'Trap Card'].includes(card.type) ? card.type.split(' ')[0].toUpperCase() : card.attribute;
  const spellOrTrapType = !isMonster ? card.race : null;
  const level = ['Normal Monster', 'Effect Monster', 'Synchro Monster'].includes(card.type) ? card.level : null;
  const rank = ['XYZ Monster'].includes(card.type) ? card.level : null;
  const link = card.linkval;
  const category = isMonster ? `[ ${card.race} / ${card.type} ]` : null;
  const atk = card.atk;
  const def = card.type.includes('Link') ? '-' : card.def;

  return (
    <>
      {attributeIcon   ? <strong className="border-right pr-2">{`${attributeIcon}`}</strong> : null}
      {spellOrTrapType ? <strong className="border-right px-2">{`${spellOrTrapType}`}</strong> : null}
      {level           ? <strong className="border-right px-2">{`Level ${level}`}</strong> : null}
      {rank            ? <strong className="border-right px-2">{`Rank ${rank}`}</strong> : null}
      {link            ? <strong className="border-right px-2">{`Link ${link}`}</strong> : null}
      {category        ? <strong className="border-right px-2">{`${category}`}</strong> : null}
      {atk != null     ? <strong className="border-right px-2">{`ATK ${atk}`}</strong> : null}
      {def != null     ? <strong className="border-right px-2">{`DEF ${def}`}</strong> : null}
    </>
  );
};

export default CardGallery;
