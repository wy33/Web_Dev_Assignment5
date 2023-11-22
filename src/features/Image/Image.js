import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectImageUrl, setImageUrl } from './ImageSlice';
import { Link, } from 'react-router-dom';

export default function Image() {
  const dispatch = useDispatch();
  const imageUrl = useSelector(selectImageUrl);

  const handleGetImage = () => {
    const imageEndpoint = 'https://api.unsplash.com/photos/random?query=newyorkcity&client_id=0-afBKY6mwQSalPCH365npBnVfjKlYNL6bIwH9Zz8PY';

    fetch(imageEndpoint)
      .then(response => response.json())
      .then(data => {
        if (data.urls && data.urls.regular) {
          // Dispatch the action to set the image URL in the Redux store
          dispatch(setImageUrl(data.urls.regular));
        } else {
          console.error('Invalid image data format');
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>New York</h1>
      {imageUrl && (
        <Link to="/weather">
          <img src={imageUrl} alt="Random Image" />
        </Link>
      )}
      <button onClick={handleGetImage}>Get Image</button>
    </div>
  );}
