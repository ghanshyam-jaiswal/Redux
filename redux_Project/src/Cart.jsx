import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './Redux/store';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch=useDispatch()

  console.log("cart", cart)

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '900px',
      margin: '0 auto',
    },
    header: {
      color: '#333',
    },
    subHeader: {
      color: '#555',
    },
    loading: {
      textAlign: 'center',
      fontSize: '18px',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      fontSize: '18px',
    },
    items: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr', // 3 columns layout
      gap: '20px',
      marginTop: '20px',
    },
    post: {
      backgroundColor: '#f9f9f9',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // This will ensure content is spaced between, with button at the bottom
      height: '100%', // Ensures the post container takes up the available space
    },
    postTitle: {
      fontSize: '18px',
      color: '#2c3e50',
      marginBottom: '10px',
    },
    postBody: {
      color: '#7f8c8d',
      fontSize: '14px',
    },
    postImage: {
      width: '200px', // Fixed width for the image
      height: '200px', // Fixed height for the image
      objectFit: 'cover', // Ensures the image covers the space without distortion
      borderRadius: '8px',
      marginTop: '10px',
    },
    button: {
      marginTop: 'auto', // This ensures the button is at the bottom of the container
    },
  };

  return (
    <div style={styles.container}>
      <h1>Cart</h1>
      {/* {data && data.length > 0 ? ( */}
      {cart && cart.length ? (
        <div style={styles.items}>
          {cart.map((post) => (
            <div key={post.id} style={styles.post}>
              <h3 style={styles.postTitle}>{post.title}</h3>
              <p style={styles.postBody}>${post.price}</p>  {/* Display post price */}
              <img
                src={post.image}
                alt="Post"
                style={styles.postImage}
              />
               <Button variant="danger" style={styles.button} onClick={()=>dispatch(removeFromCart(post))}>Remove Cart</Button>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available <Link to={'/'}>add now</Link ></p>
      )}
    </div>
  )
}

export default Cart
