import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
  return (
    <header>
      <h1 className='logoMenu'>PadelStore</h1>
        <nav>
          <ul>
            <li>Paletas</li>
            <li>Remeras</li>
            <li>Pantalones</li>
            <li>Calzado</li>
          </ul>
          
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar