const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

// Set up middleware
// Fire graphqlHTTP everytime we hit endpoint /graphql, we use it as middleware here and it will handle graphQL request
app.use('/graphql', graphqlHTTP({

}));

app.listen(4000, () => {
    console.log('Now listening for requests on port 4000');
});