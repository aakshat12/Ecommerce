import Product from '../../Component/Product';

//For Add Item to Cart
export const addcart =(Product) =>{
    return{
        type: "ADDITEM",
        payload : Product
    }
}

//For Delete Item From Cart
export const delcart =(Product) =>{
    return{
        type: "DELITEM",
        payload : Product
    }
}