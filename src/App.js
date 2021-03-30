import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Cart from './components/Cart';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Shop from './components/Shop';
import { ShopProvider } from './components/ShopContext';
import ItemPage from './components/ItemPage';

function App() {
  const location = useLocation();
  return (
    <ShopProvider>
      <div className='App'>
        <Nav />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={Landing} />
            <Route exact path='/shop' component={Shop} />
            <Route path='/shop/:id' component={ItemPage} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </AnimatePresence>
      </div>
    </ShopProvider>
  );
}

export default App;
