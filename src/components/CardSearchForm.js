import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ParamsSelect from './ParamsSelect';
import CardSearchContext from '../context/CardSearchContext';

const CardSearchForm = () => {
  const {params, setParams, search} = useContext(CardSearchContext);

  const [paramsLocal, setParamsLocal] = useState({...params});

  const types = {
    Main: [
      'Effect Monster', 'Flip Effect Monster', 'Flip Tuner Effect Monster', 'Gemini Monster',
      'Normal Monster', 'Normal Tuner Monster', 'Pendulum Effect Monster', 'Pendulum Flip Effect Monster',
      'Pendulum Normal Monster', 'Pendulum Tuner Effect Monster', 'Ritual Effect Monster',
      'Skill Card', 'Spell Card', 'Spirit Monster', 'Toon Monster', 'Trap Card', 'Tuner Monster',
      'Union Effect Monster'
    ],
    Extra: [
      'Fusion Monster', 'Link Monster', 'Pendulum Effect Fusion Monster', 'Synchro Monster',
      'Synchro  Pendulum Effect Monster', 'Synchro Tuner Monster', 'XYZ Monster',
      'XYZ Pendulum Effect Monster'
    ]
  };

  const races = {
    Monster: [
      'Aqua', 'Beast', 'Beast-warrior', 'Creator-God', 'Cyberse', 'Dinosaur', 'Divine-Beast',
      'Dragon', 'Fairy', 'Fiend', 'Fish', 'Insect', 'Machine', 'Plant', 'Psychic', 'Pyro', 'Reptile',
      'Rock', 'Sea Serpent', 'Spellcaster', 'Thunder', 'Warrior', 'Winged-Beast'
    ],
    Spell: ['Normal', 'Field', 'Equip', 'Continous', 'Quick-Play', 'Ritual'],
    Trap: ['Normal', 'Continous', 'Counter']
  };

  const attributes = ['DARK', 'EARTH', 'FIRE', 'LIGHT', 'WATER', 'WIND', 'DIVINE'];

  const cardEffects = [
    'Back to Deck', 'Back to Hand', 'Banish', 'Change ATK or DEF', 'Control',
    'Counter', 'Damage LP', 'Destroy Monster', 'Direct Attack', 'Draw', 'Effect Damage',
    'Fusion-Related', 'Gamble', 'Graveyard', 'Increase Level', 'LINK-Related', 'Negate', 'Pendulum-Related',
    'Piercing', 'Recover LP', 'Repeat Attack', 'Ritual-Related', 'Search', 'Select', 'Special Summon',
    'Synchro-Related', 'Token', 'Tuner-Related', 'Win the Duel', 'XYZ-Related'
  ];

  const banLists = ['TCG', 'OCG', 'Goat'];

  const formats = ['Duel Links', 'Speed Duel', 'Rush Duel', 'GOAT', 'OCG GOAT'];

  const archetypes = [];

  const rarities = [
    'Common', 'Collector\'s Rare'
  ];

  const cardSets = [];

  const linkArrows = [];

  const onChange = (e) => {
    const update = {...params, [e.target.name]: e.target.value};
    setParams(update);
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <Row>
            <Col sm={12} md={10}>
              <Form.Group className="mb-md-0">
                <InputGroup size="md">
                  <InputGroup.Prepend>
                    <InputGroup.Text variant="primary"><i className="fa fa-search"></i></InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="text" placeholder="Search Cards" name="fname" value={params.fname} onChange={onChange}></FormControl>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col sm={12} md={2}>
              <Button block onClick={() => search(params)}>Search</Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col sm={6} md={4}>
              <ParamsSelect label="Card Type" name="type" value={params.type} options={types} onChange={onChange} grouped />
            </Col>
            <Col sm={6} md={4}>
              <ParamsSelect label="Race" name="race" value={params.race} options={races} onChange={onChange} grouped />
            </Col>
            <Col sm={6} md={4}>
              <ParamsSelect label="Attribute" name="attribute" value={params.attribute} options={attributes} onChange={onChange} />
            </Col>
            <Col sm={6} md={4}>
              <ParamsSelect label="Card Effect" name="cardEffect" value={params.cardEffect} options={cardEffects} onChange={onChange} />
            </Col>
            <Col sm={6} md={4}>
              <ParamsSelect label="Ban List" name="banList" value={params.banList} options={banLists} onChange={onChange} />
            </Col>
            <Col sm={6} md={4}>
              <ParamsSelect label="Format" name="format" value={params.formats} options={formats} onChange={onChange} />
            </Col>
            <Col sm={6} md={4}>
              <ParamsSelect label="Rarity" name="rarity" value={params.rarity} options={rarities} onChange={onChange} />
            </Col>
            <Col sm={6} md={4}>
              <ParamsSelect label="Card Set" name="cardSet" value={params.cardSet} options={cardSets} onChange={onChange} />
            </Col>
            <Col sm={6} md={4}>
              <ParamsSelect label="Link Arrow" name="linkArrow" value={params.linkArrow} options={linkArrows} onChange={onChange} />
            </Col>
          </Row>
        </Card.Body>  
      </Card> 
    </div>
  );
};

export default CardSearchForm;
