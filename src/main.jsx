import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Ensure this file includes @tailwind base, @tailwind components, @tailwind utilities
import App from './App.jsx';
import { gsap } from "gsap"; // If you plan to use GSAP in your app

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
