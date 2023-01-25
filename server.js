const express = require("express");

const { buildSchema } = require("graphql");

const { graphqlHTTP } = require("express-graphql");

const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product {
        id: ID!
        description: String!
        reviews: [Review]
        price: Float!
    }

    type Review {
        rating: Int!
        comment: String
    }

    type Order{
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
`);

const root = {
  products: [
    {
      id: "redshoe",
      description: "Red Shoe",
      price: 42.12,
    },
    {
      id: "bluejean",
      description: "Blue Jeans",
      price: 50.50,
    },
  ],
  orders: [
    {
      date: "2005-05-26",
      subtotal: 90.22,
      items: [
        {
          product: {
            id: "redshoe",
            description: "Old Red Shoe",
            price: 45.22
          },
          quantity: 2,
        },
      ],
    },
  ],
};

const app = express();

const PORT = 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Running GraphQL server on PORT ${PORT}`);
});
