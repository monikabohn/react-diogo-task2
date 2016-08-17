import React from 'react';

class SearchForm extends React.Component {

  handleOnChange() {
    var value = this.refs.filter.value;
    this.props.updateFilter(value);

  }

  render() {
    return(
      <input type="text" ref="filter" onChange={this.handleOnChange.bind(this)} />
    );
  }
}

SearchForm.displayName = 'SearchForm';

export default SearchForm;
