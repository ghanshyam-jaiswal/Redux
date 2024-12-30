import React, { useEffect } from 'react';
import Nav from './Nav';
import Count from './Count';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchData } from './Redux/store';
import { Button, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();
  
  // Ensure this matches your Redux state structure
  const { data, loading, error } = useSelector((state) => state);

  // Fetch data when the component mounts
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));  
    // console.log("toast",item.title)
    if (item && item.title) {
      // toast.success(`${item.title} has been added to the cart!`, {
      //   position: toast.POSITION.TOP_CENTER,
      // });
          toast.success('success')

    }
    // toast.success('success')
  };

  // Internal CSS styles
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
      marginTop:'30vh'
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
      {/* Uncomment if you want the Nav component */}
      {/* <Nav /> */}
      <h1 style={styles.header}>Home</h1>
      {/* <Count />  Assuming Count is another component */}
      
      {/* <h2 style={styles.subHeader}>Data Viewer</h2> */}
      
      {/* Show loading message */}
      {/* {loading && <p style={styles.loading}>Loading...</p>} */}
      {loading && <p style={styles.loading}>      <Spinner animation="border" variant="primary" />      </p>}

      {/* Show error message */}
      {error && <p style={styles.error}>{error}</p>}
      
      {/* Show the posts if they exist */}
      {data && data.length > 0 ? (
        <div style={styles.items}>
          {data.map((post) => (
            <div key={post.id} style={styles.post}>
              <h3 style={styles.postTitle}>{post.title}</h3>
              <p style={styles.postBody}>${post.price}</p>  {/* Display post price */}
              <img
                src={post.image}
                alt="Post"
                style={styles.postImage}
              />
               <Button variant="dark" style={styles.button} onClick={()=>handleAddToCart(post)}>Add to Cart</Button>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>No data available</p>
      )}
    </div>
  );
};

export default Home;
