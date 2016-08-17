import React from 'react';

const Pagination = ({ total, limit, offset, path  }) => {

  let pages = Math.ceil(total / limit);
  let offset = 0;
  let prev = 0;
  let next = 0;

  return (

  <Link to={'/albums/' + artist.id}>
    {artist.name} <img src={artist.images[0] && artist.images[0].url} height="100"/>
  </Link>

)};


Pagination.displayName = 'Pagination';

export default Pagination;
