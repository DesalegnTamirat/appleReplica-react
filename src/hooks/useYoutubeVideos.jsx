import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw";
const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

const useYoutubeVideos = (maxResults) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(YOUTUBE_SEARCH_URL, {
          params: {
            part: "snippet",
            order: "date",
            maxResults,
            channelId: CHANNEL_ID,
            key: API_KEY,
          },
        });

        setVideos(response.data.items);
      } catch (err) {
        console.error("Error fetching YouTube videos:", err.message);
        setError(
          <>
            <span>Failed to fetch videos.</span>
            <p>Please check your API KEY or search link.</p>
          </>
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [maxResults]);

  return { videos, isLoading, error };
};

export default useYoutubeVideos;
