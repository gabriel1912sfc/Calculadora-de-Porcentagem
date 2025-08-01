/* eslint-disable array-callback-return */
function Header({items, activeId }){
  return (
    <div>
      {items.map((item) => {
        if(item.id === activeId){
          return(
            <h1>Calculadora de {item.label}</h1>
          )
        }
      })}
    
    </div>
  )
}
export default Header;