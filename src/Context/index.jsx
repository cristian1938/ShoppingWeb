import { useState, useEffect } from 'react'
import { createContext } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) =>{

    //Shopping cart- Increment quantily
    const[count, setCount] = useState(0)

    //Get products
    const [items, setItems] = useState(null)

    const [filteredItems, setFilteredItems] = useState(null)

    //Get products bt title
    const [searchByTitle, setSearchByTitle] = useState(null)

    //Get products bt category
    const [searchByCategory, setSearchByCategory] = useState(null)
    console.log("searchByCategory: ", searchByCategory)


  // llamada al API
    useEffect(() =>{
      fetch('https://fakestoreapi.com/products')
        .then(response => (response.json()))
        .then(data => setItems(data))
    },[]
    )
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }
    
      const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
      }
    
      const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
          return filteredItemsByTitle(items, searchByTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    
        if (!searchType) {
          return items
        }
      }
    
      useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
      }, [items, searchByTitle, searchByCategory])
    
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

    // Shopping Cart- Order
    const[order, setOrder] = useState([])

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
                closeCheckoutSideMenu,
                order,
                setOrder,
                items,
                setItems,
                setSearchByTitle,
                searchByTitle,
                filteredItems,
                searchByCategory,
                setSearchByCategory
                
            }
        }>
         {children}
        </ShoppingCartContext.Provider>

    )
}
