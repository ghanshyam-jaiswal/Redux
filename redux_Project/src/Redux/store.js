// import { createStore } from 'redux';

// // Initial state
// const initialState = {
//   counter: 0,
// };

// // Reducer function
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, counter: state.counter + 1 };
//     case 'DECREMENT':
//       return { ...state, counter: state.counter - 1 };
//     case 'MULTIPLY':
//       return { ...state, counter: state.counter * 2 };
//     case 'DIVIDE':
//       return { ...state, counter: state.counter / 2 };
//     default:
//       return state;
//   }
// };

// // Create store
// const store = createStore(counterReducer);

// export default store;



import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  // Ensure this is the correct import
import axios from 'axios';

// Initial state
const initialState = {
  counter: 0,
  cart:[],
  data: [],
  loading: false,
  error: null,
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'MULTIPLY':
      return { ...state, counter: state.counter * 2 };
    case 'DIVIDE':
      return { ...state, counter: state.counter / 2 };
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_TO_CART':
        const existingItem = state.cart.find((item) => item.id === action.payload.id);
        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        } else {
          return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
        }
    case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
    default:
      return state;
  }
};

// Async Action Creator (Thunk) for API call
export const fetchData = () => async (dispatch) => {
  dispatch({ type: 'FETCH_DATA_REQUEST' });
  try {
    // const response = await axios.get('https://api.example.com/data'); // Replace with your API URL
    const response = await axios.get('https://fakestoreapi.com/products'); // Replace with your API URL
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
  }
};

// Action creators for cart
export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item,
});

export const removeFromCart = (item) => ({
  type: 'REMOVE_FROM_CART',
  payload: item,
});

// Create store with Thunk middleware
const store = createStore(counterReducer, applyMiddleware(thunk));  // Apply middleware

export default store;
