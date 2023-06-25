import { useEffect, useState,  } from 'react'
import { getProductos, getCatProducto } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'

const ItemListConteiner = () => {
    const [ productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(()=>{
     const mostrarProductos = idCategoria? getCatProducto: getProductos;
     mostrarProductos(idCategoria)
     .then(prod => setProductos(prod))
     .catch( error => console.log(error))
    }, [idCategoria])
    
  return (
    <div className='divContenedorListas'>
      <h1>Nuestros productos</h1>
      <ItemList productos ={productos}/>
    </div>
  )
}

export default ItemListConteiner