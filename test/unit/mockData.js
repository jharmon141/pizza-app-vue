export const allPizzas = [
  {
    "name": "small",
    "maxToppings": 3,
    "__typename": "Pizza",
    "basePrice": 9.89,
    "toppings": [
      {
        "defaultSelected": false,
        "name": "pepperoni",
        "price": 0.4,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "banana peps",
        "price": 0.89,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "sausage",
        "price": 1.29,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "onion",
        "price": 0.29,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "green olives",
        "price": 0.39,
        "__typename": "Topping"
      },
      {
        "defaultSelected": true,
        "name": "cheese",
        "price": 0.1,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "bell peps",
        "price": 0.22,
        "__typename": "Topping"
      }
    ]
  },
  {
    "name": "medium",
    "maxToppings": 5,
    "__typename": "Pizza",
    "basePrice": 10.89,
    "toppings": [
      {
        "defaultSelected": true,
        "name": "pepperoni",
        "price": 0.4,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "banana peps",
        "price": 0.89,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "sausage",
        "price": 1.29,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "onion",
        "price": 0.29,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "green olives",
        "price": 0.39,
        "__typename": "Topping"
      },
      {
        "defaultSelected": true,
        "name": "cheese",
        "price": 0.1,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "bell peps",
        "price": 0.22,
        "__typename": "Topping"
      }
    ]
  },
  {
    "name": "large",
    "maxToppings": 0,
    "__typename": "Pizza",
    "basePrice": 13.49,
    "toppings": [
      {
        "defaultSelected": true,
        "name": "pepperoni",
        "price": 0.4,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "banana peps",
        "price": 0.89,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "sausage",
        "price": 1.29,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "onion",
        "price": 0.29,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "green olives",
        "price": 0.39,
        "__typename": "Topping"
      },
      {
        "defaultSelected": true,
        "name": "cheese",
        "price": 0.1,
        "__typename": "Topping"
      },
      {
        "defaultSelected": false,
        "name": "bell peps",
        "price": 0.22,
        "__typename": "Topping"
      }
    ]
  }
]

export const mockStore = {
  state: {
    nextPizzaId: 4,
    pizzas: [
      { 
        id:1,
        pricePerPizza:"12.17",
        quantity:3,
        size:"small",
        toppings: [
          {
            __typename:"Topping",
            defaultSelected:true,
            name:"cheese",
            price:0.1
          },
          {
            __typename:"Topping",
            defaultSelected:false,
            name:"banana peps",
            price:0.89
          },
          {
            __typename:"Topping",
            defaultSelected:false,
            name:"sausage",
            price:1.29
          }
        ]
      },
      {
        id:2,
        pricePerPizza:"12.97",
        quantity:6,
        size:"medium",
        toppings: [
          {
            __typename:"Topping",
            defaultSelected:true,
            name:"pepperoni",
            price:0.4
          },
          {
            __typename:"Topping",
            defaultSelected:true,
            name:"cheese",
            price:0.1
          },
          {
            __typename:"Topping",
            defaultSelected:false,
            name:"sausage",
            price:1.29
          },
          {
            __typename:"Topping",
            defaultSelected:false,
            name:"onion",
            price:0.29
          }
        ]
      },
      {
        id:3,
        pricePerPizza:"16.68",
        quantity:3,
        size:"large",
        toppings: [
          {
            __typename:"Topping",
            defaultSelected:true,
            name:"pepperoni",
            price:0.4
          },
          {
            __typename:"Topping",
            defaultSelected:true,
            name:"cheese",
            price:0.1
          },
          {
            __typename:"Topping",
            defaultSelected:false,
            name:"banana peps",
            price:0.89
          },
          {
            __typename:"Topping",
            defaultSelected:false,
            name:"sausage",
            price:1.29
          },
          {
            __typename:"Topping",
            defaultSelected:false,
            name:"onion",
            price:0.29
          },
          {
            __typename:"Topping",
            defaultSelected:false,
            name:"bell peps",
            price:0.22
          }
        ]
      }
    ],
  },
  getters: {
    totalNumberOfPizzas: state => {
      return state.pizzas.reduce((prev, curr) => {
        return prev + curr.quantity
      }, 0)
    },

    grandTotal: state => {
      const total = state.pizzas.reduce((prev, curr) => {
        return prev + curr.pricePerPizza*curr.quantity
      }, 0)

      return total.toFixed(2)
    }

  },
  mutations: {
    addPizza: (state, params) => {
      const newPizza = Object.assign({}, params, { id: state.nextPizzaId })
      state.nextPizzaId += 1
      state.pizzas.push(newPizza)
    },

    removePizza: (state, params) => {
      state.pizzas = state.pizzas.filter(pizza => pizza.id !== params)
    },

    updatePizza:(state, params) => {
      const pizzaIndex = state.pizzas.findIndex(pizza => pizza.id == params.id)
      state.pizzas.splice(pizzaIndex, 1, params)
    }
  },

  actions: {
    handleAddPizza: ({state, commit}, params) => {
      commit('addPizza', params)
    },

    handleRemovePizza: ({state, commit}, params) => {
      commit('removePizza', params)
    },

    handleUpdatePizza: ({state, commit}, params) => {
      commit('updatePizza', params)
    },
  }

}

// orderTotal = 164.37
// quantity = 12

