import './App.css'
import NavBar from './componentes/NavBar/NavBar'

import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'

function App() {
 return(
    <>
<NavBar/>
<ItemListConteiner saludo = {"Hola Tutor"} subSaludo ={"Bienvenido a mi primer pre-entrega"}/>
</>
 )
}

export default App
