import React from "react";
import Divider from "./Divider";
import { Link } from "react-router-dom";

const PodcastDetail = ({ image, name, author, description, podcastId }) => {
  return (
    <div className="post-card shadow-lg rounded-lg p-8">
      <Link to={`/podcast/${podcastId}`}>
        <img src={image} alt={name} className="mb-8 w-full" />
        <Divider />
        <h1 className="text-2xl font-bold">{name}</h1>
        <h2 className="text-lg font-semibold">by {author}</h2>
      </Link>
      <Divider />
      <p className="text-gray-600 mt-4">Description:</p>
      <p className="text-gray-600 mt-4">{description}</p>
    </div>
  );
};

export default PodcastDetail;
