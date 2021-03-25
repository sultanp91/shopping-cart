import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Shop from './components/Shop';
import { ShopProvider } from './components/ShopContext';
import ItemPage from './ItemPage';

function App() {
  return (
    <Router>
      <ShopProvider>
        <div className='App'>
          <Nav />
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/shop' exact component={Shop} />
            <Route path='/shop:id' component={ItemPage} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </div>
      </ShopProvider>
    </Router>
  );
}

export default App;
