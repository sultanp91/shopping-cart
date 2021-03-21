import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Shop from './components/Shop';
import { ShopProvider } from './components/ShopContext';

function App() {
  return (
    <Router>
      <ShopProvider>
        <div className='App'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/shop' component={Shop} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </div>
      </ShopProvider>
    </Router>
  );
}

export default App;
