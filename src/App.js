import React, { Component } from 'react';
import './App.css';
import constants from './constants';
import Input from './components/atoms/Input';
import CardList from './components/molecules/cardlist';
import EmptyCard from './components/molecules/emptycardtemplate';

class App extends Component {
  state = {
    results: constants,
    searchResults: [],
    isSearchResults: false,
  };

  _searchResults = e => {
    const { value: searchString } = e.target;
    if (!searchString) {
      this.setState({
        searchResults: [],
        isSearchResults: false,
      });
      return;
    }
    const { results } = this.state;
    const filterSearchList = results.filter(
      result =>
        result.id.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
        result.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
        result.address.toLowerCase().indexOf(searchString.toLowerCase()) > -1      
    );
    this.setState({
      searchResults: filterSearchList,
      isSearchResults: true,
    });
  };

  render() {
    const { searchResults, isSearchResults } = this.state;
    return (
      <div>
        <div className="Search-Container">
          <Input type="search" _handleChange={this._searchResults} />
        </div>
        <div>
          {isSearchResults ? (
            searchResults.length > 0 ? (
                <CardList 
                  listItems={searchResults}
                />
            ) : (
              <EmptyCard 
                text={'No User Found'}
              />
              )
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
