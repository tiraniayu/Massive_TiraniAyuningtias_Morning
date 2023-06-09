import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
      <Navbar varian="Dark">
        <Container>
          <Navbar.Brand style={{ color: 'white' }} href="/">TiraniFilms</Navbar.Brand>
          <Nav>
          <Nav.Link style={{ color: 'white' }} href="#Trending">Trending</Nav.Link >
          <Nav.Link style={{ color: 'white' }} href="#Disney">Disney</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavigationBar
