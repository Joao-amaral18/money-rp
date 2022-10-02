import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Summary from './components/Summary';

function App() {
  const [darkToggle, setDarkToggle] = useState(false);

  function handleDark() {
    setDarkToggle(!darkToggle)
  }

  return (

    <html className={darkToggle ? 'dark bg-gray-900 h-screen' : 'bg-zinc-200 h-screen'}>
      <Header
        handleDark={handleDark}
        darkToggle={darkToggle}
      />
      <Dashboard />
    </html >
  )
}

export default App
