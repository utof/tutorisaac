import Magnifier from "../assets/magnifier.svg?react";
import { useEffect, useRef, useState } from "react";
import History from "./History";
import SearchInput from "./SearchInput";

function SearchBar({
  isFocused,
  setIsFocused,
  searchHistory,
  setSearchHistory,
  searchText,
  setSearchText,
  handleSearch,
  onDeleteHistory,
}) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {isFocused && !(searchHistory.length === 0) && (
        //
        <History
          searchHistory={searchHistory}
          setSearchHistory={setSearchHistory}
          onDeleteHistory={onDeleteHistory}
        />
      )}
      <div
        id="searchbar"
        style={{
          height: "50px",
          outline: isFocused && "3px solid crimson",
          borderRadius: "40px",
          overflow: "hidden",
          background: "orange",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          id="search"
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "10px",
            width: "300px",
            height: "30px",
            background: "none",
          }}
        >
          {isFocused && (
            <div>
              <Magnifier />
            </div>
          )}
          <SearchInput
            searchText={searchText}
            setSearchText={setSearchText}
            setIsFocused={setIsFocused}
            handleSearch={handleSearch}
          />
        </div>
        <button
          onClick={handleSearch}
          id="magnifier"
          style={{
            width: "50px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#555555",
          }}
        >
          <div id="mag-svg" style={{ width: 30 }}>
            <Magnifier />
          </div>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
