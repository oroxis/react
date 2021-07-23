import logo from './logo.svg';
import './App.css';
import Product from './component/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> 
     
      <div>
          <Product/>
      </div>
      
      <footer>
      
      </footer>
    </div>
  );
 
}

export default App;
