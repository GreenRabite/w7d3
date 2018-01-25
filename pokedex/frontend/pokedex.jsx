import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Root from './components/root';

// Test Imports
import {fetchAllPokemon} from './util/api_util';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import {configureStore} from './store/store';
import { selectAllPokemon } from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  // Test variables
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}></Root>, root);
});
