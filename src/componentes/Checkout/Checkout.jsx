import './Checkout.css'
import { useState, useEffect, useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../service/config'
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
//checkout donde el cliente ingresa sus datos para luego recibir un idOrden

const Checkout = () => {
    const {carrito, vaciarCarrito, cantidadTotal, total} = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfimacion] = useState("");
    const [error, setError] = useState("");
    const [idOrden , setIdOrden] = useState("");
    const [carritoVacio, setCarritoVacio] = useState(true);

    const manejadorFormulario =(e)=>{
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }
        if (email != emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }
        const orden = {
            items: carrito.map(producto=>({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: cantidadTotal,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date()
        }

        Promise.all(
            orden.items.map(async (productoOrden)=>{
                const productoRef = doc(db, "inventario", productoOrden.id);
                const  productoDoc =  await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;


                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=>{
            addDoc(collection(db, "ordenes"), orden)
        .then(docRef=>{
            setIdOrden(docRef.id);
            vaciarCarrito();
        })
        .catch(error=>{
            console.log("Error al crear la orden", error );
            setError("Se produjo un error al crear la orden, intentelo mas tarde")
        })
        setNombre("");
        setApellido("")
        setTelefono("")
        setEmail("")
        setEmailConfimacion("")
    
        })
        .catch(error=>{
            console.log("error al descontar stock", error);
            setError("error al descontar stock")
        })

    }
    useEffect(() => {
       
        setCarritoVacio(cantidadTotal === 0);
      }, [cantidadTotal]);

  return (
    <div className='contenedorCheckout'>
        <h2>Checkout</h2>
        <form className='contenedorForm' onSubmit={manejadorFormulario}>
        {
  carrito.map(producto => (
    <div key={producto.item.id}>
      <p>{producto.item.nombre} x {producto.cantidad} </p>
      <p>Precio: ${producto.item.precio}</p>
      
    </div>
  ))
}
{!carritoVacio && <p>Total: {total}</p>}
    

            <div className='contenedorCampo'>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} />
            </div>

            <div className='contenedorCampo'>
                <label htmlFor="apellido">Apellido: </label>
                <input type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)} />
            </div>
            <div className='contenedorCampo'>
                <label htmlFor="telefono">Telefono: </label>
                <input type="text" value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
            </div>

            <div className='contenedorCampo'>
                <label htmlFor="">Email: </label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>

            <div className='contenedorCampo'>
                <label htmlFor="">Email confirmacion: </label>
                <input type="email" value={emailConfirmacion} onChange={(e)=> setEmailConfimacion(e.target.value)}/>
            </div>
            {
                error && <p className='errorCheckout'> {error}</p>
            }
            <button type='submit' className='boton'> Finalizar compra</button>
        </form>
        {idOrden && <strong > Gracias por tu compra! tu numero de compra es {idOrden}</strong>}
    </div>
  )
}

export default Checkout