import { Routes, Route } from 'react-router-dom'
// Components
import NavOne from './components/NavOne'
import NavTwo from './components/NavTwo'
import SearchBox from './components/SearchBox'
import Footer from './components/Footer'
import SingleArt from './components/SingleArt';
import ArtShow from './components/ArtShow';
import './App.css';

function App() {
  return (
    <div>
      <NavOne />
      <SearchBox />
      <Routes>
        <Route exact path="/" element={<SingleArt />} />
        <Route path="/:artId" element={<SingleArt />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
