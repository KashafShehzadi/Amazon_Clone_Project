import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import the StateProvider and reducer logic
import { StateProvider } from "./StateProvider.jsx";
import reducer, { initialState } from './reducer.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap App with StateProvider */}
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </StrictMode>,
);
