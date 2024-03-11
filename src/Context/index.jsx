import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) =>{

    //Shopping cart- Increment quantily
    const[count, setCount] = useState(0)

    //Product Detail- Open/Close

    const[isProductDetailOpen, setisProductDetailOpen] = useState(false)
    const openProductDetail = () => setisProductDetailOpen(true)
    const closeProductDetail = () => setisProductDetailOpen(false)

    //Product Detail-How product
    const[productToShow, setProductToShow] = useState([])

    return(
        <ShoppingCartContext.Provider value={
            { 
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow
            }
        }>
         {children}
        </ShoppingCartContext.Provider>

    )
}
