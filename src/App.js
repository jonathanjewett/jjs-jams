import React, { useEffect,useState } from 'react';
import axios from 'axios';
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

  const [original, updateOriginal] = useState(sampleData);
  const [results, updateResults] = useState([]);
  const [searchWord, updateSearchWord] = useState("");
  const [newArtist, updateNewArtist] = useState("");
  const [newAlbum, updateNewAlbum] = useState("");


  const searchBar = (e) => {
    updateSearchWord(e.target.value);
    let newResults = [];
    for (var i = 0; i < original.length; i++) {
      if (e.target.value.length > 0 && original[i].name.toLowerCase().includes(e.target.value.toLowerCase())) {
        newResults.push(original[i]);
      }
    }
    updateResults(newResults);
  };

  const artistBar = (e) => {
    updateNewArtist(e.target.value);
  }

  const albumBar = (e) => {
    updateNewAlbum(e.target.value);
  }

  // const submitNew = (e) => {
  //   e.preventDefault();
  //   for (var i = 0; i < original.length; i++) {
  //     if (original[i].artist.toLowerCase() === newArtist.toLowerCase()) {
  //       for (var p = 0; p < original[i].albums.length; p++) {
  //         if (original[i].albums[p].name.toLowerCase() === newAlbum.toLowerCase()) {
  //           return;
  //         }
  //       }
  //       // let tempObj = original[i];
  //       // tempObj.albums.push({name: newAlbum});
  //       updateOriginal(original.map(x => {
  //         if (x.artist.toLowerCase() !== newArtist.toLowerCase()) {
  //           return x;
  //         }
  //         return {...x, albums: [...x.albums, {name: newAlbum}]};
  //       }));

  //       return;
  //     }
  //   }

  //   updateOriginal([...original, {artist: newArtist, albums: [{name: newAlbum}]}]);
  // }

  const submitNew = (e) => {
    axios.post('http://localhost:3001/artists', {
      artist_name: newArtist,
      album_name: newAlbum
    })
  }

  useEffect(() => {
    axios.get('http://localhost:3001/artists').then((res) => {
      const newCollection = res.data;
      updateOriginal(newCollection);
    })
  }, []);

  return (
    <div>
      <h1>JJ's Jams</h1>
      <Search handleSearch={searchBar}/>
      {results.map((artist) => <Results key={artist.artist_id} artist={artist.name} albums={artist.albums} />)}
      <AddAlbum handleNewArtist={artistBar} handleNewAlbum={albumBar} handleSubmit={submitNew}/>
    </div>
  );
}

export default App;
