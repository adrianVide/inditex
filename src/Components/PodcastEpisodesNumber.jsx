import React from "react";

const PodcastEpisodesNumber = ({ number }) => {
  return (
    <div className="p-8 shadow-lg rounded-lg w-full mb-8">
      Episodes: {number}
    </div>
  );
};

export default PodcastEpisodesNumber;
