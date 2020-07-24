import React, { useState, useEffect } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import SettingsBar from './components/SettingsBar';
import SearchForm from './components/SearchForm';
import CardGrid from './components/CardGrid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

function App() {
  const BASE_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0';
  const [cards, setCards] = useState({ data: [] });

  useEffect(() => {
    axios.get(BASE_URL)
      .then(res => {
        console.log(res.data);
        setCards(res.data);
      });

  }, []);

  const searchCard = (searchTerm) => {
    console.log('Searching: ' + searchTerm);

    axios.get(`${BASE_URL}&fname=${searchTerm}`)
      .then(res => setCards(res.data));
  };

  return (
    <div>
      <NavigationBar searchFn={searchCard}></NavigationBar>
      <div style={{height: 100}}></div>
      <Container>
        <SettingsBar></SettingsBar>
        <Row>
          <Col md={4} sm={12}>
            <SearchForm />
          </Col>
          <Col md={8} sm={12}>
            <CardGrid cards={cards.data}></CardGrid>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
