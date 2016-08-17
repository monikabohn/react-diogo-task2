require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ArtistsPage from 'components/ArtistsPage';
import AlbumsPage from 'components/AlbumsPage';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
