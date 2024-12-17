import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'tailwindcss/tailwind.css'; // Tailwind CSS should be imported after
import App from './App.jsx'
import { gsap } from "gsap";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
