function reducer (state, action ) {
    switch(action.type){
        case 'increment': return state.map((item) => {
            if(item.sku === action.payload.sku){
               return {...item, item.basket = item.basket + 1}
            } 
            return item
        })
    }
}