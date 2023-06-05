import './ItemListConteiner.css'
const ItemListConteiner = (props) => {
    
  return (
    <div className='saludo'>
      <h2 >{props.saludo}</h2>
      <p>{props.subSaludo}</p>
    </div>
  )
}

export default ItemListConteiner