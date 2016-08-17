import React from 'react';
import { Link } from 'react-router';

require('styles/ArtistsList.css');

class ArtistsList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var filtered = this.props.artists.items.filter((artist) => {
      return (artist.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) !== -1);
    });

    var artistName = filtered.map((artist) => {
      return (
        <li>
          <Link to={'/albums/' + artist.id}>
            {artist.name} <img src={artist.images[0] && artist.images[0].url} height="100"/>
          </Link>
        </li>
      );
    });

    return(
      <div>
        <ul>
          {artistName}
        </ul>
      </div>
    );
  }
}

ArtistsList.displayName = 'ArtistsList';

export default ArtistsList;
