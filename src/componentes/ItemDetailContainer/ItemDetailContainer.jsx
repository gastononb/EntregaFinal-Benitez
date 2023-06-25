import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { getUnProducto } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [ producto, setProducto] = useState(null);
    const {itemId} = useParams();

    useEffect(
        ()=>{
            getUnProducto(itemId)
            .then(res => setProducto(res))
            .catch(error => console.log(error))
        }, [itemId]
    )
    console.log(itemId);
  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer