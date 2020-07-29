import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Container from 'react-bootstrap/Container';
import CardSearch from './routes/CardSearch';
import PageNotFound from './routes/PageNotFound';
import InProgressPage from './routes/InProgressPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar searchFn={() => {}}></NavigationBar>
        <div style={{height: 110}}></div>
        <Container>
          <Switch>
            <Route path="/" exact>
              <CardSearch />
            </Route>
            <Route path="/card-search">
              <CardSearch />
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
