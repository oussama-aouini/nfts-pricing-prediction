import {useEffect, useState} from 'react';
import './App.css'
import Sidebar from "./components/Sidebar"
import Topbar from './components/Topbar'
import CardList from './components/CardList';

const API_URL = 'https://api.solscan.io/collection?sortBy=volume&offset=0&limit=8'

// export const MoviesContext = React.createContext()

const App = () => {
  const [collections, setCollections] = useState([])

  const getCollections = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    setCollections(data.data)
  }

  useEffect(() => {
    getCollections();
  }, []);

  return (
    <div className="App">
      <Topbar />
      <div className='app-page'>
        <Sidebar />
        <CardList movies={collections} />
      </div>
    </div>
  );
}

export default App;
