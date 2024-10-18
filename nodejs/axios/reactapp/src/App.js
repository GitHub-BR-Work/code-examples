import './App.css'
import './components/ProductList'
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'yellow' }}>
      <header className="App-header">
        <h1 style={{ color: 'green' }}>Hello World</h1>
        <ProductList/>
      </header>
    </div>
  );
}

export default App;
