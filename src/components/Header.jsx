import React from 'react'
import { Nav,Navbar, Container, FormControl, Dropdown, Badge } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg='dark' variant='dark' style={{ height: 80 }}> 
        <Container>
            <Navbar.Brand>
                <Link to="/">Shoppin Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl 
                    style={{ width:500 }}
                    placeholder="Search a product"
                    className="m-auto"
                />
            </Navbar.Text>
            <Nav>
                <Dropdown>
                    <Dropdown.Toggle variant='success'>
                        <FaShoppingCart className="ShoppingCart"/>
                        <Badge>{10}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth:370 }}>
                        <span style={{ padding:10 }}>Cart is empty</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header