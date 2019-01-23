// Describe Schema on Graph (describes object types, relations between objects and how we can reach into the graph)
/*
* Three responsibilities:
*  1. Define types
*  2. Define relationships between types
*  3. Define route queries
*
* */
const graphql = require('graphql');
const _= require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data
var books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
   name: 'RootQueryType',
   fields: {
       book: {
           // Query for BookType
           type: BookType,
           // Expect client to pass some arguments along
           args: { id: {type: GraphQLString}},
           // in reslove we write code to get whichever data we need from our db or some other source
           resolve(parent, args) {
               return _.find(books, { id: args.id });
           }
       }
   }
});

module.exports = new GraphQLSchema({
   // Initial route query
   query: RootQuery
});