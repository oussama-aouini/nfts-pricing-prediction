import {useEffect, useState} from 'react';
import { Doughnut } from 'react-chartjs-2';

import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import CardList from './components/CardList';

import './App.css'

const API_URL = 'https://api.solscan.io/collection?sortBy=volume&offset=0&limit=80'

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
      <div className='app-body'>  
        <Sidebar />
        <CardList collections={collections} />
      </div>
    </div>
  );
}

export default App;
