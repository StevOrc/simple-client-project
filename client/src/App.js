import React, { Component } from "react";
import CarsList from "./components/CarsList";
// import cars from "./apis/cars";
import Header from "./components/Header";

class App extends Component {
  cars = [
    { id: 1, country: "France", label: "Renault", price: 150 },
    { id: 2, country: "Germany", label: "BMW", price: 28000 },
    { id: 3, country: "Japan", label: "Toyota", price: 15300 },
    { id: 4, country: "Germany", label: "Audi", price: 22400 },
    { id: 5, country: "Italy", label: "Fiat", price: 5500 },
    { id: 6, country: "USA", label: "Ford", price: 17500 },
  ];

  state = { cars: [] };

  componentDidMount() {
    // const fetchCars = async () => {
    //   const result = await cars.get("/cars");
    //   this.setState({ cars: result.data });
    // };

    // fetchCars();

    this.setState({ cars: this.cars });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="ui container" style={{ marginTop: "20px" }}>
          <h1 className="ui header">Car application</h1>
          <CarsList cars={this.state.cars} />
        </div>
      </div>
    );
  }
}

export default App;
