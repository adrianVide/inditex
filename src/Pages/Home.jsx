import { useEffect, useState } from "react";
import { formatPodcasts } from "../services/formatPodcasts";
import { searchPodcasts } from "../services/searchPodcasts";
import PodcastCard from "../components/PodcastCard";
import { useLoadingContext } from "../context/LoadingContext";

const ARRAY_CACHE_KEY = "cachedPodcasts";
const FETCH_URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

const Home = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { setLoadingStatus } = useLoadingContext();

  const renderPodcasts = searchTerm === "" ? podcasts : filteredPodcasts;

  useEffect(() => {
    setLoadingStatus(true);
    (async () => {
      const cachedData = JSON.parse(localStorage.getItem(ARRAY_CACHE_KEY));
      if (
        cachedData &&
        Date.now() - cachedData.timestamp < 24 * 60 * 60 * 1000
      ) {
        setPodcasts(cachedData.podcasts);
        setFilteredPodcasts(cachedData.podcasts);
        setLoadingStatus(false);
      } else {
        fetch(`https://api.allorigins.win/get?url=${FETCH_URL}`)
          .then((response) => {
            if (!response.ok) {
              console.log("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            data = JSON.parse(data.contents);
            const formattedPodcasts = formatPodcasts(data);
            if (formattedPodcasts.length === 0) {
              console.log("No podcasts found");
            }
            if (formattedPodcasts.length > 0) {
              setPodcasts(formattedPodcasts);
              setFilteredPodcasts(formattedPodcasts);
              localStorage.setItem(
                ARRAY_CACHE_KEY,
                JSON.stringify({
                  podcasts: formattedPodcasts,
                  timestamp: Date.now(),
                })
              );
            }
          })
          .catch((error) => {
            console.error("Error fetching podcasts:", error);
          })
          .finally(() => {
            setLoadingStatus(false);
          });
      }
    })();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setFilteredPodcasts(searchPodcasts(podcasts, searchTerm));
  };
  return (
    <>
      <div className="text-right">
        <span className="bg-cyan-600 p-2 rounded-xl text-white font-bold" >{renderPodcasts.length}</span>
        <input
          type="search"
          id="site-search"
          name="q"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Filter podcasts"
          className="ml-4 p-2 border border-gray-300 rounded min-w-80"
        />
      </div>
      <div className="grid grid-cols-4 gap-y-32 gap-x-8 mt-32">
        {renderPodcasts?.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </>
  );
};

export default Home;
