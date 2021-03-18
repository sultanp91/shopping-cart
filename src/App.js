import React from 'react';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Products from './components/Products';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Landing />
      <Products />
    </div>
  );
}

export default App;
