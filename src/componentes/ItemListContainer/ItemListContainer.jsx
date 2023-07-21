import { useEffect, useState, } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../service/config'
//contenedor de lista de producto tanto en general como por categoria
const ItemListConteiner = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "inventario"),
      where("idCategoria", "==", idCategoria)) : collection(db, "inventario")
    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(
          doc => {
            const data = doc.data();
            return { id: doc.id, ...data }
          }
        )
        setProductos(nuevosProductos)
      })
      .catch(error => console.log(error));
  }, [idCategoria])

  return (
    <div className='divContenedorListas'>
      {!idCategoria && <div> <img className='imgBanner' src='https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/themes/luxury/1-slide-1621354774117-7453350908-21ffa8bafaa2d508a6f12030b249390b1621354775-1920-1920.webp?2080752426' alt=''></img></div>}
      <h1>Nuestros productos</h1>
      <ItemList productos ={productos}/>
    </div>
  )
}

export default ItemListConteiner