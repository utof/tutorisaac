import { css } from "@emotion/css";
import Magnifier from "../assets/magnifier.svg?react";
import { useEffect, useRef, useState } from "react";
import History from "./History";
import SearchInput from "./SearchInput";

function SearchBar({
  isFocused,
  setIsFocused,
  searchHistory,
  setSearchHistory,
  inputText,
  setInputText,
  handleSearch,
  onDeleteHistory,
}) {
  return (
    <div className={styles.container}>
      {isFocused && !(searchHistory.length === 0) && (
        <History
          searchHistory={searchHistory}
          setSearchHistory={setSearchHistory}
          onDeleteHistory={onDeleteHistory}
        />
      )}
      <div className={styles.searchbar(isFocused)} id="searchbar">
        <div className={styles.search} id="search">
          {isFocused && (
            <div>
              <Magnifier />
            </div>
          )}
          <SearchInput
            inputText={inputText}
            setInputText={setInputText}
            setIsFocused={setIsFocused}
            handleSearch={handleSearch}
          />
        </div>
        <button
          className={styles.magnifierButton}
          onClick={handleSearch}
          id="magnifier"
        >
          <div className={styles.magnifierSvg} id="mag-svg">
            <Magnifier />
          </div>
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: css`
    position: relative;
  `,
  searchbar: (isFocused) => css`
    height: 50px;
    outline: ${isFocused && "3px solid crimson"};
    border-radius: 40px;
    overflow: hidden;
    background: orange;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  search: css`
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    width: 300px;
    height: 30px;
    background: none;
  `,
  magnifierButton: css`
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #555555;
  `,
  magnifierSvg: css`
    width: 30px;
  `,
};

export default SearchBar;
