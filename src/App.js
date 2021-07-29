import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './class/Contact';
import Shop from './class/Shop';
import Product from './class/Product';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(0)
  return (
    <div className="App">
      <nav> 
        <Link to="/contact">Contact Page</Link>  <br />
        <Link to="/product">Product</Link> <br />
        <Link to="/">Shop</Link> <br />  
      </nav> <br />
      <button onClick={() => setState(state + 1)}>Click</button>
      {state}
      <h1>Hello World</h1>
      <Switch>

      <Route path="/contact">
          <Contact/>
      </Route>

      <Route path="/product">
          <Product/>
      </Route>

      <Route path="/">
          <Shop/>
      </Route>

      </Switch>





    </div>
  );
}

export default App;