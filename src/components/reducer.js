export const reducer = (state, action) => {
    if (action.type === 'REMOVE_ITEM') {
        return {
            ...state,
            item: state.item.filter((currElem) => {
                return currElem.id !== action.payload;
            }),
        }

    }
    if(action.type=== 'CLEAR_CART'){
        return {
            ...state,
            item:[]
        }
    }
    if(action.type==='INCREMENT'){
        const updateItem  = state.item.map((currElem)=>{
           if(currElem.id === action.payload){
               return {...currElem,quantity:currElem.quantity+1}
           }
           return currElem;

        })
        return {...state,item:updateItem}
    }
    if(action.type==='DECREMENT'){
        const updateItem  = state.item.map((currElem)=>{
            if(currElem.id === action.payload){
                return {...currElem,quantity:currElem.quantity-1}
            }
            return currElem;
 
         })
         .filter((currElem)=>{
            return currElem.quantity !==0
         }
          
         );
         return {...state,item:updateItem}
    }
    if(action.type==='TOTAL_ITEMS'){
       let {totalCost,totalItem} = state.item.reduce((accum,currVal)=>{
          let {price,quantity} = currVal;
          accum.totalCost += price*quantity;
          accum.totalItem += quantity;
          return accum;
       },{totalItem:0,
        totalCost:0            
         });
       return {...state,totalItem,totalCost}
    }

// return state;
};