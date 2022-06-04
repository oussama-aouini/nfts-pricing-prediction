import { useState } from "react";

import Chart from "../components/Chart";

import "./ChartPage.css";

const ChartPage = ({ match }) => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tab_number) => {
    setActiveTab(tab_number);
  };

  const [collection_id] = useState(match.params.id);

  return (
    <div className="chart-page">
      <h1>Collection Name</h1>
      {console.log(match)}
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
          <Chart collection_id={collection_id} />
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
