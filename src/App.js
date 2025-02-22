import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header /> {/* Include the Header component */}
      <main>
        {/* Add other components or content here
        <h1>Welcome to Lakshmi Routique</h1>
        <p>Explore our latest collections and exclusive offers.</p> */}
        <Home />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
