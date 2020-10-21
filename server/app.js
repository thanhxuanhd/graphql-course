const express = require('express');

const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// Connect to database
mongoose.connect('', {useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
  console.log('connection database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
