import React from "react";
import { Link } from "react-router-dom";

const PodcastCard = ({ podcast }) => {
  const { id, title, author, image } = podcast;
  return (
    <div className="podcast-card">
      <img src={image} alt={title} />
      <Link key={id} to={`/podcast/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{author}</p>
    </div>
  );
};

export default PodcastCard;
