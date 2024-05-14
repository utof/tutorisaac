import React from "react";
import Tiles from "./Tiles";
const videoList = [
  {
    videoId: "dQw4w9WgXcQ",
    title: "Tile 1",
    channelName: "Channel 1",
    views: 100,
    date: "2022-01-01",
  },
  {
    videoId: "dQw4w9WgXcQ",
    title: "Tile 2",
    channelName: "Channel 2",
    views: 200,
    date: "2022-01-02",
  },
  {
    videoId: "dQw4w9WgXcQ",
    title: "Tile 3",
    channelName: "Channel 3",
    views: 300,
    date: "2022-01-03",
  },
  {
    videoId: "dQw4w9WgXcQ",
    title: "Tile 4",
    channelName: "Channel 4",
    views: 400,
    date: "2022-01-04",
  },
  {
    videoId: "dQw4w9WgXcQ",
    title: "Tile 5",
    channelName: "Channel 5",
    views: 500,
    date: "2022-01-05",
  },
  {
    videoId: "dQw4w9WgXcQ",
    title: "Tile 6",
    channelName: "Channel 6",
    views: 600,
    date: "2022-01-06",
  },
  {
    videoId: "dQw4w9WgXcQ",
    title: "Tile 7",
    channelName: "Channel 6",
    views: 600,
    date: "2022-01-06",
  },
];

function YoutubeSearchController() {
  return <Tiles videoList={videoList} />;
}

export default YoutubeSearchController;
