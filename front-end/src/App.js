import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { useState } from "react"

function App() {
  const [results, setResults] = useState([])


  return (
    <div className="App">
      <Header />
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
