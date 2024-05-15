import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

function useYoutubeSearch(searchText) {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const query = searchText;
    const maxResults = 5;
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
            thumbnail: item.snippet.thumbnails.default.url,
          }))
        );
        // setVideos(data.items);
      } catch (error) {
        console.error("aError fetching data from YouTube API", error);
      }
    };
    searchYoutube();
  }, [searchText]);
  return videoList;
}

export default useYoutubeSearch;
