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
  
  const customerInfo = (order) => {
    const personDelivery = order.order.delivery.deliveryPerson;
    const pessoaEntrega = order['name'];
    const pessoaTelefone = order['phoneNumber'];
    const street = order['address'].street;
    const number = order['address'].number;
    const apartment = order['address'].apartment;

    console.log(`Olá ${personDelivery}, entrega para: ${pessoaEntrega}, Telefone: ${pessoaTelefone}, R. ${street}, Nº ${number}, AP: ${apartment}`);
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const deliveryPerson = order['name'] = 'Luiz Silva';
    const pedidoPizza = Object.keys(order.order.pizza);
    const drinks = order.order.drinks.coke.type;
    const newTotal = order.payment.total = '50';

    console.log(`Olá ${deliveryPerson}, o total do seu pedido de ${pedidoPizza[0]}, ${pedidoPizza[1]} e ${drinks} é R$ ${newTotal},00. `)
  
  }
  
  orderModifier(order);