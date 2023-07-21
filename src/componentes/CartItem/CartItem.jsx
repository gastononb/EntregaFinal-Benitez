import './CartItem.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
//contenedor para los detalles de cada producto agregado al carrito
const CartItem = ({item, cantidad}) => {

const {eliminarProducto} = useContext(CarritoContext)

  return (
    <div className='contenedorCartItem'>
      <div className='divImgCart' >
        <img className='ImgCart' src={item.img} alt={item.nombre} />
      </div>
      <div className='divDetallesCartItem'>
        <h2>{item.nombre}</h2>
        <p>x {cantidad}</p>
        <p>precio: ${item.precio} </p>
        <button className='boton' onClick={()=>eliminarProducto(item.id)}> Eliminar</button>
        </div>
    </div>
  )
}

export default CartItem