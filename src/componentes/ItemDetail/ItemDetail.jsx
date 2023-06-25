import { useState } from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
    const [contador, setContador] = useState(1);
    const sumarContador = ()=>{
        if (contador < 10) {
            setContador(contador + 1)
        }
    }
    const restarContador = ()=>{
        if (contador > 1) {
            setContador(contador - 1)
        }
    }
  return (
    <div className='divDetalles'>
        <img src={img} className='imgDetalle' alt={nombre} />
        <h2>{nombre}</h2>
        <h3> precio: ${precio}</h3>
        <p> Aca voy a poner una descripcion de cada producto y lo voy a traer del asyncmock</p>
        <div className='agregarCarrito'> 
          <p className='sumarRestar' onClick={restarContador}> - </p>
          <p className='pContador'> {contador} </p>
          <p className='sumarRestar'  onClick={sumarContador}> + </p>
         </div>
         <button> Argregar al carrito</button>
    </div>
  )
}

export default ItemDetail