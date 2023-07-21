import './ItemCount.css'
import '../../App.css'
import { useState } from 'react'
//contador que agrega y resta una unidad al mismo para que luego se tome de referencia en el boton "agregar al carrito"


const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);
    const sumarContador = ()=>{
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const restarContador = ()=>{
        if (contador > 1) {
            setContador(contador - 1)
        }
    }
  return (
    <div className='agregarCarrito'> 
    <div className='divContador' >
          <p className='sumarRestar boton' onClick={restarContador}> - </p>
          <h3 className='pContador'> {contador} </h3>
          <p className='sumarRestar boton'  onClick={sumarContador}> + </p>
    </div>
          <button className='boton' onClick={()=>funcionAgregar(contador)}> Argregar al carrito</button>
         </div>
  )
}

export default ItemCount
