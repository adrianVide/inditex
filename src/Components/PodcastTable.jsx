import React from "react";

const PodcastTable = ({ episodes }) => {
  console.log(episodes);

  return (
    <div className="p-8 shadow-lg rounded-lg w-full">
      <table class="table-auto w-full">
        <thead>
          <tr className="text-left">
            <th className="pl-4">Title</th>
            <th>Date</th>
            <th className="pr-4">Duration</th>
          </tr>
        </thead>
        <tbody>
          {episodes.slice(1).map((episode) => (
            <tr className="even:bg-gray-100 odd:bg-white h-12 border-t-2 border-grey-900">
              <td className="pl-4">{episode.trackName}</td>
              <td>
                {new Intl.DateTimeFormat("es-ES").format(
                  new Date(episode.releaseDate)
                )}
              </td>
              <td className="pr-4 text-center">{!!episode.trackTimeMillis ? new Date(episode.trackTimeMillis * 1000).toISOString().substr(11, 5) : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PodcastTable;
