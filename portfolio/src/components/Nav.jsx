import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  )
   
}

export default NavBar;