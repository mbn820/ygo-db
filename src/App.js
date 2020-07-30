import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import CardSearch from './routes/CardSearch';
import PageNotFound from './routes/PageNotFound';
import InProgressPage from './routes/InProgressPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="">
          <NavigationBar searchFn={() => {}} />
          <div style={{height: 110}}></div>
          <Container>
            <Switch>
              <Route path="/ygo-db" exact>
                <CardSearch />
              </Route>
              <Route path="/ygo-db/card-search">
                <CardSearch />
              </Route>
              <Route path="/ygo-db/decks">
                <InProgressPage />
              </Route>
              <Route path="/ygo-db/sets">
                <InProgressPage />
              </Route>
              <Route path="/ygo-db/archetypes">
                <InProgressPage />
              </Route>
              <Route path="/ygo-db/deck-builder">
                <InProgressPage />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
