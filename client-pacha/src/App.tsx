import { useState } from 'react'
import { AppRoute } from './routers/app.route'
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from './components/theme-provider';
import { ModeToggle } from './components/mode-toggle';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HashRouter >
        <AppRoute />
      </HashRouter>
    </ThemeProvider>

  )
}

export default App
