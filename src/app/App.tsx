import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './routes/Homepage';
import NotFoundPage from './routes/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/characters" element={<Homepage />} /> {/* TODO Add Characters Page */}
        <Route path="/about" element={<Homepage />} /> {/* TODO Add About Page */ }
        <Route path="/store" element={<Homepage />} /> {/* TODO Add Store Page */ }
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
