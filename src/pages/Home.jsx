import List from "../components/List";
import { useState } from "react";

function Home() {
  const [cuisine, setCuisine] = useState(null);

  function getData(cuisine_id) {
    setCuisine(cuisine_id)
  }
  return (
    <div className="App">
      <div
        style={{
          textAlign: "center",
        }}
        className="Title">
        <span style={{
          fontSize: "35px",
          fontWeight: "500",
        }}>
          Food Ordering App
          <br />
        </span>

        <br />
        <span style={{
          fontSize: "25px",
          fontWeight: "500",
        }}>
          Select Your Cuisine
          <br />
          <button onClick={() => getData(1)} className="MenuButton">Italian</button>
          <button onClick={() => getData(2)} className="MenuButton">Mexican</button>
          <button onClick={() => getData(3)} className="MenuButton">Chinese</button>
          <button onClick={() => getData(4)} className="MenuButton">Indian</button>
        </span>
        <br />
      </div>
      <List search_id={cuisine} />
    </div>
  );
}

export default Home;
