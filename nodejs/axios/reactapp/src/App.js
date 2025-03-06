import './App.css'
import './components/ProductList'
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <input type="text" placeholder="Enter your name" />
        <ProductList/>
      </header>
    </div>
  );
}

export default App;
