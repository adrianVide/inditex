import React from "react";
import { Link } from "react-router-dom";

const PodcastCard = ({ podcast }) => {
  const { id: podcastId, title, author, image } = podcast;
  return (
    <Link key={podcastId} to={`/podcast/${podcastId}`}>
      <div className="post-card shadow-lg rounded-lg flex items-center flex-col p-2">
        <img
          src={image}
          alt={title}
          className="rounded-full relative -top-[55px]"
        />
        <div className="flex items-center flex-col relative -top-[55px] text-center">
          <h3 className="uppercase">{title}</h3>
          <p className="text-gray-500">Author: {author}</p>
        </div>
      </div>
    </Link>
  );
};

export default PodcastCard;
