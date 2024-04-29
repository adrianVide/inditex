import { useOutletContext, useParams } from "react-router-dom";

const Episode = () => {
  const podcast = useOutletContext();
  const { episodeId } = useParams();

  const episode = podcast.episodes.find((episode) => {
    return episode.trackId === parseInt(episodeId);
  });

  const cleanAndValidateHTML = (html) => {
    const cleanedHTML = html.replace(/<(?!\/?(p|strong|em)>).*?>/g, "");
    return cleanedHTML;
  };

  return (
    <div className="p-8 shadow-lg rounded-lg w-full">
      <h1 className="text-2xl font-bold">{episode.trackName}</h1>
      <p
        className="text-gray-600 mt-4 italic"
        dangerouslySetInnerHTML={{
          __html: cleanAndValidateHTML(episode.description),
        }}
      />
      <audio controls className="mt-4">
        <source src={episode.previewUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Episode;
