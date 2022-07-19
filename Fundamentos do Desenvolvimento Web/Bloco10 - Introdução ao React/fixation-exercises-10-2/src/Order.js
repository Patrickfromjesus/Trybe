import React from 'react';
/* const headphone = {
  id: 102,
  user: "cena@gmail.com",
  product: "Razer Headphone",
  price: {
    value: 99.99,
    currency: "dollars"
  }
};

const energyDrink = {
  id: 77,
  user: "cena@gmail.com",
  product: "Monster 500mL",
  price: {
    value: 9.99,
    currency: "dollars"
  }
};
 */
class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;