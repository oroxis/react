import logo from './logo.svg';
import './App.css';
import Button from './Button'
import Button2 from './Button2'
import Card from './card'
import Profile from './profile'




function App() {
  const products = {
    title: 'My 2023 bag',
    description: 'This bag is so cool',
    price: 3000,
  }
  const handleProduct = () => {
    alert (products.title)
  }

  const profile = {
    name: 'Mark Hams',
    title: 'Manager',
    gender: 'Male',
    age: 80,

  }
  return (
    <div className="App"> 
    <Card myProduct={products} myClick={handleProduct}/>
    <Profile mProfile={profile}/>

{/* 
      <Button text="Log Out"/>
      <Button text="Log In"/>
      <Button text="Click"/>
      <Button text="Clock"/>
    
      <Button2 text="Discover More"/>
      <Button2 text="Discover Less"/>
      <Button2 text="Discover Few"/>
      <Button2 text="Discover This"/> */}
    </div>
  );
}

export default App;
