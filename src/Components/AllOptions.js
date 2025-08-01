function AllOptions({items}){
  return (
    <div class="nav-wrapper">
      <nav class="nav-style">
      {items.map((items) => {
        return(
          <button key={items.id}>
            {items.label}
          </button>)
        })}
      </nav>
    </div>
  )
}

export default AllOptions;