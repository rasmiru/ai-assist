
import './index.css';
import openAIRequest from '../../util/openAIRequest'
import { useEffect, useState } from 'react';
import Homepage from '../Homepage';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import PersonaPage from '../PersonaPage';

function App() {
  const [aiMessage, setAiMessage] = useState('');
  const userQuery = 'What is an AI?'

  useEffect(() => {
    const fetchAiMessage = async () => {
      try {
        const response = await openAIRequest(userQuery);

        // Update the state with the AI message
        setAiMessage(response);
      } catch (error) {
        // Handle any errors here
        console.error('Error fetching AI message:', error);
      }
    };

    fetchAiMessage();

  }, [])
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
