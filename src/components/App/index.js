
import './index.css';
import Homepage from '../Homepage';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import PersonaPage from '../PersonaPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/personas/:id" element={<PersonaPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
