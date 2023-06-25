import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
  return (
    <header>
      <Link className='link' to={'/'}>
      <h1 className='logoMenu'>PadelStore</h1>
      </Link>
        <nav>
          <ul>
            <li><NavLink className='link' to={'/categoria/1'}>Paletas</NavLink></li>
            <li><NavLink className='link' to={'/categoria/2'}>Indumentaria</NavLink></li>
            <li><NavLink className='link' to={'/categoria/3'}>Calzados</NavLink></li>
            <li><NavLink className='link' to={'/categoria/4'}>Bolsos</NavLink></li>
          </ul>
          
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar