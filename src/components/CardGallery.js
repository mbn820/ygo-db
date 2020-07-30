import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import cardBack from '../assets/card-back.png';
import Icons from '../utils/iconUtils';
 
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
      <Card body className="secondary-bg">
        <Row>
          <Col sm={12} md={3}>
            <div className="mb-3 mb-md-0">
              <CardImage src={card?.card_images[0]?.image_url} height="250" onClick={() => console.log('Clicked...')} />
            </div>
          </Col>
          <Col sm={12} md={9}>
            <div className="d-flex space-between">
              <h5><strong>{card.name}</strong></h5>
              <span className="ml-auto font-italic">{card.archetype}</span>
            </div>

            <hr className="border-top my-1" />

            <CardDetails card={card} />

            <hr className="border-top my-1" /> 
            {/* <hr style={{ borderTop: '1px solid white', margin: '5px 0' }} /> */}

            <p className="">{card.desc}</p>
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
  const category = isMonster ? `[ ${card.race} / ${card.type.split(' ')[0]} ]` : null;
  const atk = card.atk;
  const def = card.type.includes('Link') ? '-' : card.def;

  const DetailItem = ({text, icon}) => {
    return (
      <div className="d-flex align-content-center border-right pr-2 mr-2">
        {icon ? <Image src={icon} height={18} width={18} className="my-auto mr-1 d-none d-sm-none d-md-block" /> : null}
        <strong>{text}</strong>
      </div>
    );
  };

  return (
    <div className="d-flex flex-wrap">
      {attributeIcon   ? <DetailItem text={attributeIcon} icon={Icons.attributeIcons[attributeIcon]} /> : null}
      {spellOrTrapType ? <DetailItem text={spellOrTrapType} icon={Icons.spellOrTrapTypes[spellOrTrapType]} /> : null}
      {level           ? <DetailItem text={`Level ${level}`} icon={Icons.levels.level} /> : null}
      {rank            ? <DetailItem text={`Rank ${rank}`} icon={Icons.levels.rank} /> : null}
      {link            ? <DetailItem text={`Link ${link}`} /> : null}
      {category        ? <DetailItem text={category} icon={Icons.monsterTypes[card.race]} /> : null}
      {atk != null     ? <DetailItem text={`ATK ${atk}`} /> : null}
      {def != null     ? <DetailItem text={`DEF ${def}`} /> : null}
    </div>
  );
};

export default CardGallery;
