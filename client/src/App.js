import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar'

import Home from './pages/Home'
import SingleItem from './pages/SingleItem'
import About from './pages/About'
import NotFound from './pages/Notfound'

import GalleryState from './context/gallery/GalleryState'

function App() {
  return (
    <Fragment>
      <GalleryState>
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/items/:item' component={SingleItem} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </GalleryState>
    </Fragment>
  );
}

export default App;
