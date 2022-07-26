import { useState, useEffect } from "react";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Chart from "../components/Chart";
import VolumeChart from "../components/VolumeChart";
import FpChart from "../components/FpChart";

import "./ChartPage.css";

const ChartPage = ({ match }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [collection, setCollection] = useState({})
  const [collection_id] = useState(match.params.id);
  const [title, setTitle] = useState("")
  const [liked, setLiked] =useState(false)

  const API_URL = `https://api.solscan.io/collection/id?collectionId=${match.params.id}`

  const getCollection = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setTitle(data.data.data.collection)
    setCollection(data.data);
  };

  useEffect(() => {
    getCollection();
  }, []);

  const changeTab = (tab_number) => {
    setActiveTab(tab_number);
  };

  console.log(title)

  return (
    <div className="chart-page">
        <div className="coll-title">
          <h1>NFT Collection <span className="coll-name">{title}</span></h1>
          <div className="bar"></div>
        </div>
        <div className="fav-icon" onClick={() => setLiked(!liked)}>
          {liked? <FavoriteIcon fontSize="large" color="primary" /> :<FavoriteBorderIcon fontSize="large" color="primary" />}
        </div>
        
      <div className="charts-container">
        <div className="tabs">
          <div
            className={activeTab == 1 ? "active-tab" : "tab"}
            onClick={() => changeTab(1)}
          >
            avg price
          </div>
          <div
            className={activeTab == 2 ? "active-tab" : "tab"}
            onClick={() => changeTab(2)}
          >
            num sales
          </div>
          <div
            className={activeTab == 3 ? "active-tab" : "tab"}
            onClick={() => changeTab(3)}
          >
            floor price
          </div>
        </div>
        <div className="chart-box">
          {activeTab == 1 ? <Chart collection_id={collection_id} /> : ""}
          {activeTab == 2 ? <VolumeChart collection_id={collection_id} /> : ""}
          {activeTab == 3 ? <FpChart collection_id={collection_id} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
