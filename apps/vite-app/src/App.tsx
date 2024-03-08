import { useState } from "react"
import { Components } from "@leomadlib/utils";

function App() {

  const [darkMode, setState] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const toggleDarkMode = () => {
    setState(!darkMode);
    setAtributeOnRoot('theme', darkMode ? 'dark' : 'light');
  }

  function setAtributeOnRoot(name: string, value: string) {
    const root = document.documentElement;
    if (root) root.setAttribute(name, value);
  }

  setAtributeOnRoot('data-theme', darkMode ? 'dark' : 'light');
  
  return (
    <>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <h1>Hello Vite + React!</h1>
      <Components.Buttons.Button />
    </>
  )
}

export default App
