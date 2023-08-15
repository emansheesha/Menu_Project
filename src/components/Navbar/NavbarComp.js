import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarComp.css';
function NavbarComp() {
    return (
        <Navbar expand="lg" variant='dark' bg='dark' collapseOnSelect >
            <Container fluid>
                <Navbar.Brand href="#" className='header'>مطعم جديد</Navbar.Brand>

                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="أبحث"
                        className="me-2 search-input"
                        aria-label="Search"
                    />
                    <Button className='mx-3 search-btn'>أبحث</Button>
                </Form>

            </Container>
        </Navbar>
    );
}

export default NavbarComp;