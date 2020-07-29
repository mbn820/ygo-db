import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Container from 'react-bootstrap/Container';
import Cards from './routes/Cards';
import CardSearch from './routes/CardSearch';
import Decks from './routes/Decks';
import PageNotFound from './routes/PageNotFound';
import InProgressPage from './routes/InProgressPage';
import axios from 'axios';

function App() {
  const BASE_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=25&offset=0';
  const [cards, setCards] = useState({ data: [] });
  const [loadingCards, setLoadingCards] = useState(false);

  // useEffect(() => {
  //   setLoadingCards(true);
  //   axios.get(BASE_URL)
  //     .then(res => {
  //       console.log(res.data);
  //       setCards(res.data);
  //     })
  //     .catch(err => setCards([]))
  //     .finally(() => setLoadingCards(false));

  // }, []);

  const searchCard = (searchTerm) => {
    console.log('Searching: ' + searchTerm);

    axios.get(`${BASE_URL}&fname=${searchTerm}`)
      .then(res => setCards(res.data));
  };

  const searchCards = (params) => {
    console.log('PARAMS: ' + JSON.stringify(params));

    setLoadingCards(true);
    axios.get(BASE_URL, {params})
      .then(res => setCards(res.data))
      .catch(err => {
        console.log(err);
        setCards([]);
      })
      .finally(() => setLoadingCards(false));
  };

  return (
    <div>
      <BrowserRouter>
        <NavigationBar searchFn={searchCard}></NavigationBar>
        <div style={{height: 110}}></div>
        <Container>
          <Switch>
            <Route path="/" exact>
              <Cards cards={cards} searchFn={searchCards} loading={loadingCards} />
            </Route>
            <Route path="/cards">
              <Cards cards={cards} searchFn={searchCards} loading={loadingCards} />
            </Route>
            <Route path="/card-search">
              <CardSearch cards={cards} searchFn={searchCards} loading={loadingCards} />
            </Route>
            <Route path="/decks">
              <InProgressPage />
            </Route>
            <Route path="/sets">
              <InProgressPage />
            </Route>
            <Route path="/archetypes">
              <InProgressPage />
            </Route>
            <Route path="/deck-builder">
              <InProgressPage />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
