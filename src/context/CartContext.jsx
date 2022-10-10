import React, {  useState, useContext, useEffect} from "react";
import Swal from 'sweetalert2';
export const CartContext =React.createContext([])

export const useCartContext = () => useContext(CartContext);


const productsFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]' )


export const CartProvider =({ children })=>{
    const [cart,setCart] =useState(productsFromLocalStorage);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
        
    }, [cart])
    

    const clearCart =() => {setCart([]);}

    const isInCart =(id) => cart.find (product => product.id === id) ? true : false;

    const removeProduct =(id) => {
        setCart (cart.filter (product => product.id !== id));
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })        
            Toast.fire({
            iconColor:'##F61513',
            color:'white',
            background:'black',
            icon: 'error',
            title: 'Product Deleted'
            })}

    const addProduct =(item, quantity) =>{
        let newCart;
        let product = cart.find (product => product.id === item.id);
        if(product) {
            product.quantity += quantity;
            newCart =[...cart];
        }else {
            product ={ ...item, quantity:quantity};
            newCart =[...cart,product]
        }
        setCart(newCart)
    }


    const totalPrice =() =>{
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts =() => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0)


  return(
    <CartContext.Provider value={{clearCart, isInCart,removeProduct,addProduct, totalPrice,totalProducts,cart}} >
        { children }
    </CartContext.Provider>
  )
    
}

export default CartProvider;

