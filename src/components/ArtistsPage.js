import React from 'react';
import $ from 'jquery';
import SearchForm from 'components/SearchForm';
import ArtistsList from 'components/ArtistsList';

class ArtistsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { artists: {items: []}  },
      filter: ''
    }
  }
  loadListFromServer() {

    $.ajax({
      url: 'https://api.spotify.com/v1/search?type=artist&q=John',
      dataType: 'json',
      success: (data) => {
        this.setState({ data : data });
        console.log(data);
      }
    });
  }

  componentDidMount() {
    this.loadListFromServer();
  }

  handleUpdateFilter(filter) {
    this.setState({filter : filter })
  }

  render() {
    return (
      <div>
        <h1>My artists</h1>
        <SearchForm updateFilter = {this.handleUpdateFilter.bind(this)} />
        <ArtistsList artists = {this.state.data.artists} filter = {this.state.filter}/>
      </div>
    );
  }
}

ArtistsPage.displayName = 'ArtistsPage';

export default ArtistsPage;

