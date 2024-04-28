import PodcastTable from "../Components/PodcastTable";
import PodcastEpisodesNumber from "../Components/PodcastEpisodesNumber";
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
