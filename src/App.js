import React, { useEffect, useState } from 'react';
import './App.css';
import Results from './components/Results.jsx';
import Search from './components/Search.jsx';
import AddAlbum from './components/AddAlbum.jsx';

function App() {
  let sampleData = [
    {
      artist: "Dance Gavin Dance",
      albums: [
        {name: "Downtown Battle Mountain 2"},
        {name: "Mothership"}
      ]
    },
    {
      artist: "Arctic Monkeys",
      albums: [
        {name: "Whatever People Say I am, That's What I'm Not"},
        {name: "Tranquility Base Hotel & Casino"}
      ]
    },
    {
      artist: "blink-182",
      albums: [
        {name: "Enema of The State"},
        {name: "The Mark, Tom And Travis Show"},
        {name: "Take Off Your Pants And Jacket"}
      ]
    }
  ];

  const [results, updateResults] = useState([]);
  const [searchWord, updateSearchWord] = useState("");


  const searchBar = (e) => {
    updateSearchWord(e.target.value);
    let newResults = [];
    for (var i = 0; i < sampleData.length; i++) {
      if (e.target.value.length > 0 && sampleData[i].artist.toLowerCase().includes(e.target.value)) {
        newResults.push(sampleData[i]);
      }
    }
    updateResults(newResults);
  };

  return (
    <div>
      <h1>JJ's Jams</h1>
      <Search handleSearch={searchBar}/>
      <Results results={results}/>
      <AddAlbum/>
    </div>
  );
}

export default App;
