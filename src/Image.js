import React from "react";

export default function Image({ imageUrl }) {
  return (
    <div>
      <h1>New York</h1>
      {imageUrl ? (
        <img src={imageUrl} alt="Random Image" />
      ) : (
        <p>Press Get Image!</p>
      )}
    </div>
  );
}