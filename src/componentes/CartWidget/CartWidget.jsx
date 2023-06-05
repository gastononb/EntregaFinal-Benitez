import './CartWidget.css'

const CartWidget = () => {
    const carrito = "https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png"
  return (
    <div>
        <img src= {carrito} className="imgCarrito" alt="carrito" />
        <strong>5</strong>
    </div>
  )
}

export default CartWidget