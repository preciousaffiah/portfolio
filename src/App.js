import './App.css';
import HomePage from './view/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Iko from './view/projects/iko';
import Skild from './view/projects/skilld';
import Ticketing from './view/projects/ticketing';
import Projects from './view/projects';
import Word from './view/projects/word';
import RealEstate from './view/projects/estate';
import TopShelf from './view/projects/top-shelf';
import Restaurant from './view/projects/restaurant';
import YouChat from './view/projects/chat';
import GoogleAnalytics from './components/analytics';
function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Header /> */}
        <GoogleAnalytics />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/iko-africa" element={<Iko />} />
            <Route path="/projects/skild-africa" element={<Skild />} />
            <Route path="/projects/ticketing" element={<Ticketing />} />
            <Route path="/projects/word-hive" element={<Word />} />
            <Route path="/projects/real-estate" element={<RealEstate />} />
            <Route path="/projects/top-shelf" element={<TopShelf />} />
            <Route path="/projects/restaurant" element={<Restaurant />} />
            <Route path="/projects/you-chat" element={<YouChat />} />
          </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
