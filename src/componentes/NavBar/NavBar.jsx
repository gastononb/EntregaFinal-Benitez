import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
  return (
    <header>
      <h1 className='logoMenu'>logo</h1>
        <nav>
          <ul>
            <li>Remeras</li>
            <li>Pantalones</li>
            <li>Camperas</li>
          </ul>
          
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar