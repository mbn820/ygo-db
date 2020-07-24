import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const SearchForm = props => {
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

  return (
    <div className="mb-4">
      <Card>
        <Card.Header>
          <Form.Group>
            <Form.Label className="small">Card Name</Form.Label>
            <InputGroup size="sm">
              <FormControl type="text" placeholder="Search Cards"></FormControl>
              <InputGroup.Append>
                <InputGroup.Text variant="primary"><i className="fa fa-search"></i></InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Card.Header>
        <Card.Body className="row">
          <Form.Group className="col-lg-6 col-md-12">
            <Form.Label className="small">Card Type</Form.Label>
            <Form.Control as="select" size="sm">
              {Object.keys(types).map(key => (
                <optgroup label={key}>
                  {types[key].map(type => <option value={type}>{type}</option>)}
                </optgroup>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-lg-6 col-md-12">
            <Form.Label className="small">Race</Form.Label>
            <Form.Control as="select" size="sm">
              {Object.keys(races).map(key => (
                <optgroup label={key}>
                  {races[key].map(race => <option value={race}>{race}</option>)}
                </optgroup>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-lg-6 col-md-12">
            <Form.Label className="small">Attribute</Form.Label>
            <Form.Control as="select" size="sm">
              {attributes.map(attribute => <option value={attribute}>{attribute}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-lg-6 col-md-12">
            <Form.Label className="small">Card Effect</Form.Label>
            <Form.Control as="select" size="sm">
              {cardEffects.map(cardEffect => <option value={cardEffect}>{cardEffect}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-lg-6 col-md-12">
            <Form.Label className="small">Ban List</Form.Label>
            <Form.Control as="select" size="sm">
              {banLists.map(banList => <option value={banList}>{banList}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-lg-6 col-md-12">
            <Form.Label className="small">Format</Form.Label>
            <Form.Control as="select" size="sm">
              {formats.map(format => <option value={format}>{format}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-lg-6 col-md-12">
            <Form.Label className="small">Archetype</Form.Label>
            <Form.Control as="select" size="sm">
              {archetypes.map(archetype => <option value={archetype}>{archetype}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-lg-6 col-md-12">
            <Form.Label className="small">Rarity</Form.Label>
            <Form.Control as="select" size="sm">
              {rarities.map(rarity => <option value={rarity}>{rarity}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-lg-6 col-md-12">
            <Form.Label className="small">Card Set</Form.Label>
            <Form.Control as="select" size="sm">
              {cardSets.map(cardSet => <option value={cardSet}>{cardSet}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-lg-6 col-md-12">
            <Form.Label className="small">Link Arrow</Form.Label>
            <Form.Control as="select" size="sm">
              {linkArrows.map(linkArrow => <option value={linkArrow}>{linkArrow}</option>)}
            </Form.Control>
          </Form.Group>
          {/* <div className="mt-3"></div> */}
          <div className="col-lg-6 col-md-12">
            <Button variant="warning" className="mt-3" block>Reset</Button>
          </div>
          <div className="col-lg-6 col-md-12">
            <Button className="mt-3" block>Search</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SearchForm;

