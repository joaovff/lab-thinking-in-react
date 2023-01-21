import logo from './logo.svg';
import './App.css';
import jsonData from './data.json';
import ProductsPage from './components/ProductsPage';
function App() {
  return (
    <div className="App">
      <ProductsPage jsonData={jsonData} />
    </div>
  );
}

export default App;
