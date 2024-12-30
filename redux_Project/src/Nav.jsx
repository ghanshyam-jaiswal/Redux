import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoIosCart } from 'react-icons/io';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
  const counter = useSelector((state) => state.counter);
    const { data, loading, error,cart } = useSelector((state) => state);
  

  return (
    <Navbar expand="lg" className="bg-body-tertiary w-100 position-sticky top-0">
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Home Link */}
        <Link to="/" style={styles.link}>
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>

        {/* Cart Link */}
        <Link to="/cart" style={styles.cart}>
          <IoIosCart size={35} />
          {/* <span style={styles.counter}>{counter }</span> */}
          <span style={styles.counter}>{cart.length}</span>
        </Link>
      </Container>
    </Navbar>
  );
};

const styles = {
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  cart: {
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    textDecoration: 'none',
  },
  counter: {
    marginLeft: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'red',
  },
};

export default NavigationBar;
