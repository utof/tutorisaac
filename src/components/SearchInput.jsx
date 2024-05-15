import React from "react";

function SearchInput({ inputText, handleSearch, setInputText, setIsFocused }) {
  return (
    <input
      autoFocus={true}
      value={inputText}
      onClick={(e) => {
        e.stopPropagation();
      }}
      onKeyDown={(e) => {
        if (e.key == "Enter") {
          handleSearch();
        }
      }}
      onChange={(event) => {
        setInputText(event.target.value);
        setIsFocused(true);
      }}
      onFocus={() => {
        setIsFocused(true);
      }}
      type="text"
      placeholder="Search for videos"
      style={{
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
        outline: "none",
        border: "none",
        background: "transparent",
      }}
    />
  );
}

export default SearchInput;
