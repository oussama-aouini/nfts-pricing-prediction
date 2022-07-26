import { useState } from "react";

import "./Searchbar.css";

import SearchIcon from "@mui/icons-material/Search";

import { Redirect } from "react-router-dom";


function Searchbar() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const search_collections = async (keyword) => {
    const response = await fetch(
      `https://api.solscan.io/nft/search?keyword=${keyword}`
    );
    const data = await response.json();
    setSearchResults(data.data.collection);
  };

  const handelChange = (event) => {
    setSearchInput(event.target.value);
    search_collections(searchInput);
    console.log(searchResults);
  };

  return (
    <div className="search-bar">
      <div className="search-input">
        <input type="text" placeholder="Search..." onChange={handelChange} />
        <SearchIcon color="#ffffff" />
      </div>
      {searchInput === "" ? (
        ""
      ) : (
        <ul className="search-results">
          {searchResults.map((val) => (
            <li
              className="result-item"
              onClick={() => {
                window.location.pathname = `collection/${val.collectionId}`;
              }}
            >
              <div className="image-container">
                <img src={val.avatar} style={{width: "50px", height: "50px", borderRadius:"10px"}} />
              </div>
              <div className="title-container">
                {val.collection}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Searchbar;
