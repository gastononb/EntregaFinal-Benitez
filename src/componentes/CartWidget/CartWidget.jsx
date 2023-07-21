import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
//icono del carrito
const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const carrito = "https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png"
  return (
    <div>
      <Link to={'/cart'} className='cantidadCarrito'>
        <img src={carrito} className="imgCarrito" alt="carrito" />
        <strong >{cantidadTotal > 0 && <strong > {cantidadTotal}</strong>}</strong>
      </Link>
    </div>
  )
}

export default CartWidget