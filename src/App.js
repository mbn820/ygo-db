import React, { useState, useEffect } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import CardGrid from './components/CardGrid';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

function App() {
  const BASE_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0';
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
      <div style={{height: 90}}></div>
      <Container>
        <CardGrid cards={cards.data}></CardGrid>
      </Container>
    </div>
  );
}

export default App;
