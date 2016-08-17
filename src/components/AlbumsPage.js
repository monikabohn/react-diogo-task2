import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class AlbumsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { albums: { items: []}};
  }

  loadAlbumsFromServer() {
    var url = 'https://api.spotify.com/v1/artists/' + this.props.params.id + '/albums';

    $.ajax({
      url: url,
      dataType: 'json',
      success: (data) => {
        console.log(data);
        this.setState({ albums : data });
      }
    });
  }

  componentDidMount() {
    this.loadAlbumsFromServer();
  }

  render() {
    var albums = this.state.albums.items.map((album) => {
      return (
        <li>{album.name} <img src={album.images[0].url} height="100"/></li>
      );
    });

    return(
      <div>
        <Link to="/artists">Back</Link>
        <h1>My artist albums</h1>
        <ul>
          {albums}
        </ul>
      </div>
    );
  }
}

AlbumsPage.displayName = 'AlbumsPage';

export default AlbumsPage;
