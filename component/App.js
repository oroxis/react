import logo from './logo.svg';
import './App.css';
import Product from './component/Product';
import Products from './component/Products';
import { useState } from 'react';


function App() {
  const [counts, setCount] = useState(4);
  const handleClick = () => {
    setCount(counts +1)
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> 
     
      <div>
          <Product/>
          <Products counts={counts} handleClick={handleClick}/>
      </div>
      
      <footer>
      
      </footer>
    </div>
  );
 
}

export default App;
