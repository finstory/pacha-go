
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/global.css'
import "./_configs/styles/sass/app.scss";

createRoot(document.getElementById('root')!).render(
  <App />
)
