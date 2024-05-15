import React, { useEffect, useState } from "react";
import Tiles from "./Tiles";

const API_KEY = process.env.REACT_APP_API_KEY;

function YoutubeSearchController({ searchText }) {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const query = searchText;
    const maxResults = 20;
    const searchYoutube = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}&type=video&maxResults=${maxResults}`
        );
        const data = await response.json();
        console.log("Data from YouTube API", data);
        setVideoList(
          data.items.map((item) => ({
            videoId: item.id.videoId,
            title: item.snippet.title,
            channelName: item.snippet.channelTitle,
            date: item.snippet.publishedAt,
          }))
        );
        // setVideos(data.items);
      } catch (error) {
        console.error("Error fetching data from YouTube API", error);
      }
    };
    searchYoutube();
  }, [searchText]);

  return <Tiles videoList={videoList} />;
}

export default YoutubeSearchController;