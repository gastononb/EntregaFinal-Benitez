import { Link } from 'react-router-dom'
import  './Item.css'
//renderizado de cada item con sus detalles

const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <div className='cartaProducto'>
        <img src={img} className='cartaImg' alt={nombre} />
        <strong>{nombre}</strong>
        <p>Precio: ${precio}</p>
        <p> id:{id}</p>
        <p>stock: {stock}</p>
        <Link to={`/${id}`} className='boton'>Ver detalles</Link>
        
    </div>
  )
}

export default Item