import './App.css';
import HomePage from './view/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Iko from './view/iko';
import Skild from './view/skilld';
import SerializationJs from './view/serialization';
import Ticketing from './view/ticketing';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Header /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/iko-africa" element={<Iko />} />
            <Route path="/skild-africa" element={<Skild />} />
            <Route path="/js-serialization" element={<SerializationJs />} />
            <Route path="/ticketing" element={<Ticketing />} />
          </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
