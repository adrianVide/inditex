import { useEffect, useState } from "react";
import { formatPodcasts } from "../services/formatPodcasts";
import { searchPodcasts } from "../services/searchPodcasts";
import PodcastCard from "../Components/PodcastCard";

const Home = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const renderPodcasts = searchTerm === "" ? podcasts : filteredPodcasts;

  useEffect(() => {
    fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )
      .then((response) => response.json())
      .then((data) => {
        setPodcasts(formatPodcasts(data));
        setFilteredPodcasts(formatPodcasts(data));
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setFilteredPodcasts(searchPodcasts(podcasts, searchTerm));
  };

  return (
    <div className="container mx-auto mt-32 mb-32">
      PODCASTER
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <div className="text-right">
        <span>{renderPodcasts.length}</span>
        <input
          type="search"
          id="site-search"
          name="q"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search podcasts"
          className="ml-4 p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-4 gap-y-32 gap-x-8 mt-32">
        {renderPodcasts?.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </div>
  );
};

export default Home;
