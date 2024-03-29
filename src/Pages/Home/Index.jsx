import { useState, useEffect } from 'react'
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail'

function Home() {
    const [items, setItem] = useState(null)
  // llamada al API
    useEffect(() =>{
      fetch('https://fakestoreapi.com/products')
        .then(response => (response.json()))
        .then(data => setItem(data))
    },[]
    )
    return (
      <Layout>
        Home
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map( item =>(
            <Card key={item.id} data = {item}/>
          ))
        }
        </div>  
        <ProductDetail/>
      </Layout>
 
    )
  }
  
  export default Home