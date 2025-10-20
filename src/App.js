import './App.css';
import HomePage from './view/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Iko from './view/projects/iko';
import Skild from './view/projects/skilld';
import Liwu from './view/projects/liwu';
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
        // <GoogleAnalytics />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
