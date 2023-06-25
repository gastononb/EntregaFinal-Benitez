import { Link } from 'react-router-dom'
import  './Item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cartaProducto'>
        <img src={img} className='cartaImg' alt={nombre} />
        <strong>{nombre}</strong>
        <p>Precio: ${precio}</p>
        <p> id:{id}</p>
        <Link to={`/${id}`}>Ver detalles</Link>
        
    </div>
  )
}

export default Item