import logo from './logo.svg';
import './App.css';
import Product from './component/Product';
import Products from './component/Products';
import { useState } from 'react';


function App() {
  const [counts, setCount] = useState(0);
  const [isLog, setIsLog] = useState(true);
  const handleClick = () => {
    setCount(counts +1)
  };
  const handleLogClick = () => {
    setIsLog(!isLog);

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> 
     
      <div>
          <Product/>
          {isLog ? <p>You are logged in</p>:<p> You are logged Out</p>}
          <button onClick={handleLogClick}>{isLog ? <span>Logout</span> : <span>Log in</span>}</button>
          <Products counts={counts} handleClick={handleClick}/>
      </div>
      
      <footer>
      
      </footer>
    </div>
  );
 
}

export default App;
