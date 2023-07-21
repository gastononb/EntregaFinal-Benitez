import './Cart.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import CartItem from '../CartItem/CartItem'
//contenedor del carrito que renderiza el componente CartItem 

const Cart = () => {
const {carrito, vaciarCarrito, total, cantidadTotal}  = useContext(CarritoContext)
 if (cantidadTotal === 0) {
    return(
    <div className='divSinProducto contenedorCart'>
    <h2>No hay productos en el carrito!</h2>
    <Link to="/" className='boton'> Ver productos</Link>
    </div>
    )
 }
  return (
    <div className ='contenedorCart'>
        {carrito.map((producto , index) => <CartItem key={index} {...producto} />)}
        <div className='divDetallesCart'>
        <h3> Total: ${total}</h3>
        <h3> Cantidad de productos : {cantidadTotal}</h3>
        <div className='botonesCart'>
        <button className='boton' onClick={()=>{vaciarCarrito()}}>Vaciar carrito</button>
        <Link to={'/checkout'} className='boton'> Finalizar compra</Link>
        </div>
        </div>
    </div>
  )
}

export default Cart