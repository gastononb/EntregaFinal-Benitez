import { useState } from 'react'
import './ItemDetail.css'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
//renderizado de los detalles del producto que se contiene de itemDetailContainer

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion}) => {
  
  const { agregarCarrito } = useContext(CarritoContext);

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio, img };

    agregarCarrito(item, cantidad);
  };

  return (
    <div className='divDetalles'>
      <div className='contenedorImg'>
        <img src={img} className='imgDetalle' alt={nombre} />
        </div>
      <div className='ContenedorDetalles'>
      <h2>{nombre}</h2>
      <h3>Precio: ${precio}</h3>
      <p> <strong>Descripcion:</strong> {descripcion}</p>
      {agregarCantidad > 0 ? (
        <Link  className='boton' to="/cart">
        Terminar compra
        </Link>
      ) : (
        <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
      )}
      </div>
    </div>
  );
};

export default ItemDetail;