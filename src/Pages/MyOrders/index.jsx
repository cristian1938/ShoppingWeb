import { useContext } from 'react'
import Layout from "../../Components/Layout"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from '../../Context'


function MyOrders() {
  const context = useContext(ShoppingCartContext)


    return (
      <Layout>
        
        <div>
          <h1>MyOrders</h1>
        </div>
        {
          context.order.map((order, index) =>(
            <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice = {order.totalPrice}
              totalProducts = {order.totalProducts}
            /> 
            </Link>
            
          ))
        }
        
      </Layout>
      
    )
  }
  
  export default MyOrders;