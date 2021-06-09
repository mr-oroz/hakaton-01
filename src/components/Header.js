import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'

class Header extends React.Component {
    state = {
        value: 'a'
    }
    render() {
        const { Categories, handleClick, handleClickDisCount } = this.props
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Про Маркет</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Главная</Nav.Link>
                            <Nav.Link onClick = {() => {handleClickDisCount()}} href="#link">Скидка</Nav.Link>
                            <NavDropdown title="Категория" id="basic-nav-dropdown">
                                {Categories.map((v, i) => {
                                    return <NavDropdown.Item key={i} onclick={()=> {handleClick(v.id)}}  href="#action/3.1">{v.short_title}</NavDropdown.Item>
                                })}
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Найти..." className="mr-sm-2" />
                            <Button variant="outline-success">Найти</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}
export default Header;