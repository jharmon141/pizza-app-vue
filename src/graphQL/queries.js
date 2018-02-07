import gql from 'graphql-tag'

const PizzaQuery = gql`
query  {
    allPizzas {
        name
        basePrice
        maxToppings
        toppings {
          defaultSelected
          name
          price
        }
    }
}`

export default PizzaQuery
