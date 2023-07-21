import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Checkout from './componentes/Checkout/Checkout'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './componentes/Cart/Cart'

function App() {
    return (
        <>
            <BrowserRouter>
                <CarritoProvider>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
                        <Route path='/:itemId' element={<ItemDetailContainer/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>

                    </Routes>
                </CarritoProvider>
            </BrowserRouter>
        </>
    )
}

export default App
