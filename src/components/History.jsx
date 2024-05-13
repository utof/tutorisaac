import React from "react";

function History({ searchHistory, setSearchHistory, onDeleteHistory }) {
  return (
    <div
      id="search-history-container"
      style={{
        position: "absolute",
        top: 55,
        color: "white",
        borderRadius: 19,
        width: "100%",
        background: "black",
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div style={{ padding: 10 }}>
        {searchHistory.map((search, index) => (
          <div style={{ padding: 3 }} key={index}>
            <div>
              {search}
              <button onClick={() => onDeleteHistory(index)}></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;

// function calendarApp() {
//   console.log("noice");

//   const myCallbackFunction = () => {
//     console.log("timer finished yay");
//   };

//   const otherfunc = () => {
//     console.log("timer finished yay");
//   };
//   getDate(myCallbackFunction);
// }

// async function getDate(callback) {
//   setTimeout(() => {
//     console.log("timer finished");
//     callback();
//   }, 100);
// }
