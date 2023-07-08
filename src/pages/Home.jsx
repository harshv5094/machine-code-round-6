function Home() {
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
          <button className="MenuButton">Italian</button>
          <button className="MenuButton">Mexican</button>
          <button className="MenuButton">Chinese</button>
          <button className="MenuButton">Indian</button>
        </span>
        <br />
      </div>
    </div>
  );
}

export default Home;
