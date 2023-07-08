import { restaurantsData } from "../db/database"


function List({ search_id }) {
  return (
    <div>
      {console.log(search_id)}
      {
        restaurantsData.filter((item) => item.cuisine_id === search_id).map((restaurant) => (
          <div key={restaurant.id}>
            <h1>Dishes By {restaurant.name}</h1>
            {
              restaurant.menu.map((item, index) => {
                return (
                  <div key={index} className="MenuItemCard">
                    <img className="ImageCard" src={item.imgSrc} alt={item.name} width="200px" />
                    <span style={{
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                    >{item.name}</span>
                    <br />
                    <span>Rs. {item.price}</span>
                    <br />
                    <span>{restaurant.name}</span>
                  </div>
                )
              })
            }
          </div>
        ))
      }
    </div >
  )
}

export default List