import React, { useContext } from 'react';
import Items from './Items';
import { FaArrowLeft, FaShoppingCart} from "react-icons/fa";
import { Cartcontext } from './Cart';
import { Scrollbars } from 'react-custom-scrollbars-2';


export default function ContextCart() {
    const {item,clearCart,totalItem,totalCost}= useContext(Cartcontext);
    return(
       <>
       <header >
        <div className='continue-shopping'>
          <FaArrowLeft className='arrow-icon' size='20' />
          <h3>Continue Shopping</h3>
        </div>
        <div >
          <FaShoppingCart className='cart-icon' size='30' />

        </div>

      </header>
      <hr />
      <section className='main-cart-section'>
                <h1>Shopping Cart</h1>
                <p className='total-items'>You have <span>{totalItem}</span> items in shopping cart</p>
                <div className='cart-items'>
                    <Scrollbars>
                    {
                        item.map((currElem)=>{
                            return  <Items key={currElem.id} {...currElem}/>

                    
                        })
                    }
                       
                    </Scrollbars>
                </div>
                <div className='cart-total text-center mt-3'>
                    <h5>Cart Total :<span>{totalCost}₹</span></h5>
                    <button className='btn btn-primary'>Check Out</button>
                    <button className='btn btn-danger ml-3' onClick={clearCart}>Clear Cart</button>
                </div>
            </section>
       </>
    )
};