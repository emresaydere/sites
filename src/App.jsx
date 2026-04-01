import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Experiments from './pages/Experiments';

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkinda" element={<About />} />
        <Route path="/deneyler" element={<Experiments />} />
      </Routes>
    </div>
  );
}

export default App;
