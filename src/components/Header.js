import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container, Card } from 'react-bootstrap'
import PRODUCTS from '../products.json';
import CATEGORIES from '../categories'

class Header extends React.Component {
    state = {
        value: 1,
        found: true,
    }
    
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown onChange={(e) => { this.state.state({ value: e.target.value }) }} title="Discount" id="basic-nav-dropdown">
                                <NavDropdown.Item value={'1'} href="#action/3.1">без акция</NavDropdown.Item>
                                <NavDropdown.Item value={'2'} href="#action/3.2">с акциями</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    <div className='card_position'>
                        {PRODUCTS.map((product) => {
                            return (
                                <>
                                    < div className='card_inner' >
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top img" src={`https://api.office.promarket.besoft.kg/${product.main_image.path.original}`} />
                                            <Card.Body>
                                                <Card.Title>{product.title}</Card.Title>
                                                <Card.Text>{product.price} som</Card.Text>
                                                <Card.Text>{CATEGORIES.filter((categories) => {
                                                    return categories.id === product.category_id
                                                })[0].title}</Card.Text>
                                                <Button variant="primary">Buy</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </Container>
            </>
        );
    }
}
export default Header;