import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

import CardList from "../components/CardList";

import './Home.css'

const API_URL =
  "https://api.solscan.io/collection?sortBy=volume&offset=0&limit=80";

const Home = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCollections = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    setCollections(data.data);
    setLoading(false);
  };

  useEffect(() => {
    getCollections();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">
          <div className="loading-animation">
            <BeatLoader color={"orange"} loading={loading} size={25} />
          </div>
        </div>
      ) : (
        <CardList collections={collections} />
      )}
    </> 
  );
};

export default Home;
