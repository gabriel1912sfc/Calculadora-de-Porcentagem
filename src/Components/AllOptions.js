function AllOptions({items, onSelect, onResult}){
  return (
    <div class="nav-wrapper">
      <nav class="nav-style">
        {items.map((items) => {
        return(
          <button key={items.id} onClick={()=> {
            onSelect(items.id);
            onResult("");
            }
            }>
            {items.label}
          </button>)
        })}
      </nav>
    </div>
  )
}

export default AllOptions;