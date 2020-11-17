import React, { useState } from 'react'
import Home from './pages/Home'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarText,
  NavItem,
  NavLink
} from 'reactstrap'


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>

      <nav id='myNav'>

        <Navbar light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse className="text-center" isOpen={isOpen} navbar>
            <Nav className="mr-auto ml-auto " navbar>
              <NavItem>
                <a className="myNav" href="#home">Home</a>
              </NavItem>
              {" "}
              <NavItem>
                <a className="myNav" href="#band">Band</a>
              </NavItem>
              {" "}
              <NavItem>
                <a className="myNav" href="#videos">Videos</a>
              </NavItem>
              {" "}
              <NavItem>
                <a className="myNav" href="#contact">Contact</a>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </nav>
      <Home />
    </>
  )
}

export default App