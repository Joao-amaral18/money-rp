import { Navbar } from 'flowbite-react'
import { Sun } from 'phosphor-react'
import { useState } from 'react'

function App() {

  const [darkToggle, setDarkToggle] = useState(false);

  function handleDark() {
    setDarkToggle(true)
  }

  return (
    <div className="dark">
      <Navbar

        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/navbars"
            active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Services
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Contact
          </Navbar.Link>
          <Navbar.Link onClick={handleDark}>
            <Sun size={24} />
          </Navbar.Link>
        </Navbar.Collapse>

      </Navbar >
    </div>
  )
}

export default App
