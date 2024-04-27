import React from "react";
import { Link } from "react-router-dom";

const PodcastCard = ({ podcast }) => {
  const { id: podcastId, title, author, image } = podcast;
  return (
    <div className="post-card shadow-lg rounded-lg flex items-center flex-col">
      <img
        src={image}
        alt={title}
        className="rounded-full relative -top-[55px]"
      />
      <div className="flex items-center flex-col relative -top-[55px] text-center">
        <Link key={podcastId} to={`/podcast/${podcastId}`}>
          <h3>{title}</h3>
        </Link>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
