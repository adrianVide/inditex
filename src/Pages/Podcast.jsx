import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneTwo from "../Components/OneTwo";
import PodcastDetail from "../Components/PodcastDetail";

const ARRAY_CACHE_KEY = "cachedPodcasts";
const PODCAST_CACHE_KEY = (podcastId) => `podcast-${podcastId}`;
const Podcast = () => {
  const { podcastId } = useParams();
  const URL = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
  const [podcast, setPodcast] = useState(null);
  const cache = JSON.parse(localStorage.getItem(ARRAY_CACHE_KEY));

  const getDescriptionFromCachedPodcasts = (id, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return array[i].description;
      }
    }
    return "ID not found";
  };

  useEffect(() => {
    const description = getDescriptionFromCachedPodcasts(
      podcastId,
      cache.podcasts
    );
    const cachedPodcast = JSON.parse(
      localStorage.getItem(PODCAST_CACHE_KEY(podcastId))
    );
    if (
      cachedPodcast &&
      Date.now() - cachedPodcast.timestamp < 24 * 60 * 60 * 1000
    ) {
      setPodcast(cachedPodcast.podcast);
    } else {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setPodcast({
            description,
            ...data.results[0],
          });
          localStorage.setItem(
            PODCAST_CACHE_KEY(podcastId),
            JSON.stringify({
              podcast: {
                description,
                ...data.results[0],
              },
              timestamp: Date.now(),
            })
          );
        })

        .catch((error) => {
          console.error("Error fetching podcast:", error);
        });
    }
  }, []);
  console.log(podcast);
  if (!podcast) {
    return null;
  }
  return (
    <OneTwo
      left={
        <PodcastDetail
          image={podcast.artworkUrl600}
          name={podcast.trackName}
          author={podcast.artistName}
          description={podcast.description}
        />
      }
    />
  );
};

export default Podcast;
