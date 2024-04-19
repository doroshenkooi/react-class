import React from 'react';
import './App.css';
import ShopItemClass from './components/shopClass';

const item = {
  brand: 'tiger of sweden',
  title: 'leonard coat',
  description: 'minimalistic coat in cotton-blend',
  descriptionFull: "men's minimalistic overcoat in cotton-blend. features a stand-up collar, concealed front closure and single back vent. slim fit with clean, straight shape. above-knee length.",
  price: 399,
  currency: '£'
}

function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={item} />
      </div>
    </div>
  );
}

export default App;
