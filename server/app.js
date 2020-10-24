const express = require('express');

const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allow cross-origin
app.use(cors()); 

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
