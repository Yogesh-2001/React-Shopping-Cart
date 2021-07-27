import React,{createContext, useEffect, useReducer} from 'react';
import { products } from './Products';
import ContextCart from './ContextCart';
import {reducer} from './reducer';
import '../index.css';


const initialState={
  item: products,
  totalCost : 0,
  totalItem :0

};
export const Cartcontext = createContext();
const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const removeItem=(id)=>{
    return dispatch({
      type:'REMOVE_ITEM',
      payload:id
    })
  };

  const clearCart=()=>{
    return dispatch(
     { type:'CLEAR_CART'}
    )
  }
  const Increment=(id)=>{
    return dispatch(
      {
        type:'INCREMENT',
        payload:id
      }
    )
  }
  const Decrement=(id)=>{
    return dispatch(
      {
        type:'DECREMENT',
        payload:id
      }
    )
  }
 
  useEffect(() => {
    dispatch({ type: "TOTAL_ITEMS" });
  }, [state.item]);

  

  return (
    <>
     <Cartcontext.Provider value={{...state,removeItem,clearCart,Increment,Decrement}}>
       <ContextCart />
     </Cartcontext.Provider>
    </>
  );
}

export default Cart;