import Magnifier from "../assets/magnifier.svg?react";
import { useEffect, useRef, useState } from "react";

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   console.log("im mounting");
  //   // document.body.styler
  //   inputRef?.current?.focus();
  //   inputRef.current.style.width = "10px";
  // }, []);

  const handleSearch = () => {
    // setSearchHistory([...searchHistory.slice(-5), searchText]);

    setSearchHistory((prevHistory) => {
      const newArray = [searchText, ...prevHistory];
      return newArray;
    });
    setSearchText(""); // how do i clear the placeholder text?
  };

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {isFocused && (
        <div
          id="search-history-container"
          style={{
            position: "absolute",
            top: 55,
            // left: 0,
            color: "white",
            borderRadius: 19,
            // height: 100,
            width: "100%",
            background: "black",
          }}
        >
          <div style={{ padding: 10 }}>
            {searchHistory.map((search, index) => (
              <div style={{ padding: 3 }} key={index}>
                <div>
                  {search}
                  <button
                    onClick={() => {
                      const newArr = [...searchHistory];
                      newArr.splice(index, 1);
                      setSearchHistory(newArr);
                    }}
                  ></button>
                </div>
              </div>
            ))}
          </div>
        </div>
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
          {/* <>{JSON.stringify(isFocused)};</> */}
          {isFocused && (
            <div>
              <Magnifier />
            </div>
          )}
          <input
            // ref={inputRef}
            autoFocus={true}
            value={searchText}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handleSearch();
              }
            }}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              // setIsFocused(false);
            }}
            type="text"
            placeholder="hellohello search ples"
            style={{
              height: "100%",
              width: "100%",
              boxSizing: "border-box",
              outline: "none",
              border: "none",
              background: "transparent",
            }}
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
