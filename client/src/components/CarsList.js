import React, { Component } from "react";

class CarsList extends Component {
  renderTbody = () => {
    const { cars } = this.props;
    return cars.map((car) => {
      return (
        <tr key={car.id}>
          <td> {car.country} </td>
          <td>{car.label}</td>
          <td>{car.price} $ </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Label</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>{this.renderTbody()}</tbody>
      </table>
    );
  }
}

export default CarsList;
