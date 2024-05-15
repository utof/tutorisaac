import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

function SearchBarController(setSearchText) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      setIsFocused(false);
    });
  }, []);

  const handleSearch = () => {
    setSearchHistory((prevHistory) => {
      const newArray = [inputText, ...prevHistory];
      return newArray;
    });
    setInputText("");
  };
  return (
    <SearchBar
      isFocused={isFocused}
      setIsFocused={setIsFocused}
      searchHistory={searchHistory}
      setSearchHistory={setSearchHistory}
      inputText={inputText}
      setInputText={setInputText}
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
