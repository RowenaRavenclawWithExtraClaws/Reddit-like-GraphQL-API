'use strict'

const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();
const { schema } = require('./schema');
const { resolver } = require('./resolve');

app.use('/reddit', graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
}));

app.listen(4000, () =>
    console.log('Running a GraphQL API server at localhost:4000/reddit'));