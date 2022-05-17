import { Routes, Route } from 'react-router-dom'
import './App.css';
// Components
import SearchBox from './components/SearchBox'
import Footer from './components/Footer'
// import SingleArt from './components/SingleArt';
import SearchResults from './components/SearchResults';
import ArtShow from './pages/ArtShow';
//Pages
import Main from './pages/Main'
import Arts from './pages/Arts'

function App() {
  return (
    <div>
      {/* <SearchBox /> */}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/:artId" element={<ArtShow />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
