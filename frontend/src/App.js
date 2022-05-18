import { Routes, Route } from 'react-router-dom'
import './App.css';
// Components
import Footer from './components/Footer'
//Pages
import Main from './pages/Main'
import Arts from './pages/Arts'
import ArtShow from './pages/ArtShow';

function App() {
  return (
    <div className="test">
      {/* <SearchBox /> */}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/arts/:artId" element={<ArtShow />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
