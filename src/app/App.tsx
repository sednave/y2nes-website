import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './routes/Homepage/Homepage';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import Characters from './routes/Characters/Characters';
import Store from './routes/Store/Store';
import Music from './routes/Music/Music';
import About from './routes/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/music" element={<Music />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
