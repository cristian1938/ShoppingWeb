import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) =>{

    //Shopping cart- Increment quantily
    const[count, setCount] = useState(0)

    //Product Detail- Open/Close
    const[isProductDetailOpen, setisProductDetailOpen] = useState(false)
    const openProductDetail = () => setisProductDetailOpen(true)
    const closeProductDetail = () => setisProductDetailOpen(false)

    //Checkout Side Menu- Open/Close
    const[isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setCheckoutSideMenuOpen(false)

    //Product Detail-How product
    const[productToShow, setProductToShow] = useState({})

    //Shopping cart- add products to cart
    const[cartProducts,setCartProducts] = useState([])

    return(
        <ShoppingCartContext.Provider value={
            { 
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu
            }
        }>
         {children}
        </ShoppingCartContext.Provider>

    )
}
