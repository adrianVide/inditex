import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PodcastDetail from "../Components/PodcastDetail";
import { Outlet } from "react-router-dom";

const ARRAY_CACHE_KEY = "cachedPodcasts";
const PODCAST_CACHE_KEY = (podcastId) => `podcast-${podcastId}`;

const OneTwo = ({}) => {
  const { podcastId } = useParams();
  const URL = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
  const [podcast, setPodcast] = useState(null);
  const cache = JSON.parse(localStorage.getItem(ARRAY_CACHE_KEY));

  const getPodcastFromCachedPodcasts = (id, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        console.log(array[i]);
        return array[i];
      }
    }
    return "ID not found";
  };

  useEffect(() => {
    const cachedPodcast = JSON.parse(
      localStorage.getItem(PODCAST_CACHE_KEY(podcastId))
    );
    if (
      cachedPodcast &&
      Date.now() - cachedPodcast.timestamp < 24 * 60 * 60 * 1000
    ) {
      setPodcast(cachedPodcast.podcast);
    } else {
      const podcastFromCachedPodcasts = getPodcastFromCachedPodcasts(
        podcastId,
        cache.podcasts
      );
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          const podcast = {
            ...podcastFromCachedPodcasts,
            episodes: data.results,
          };

          console.log(data);
          setPodcast(podcast);
          localStorage.setItem(
            PODCAST_CACHE_KEY(podcastId),
            JSON.stringify({
              podcast,
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
    <div class="grid grid-cols-3 gap-x-32">
      <div>
        <PodcastDetail
          image={podcast.episodes[0].artworkUrl600 || podcast.image}
          name={podcast.title}
          author={podcast.author}
          description={podcast.description}
          podcastId={podcast.id}
        />
      </div>
      <div className="col-span-2">
        <Outlet context={podcast} />
      </div>
    </div>
  );
};

export default OneTwo;
