import React from 'react';
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'

import { Link, Route } from "wouter"
import {GifsContextProvier} from './context/GifsContext';

export default function App() {
  return (
<StaticContext.Provider value = {{name: 'Glen.dev',
      suscribrte: true}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1>Giffy</h1>
          </Link>
          <GifsContextProvier>
           <Route
            component={Home}
            path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword"  />
            <Route
              component={Detail}
              path="/gif/:id"
            />
          </GifsContextProvier>
        </section>
      </div>
    </StaticContext.Provider>
  )
}
