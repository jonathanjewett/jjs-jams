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
  return (
    <div>
      <h1>JJ's Jams</h1>
      <Search/>
      <Results/>
      <AddAlbum/>
    </div>
  );
}

export default App;
