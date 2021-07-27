import React, { useContext } from 'react';
import { Cartcontext } from './Cart';
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

function Items({img,description,title,price,id,quantity}) {
   const {removeItem,Increment,Decrement} =  useContext(Cartcontext);
    return (
            <>
                <div className='items-info'>
                    <div className='img-div'>
                        <img src={img} alt='m32' />
                    </div>
                    <div className='brand'>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                    <div className='add-minus'>
                        <FaMinus onClick={()=>Decrement(id)}/>
                        <input type='text' id='input' placeholder={quantity} />
                        <FaPlus onClick={()=>Increment(id)}/>
                    </div>
                    <div>
                        <h3>{price}</h3>
                    </div>
                    <div className='remove' >
                        <FaTrash size='15' onClick={()=>removeItem(id)} />
                    </div>
                </div>
                <hr />
            </>
        )
 
}

export default Items;