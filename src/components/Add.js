/*This component allows the user to search for films and series,
displaying results from the TheMovieDB API.
It manages the state of the query and results,
and makes a request to the API whenever the user types in the search field.*/
import React, { useState } from 'react'
import { ResultCard } from './ResultCard';

export const Add = () => {
  // Definition of states to store the user query and API results.
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Function called when changing the value of the search field
  const onChange = e => {
    e.preventDefault(); // Prevent default event behavior (form submission)

    setQuery(e.target.value); // Update the query state

    // Make a request to TheMovieDB API
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=true&query=${e.target.value}`).then((res) => res.json())
    .then((data) => {
      if (!data.errors) {
        const filteredResults = data.results.filter(
          (item) => item.media_type === 'movie' || item.media_type === 'tv'
        );
        setResults(filteredResults); // Update the state of the results
      } else {
        setResults([]); // Update the state of the results
      }
    });
  }

  // Render the search interface
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search Movies & TV Series"
              value={query}
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((item) => (
                <li key={item.id}>
                  <ResultCard item={item}/>

                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
