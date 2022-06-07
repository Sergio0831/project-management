const { clients, projects } = require('../sampleData');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = require('graphql');

// Project type
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString }
  })
});

// Client type
const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString }
  })
});

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return projects;
      }
    },
    project: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return projects.find((project) => project.id === args.id);
      }
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return clients;
      }
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.find((client) => client.id === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: rootQuery
});