import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element= {<ItemListContainer/>}/>
                    <Route path='/categoria/:idCategoria' element= {<ItemListContainer/>}/>
                    <Route path='/:itemId' element= {<ItemDetailContainer/>}/>
                    
                </Routes>
        
            </BrowserRouter>
        </>
    )
}

export default App
