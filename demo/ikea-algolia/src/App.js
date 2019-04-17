import React, { Component } from 'react';
import './App.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, RefinementList, NumericMenu, RatingMenu, Pagination, ClearRefinements } from 'react-instantsearch-dom';
import Hit from '../src/components/HitComponent'

const ALG_APP = process.env.REACT_APP_ALG_APP
const SEARCH_KEY = process.env.REACT_APP_SEARCH_KEY

const searchClient = algoliasearch(ALG_APP, SEARCH_KEY);

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="navbar">
          <h1>Ikea - Algolia Demo</h1>
        </div>
        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="demo_ikea">
            <div className="sidebar">
              <ClearRefinements clearsQuery="true" />
              <h2>Product Categories</h2>
              <RefinementList attribute="category" />
              <h2>Price</h2>
              <NumericMenu
                attribute="price"
                items={[
                  { label: ' Less than $50', start: 0, end: 50 },
                  { label: ' $50 - $150', start: 50, end: 150 },
                  { label: ' $150 - $350', start: 150, end: 350 },
                  { label: ' $350 - $500', start: 309, end: 500 },
                  { label: ' $500 - $1000', start: 500, end: 1000 }
                ]}
              />
              <h2>Rating</h2>
              <RatingMenu attribute="rating" />
            </div>
            <div className="main">
              <SearchBox
                translations={{ placeholder: "Search for your next home item by name or type..." }}
              />
              <Hits hitComponent={Hit} />
              <Pagination
                translations={{
                  previous: '‹',
                  next: '›',
                  first: '«',
                  last: '»',
                  page(currentRefinement) {
                    return currentRefinement;
                  },
                  ariaPrevious: 'Previous page',
                  ariaNext: 'Next page',
                  ariaFirst: 'First page',
                  ariaLast: 'Last page',
                  ariaPage(currentRefinement) {
                    return `Page ${currentRefinement}`;
                  },
                }}
              />
            </div>

          </InstantSearch>
        </div>
        <div className="footer">
          <p>Demo by <a href="http://linkedin.com/in/montezsmith">Tez Smith</a></p>
        </div>
      </div>
    );
  }
}



export default App;

