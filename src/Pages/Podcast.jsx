import PodcastTable from "../components/PodcastTable";
import PodcastEpisodesNumber from "../components/PodcastEpisodesNumber";
import { useOutletContext } from "react-router-dom";

const Podcast = () => {
  const podcast = useOutletContext();
  return (
    <>
      <PodcastEpisodesNumber number={podcast.episodes[0].trackCount} />
      <PodcastTable episodes={podcast.episodes} podcastId={podcast.id}/>
    </>
  );
};

export default Podcast;
