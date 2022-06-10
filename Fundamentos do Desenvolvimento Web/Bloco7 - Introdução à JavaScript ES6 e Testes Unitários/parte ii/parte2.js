const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

//Exercício 1
const customerInfo = (order) => {
  const phrase = `Olá, Patrick Gomes, entrega para ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}.`;
  return phrase;
}
customerInfo(order);

//Exercício 2
const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = '50,00'
  const phrase = `Olá ${order.name}, o total do seu pedido das pizzas de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${order.order.drinks.coke.type} é de R$ ${order.payment.total}.`;
  return phrase;

}

orderModifier(order);