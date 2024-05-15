import React, { useCallback, useEffect, useState } from "react";
import Tiles from "./Tiles";
import useYoutubeSearch from "../hooks/useYoutubeSearch";

function YoutubeSearchController({ searchText }) {
  const videoList = useYoutubeSearch(searchText);
  console.log("i rerendered, searrch controller");

  return <Tiles videoList={videoList} />;
}

export default YoutubeSearchController;
