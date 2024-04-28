import React from "react";
import Divider from "./Divider";

const PodcastDetail = ({ image, name, author, description }) => {
  return (
    <div className="post-card shadow-lg rounded-lg p-8">
      <img src={image} alt={name} className="mb-8 w-full" />
      <Divider />
      <h1 className="text-2xl font-bold">{name}</h1>
      <h2 className="text-lg font-semibold">by {author}</h2>
      <Divider />
      <p className="text-gray-600 mt-4">Description:</p>
      <p className="text-gray-600 mt-4">{description}</p>
    </div>
  );
};

export default PodcastDetail;
