import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import ArtistsPage from './components/ArtistsPage';
import AlbumsPage from './components/AlbumsPage';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Render the main component into the dom
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ArtistsPage} />
      <Route path="/artists" component={ArtistsPage}/>
      <Route path="/albums/:id" component={AlbumsPage} />
    </Route>
  </Router>
), document.getElementById('app'));
