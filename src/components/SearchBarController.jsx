import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

function SearchBarController() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      setIsFocused(false);
    });
  }, []);

  const handleSearch = () => {
    setSearchHistory((prevHistory) => {
      const newArray = [searchText, ...prevHistory];
      return newArray;
    });
    setSearchText("");
  };
  return (
    <SearchBar
      isFocused={isFocused}
      setIsFocused={setIsFocused}
      searchHistory={searchHistory}
      setSearchHistory={setSearchHistory}
      searchText={searchText}
      setSearchText={setSearchText}
      handleSearch={handleSearch}
      onDeleteHistory={(index) => {
        const newArr = [...searchHistory];
        newArr.splice(index, 1);
        setSearchHistory(newArr);
      }}
    />
  );
}

export default SearchBarController;
