import React from 'react';

const Gallery = props => {
  return (
    <div>
      <h1>Gallery</h1>
      <hr />
      {
        props.photos && props.photos.map(photo => {
          return (
            <img src="#" alt={`${photo}`} />
            )
        })
      }
    </div>
  )
};

export default Gallery;