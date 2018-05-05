//ssssssssssssssesssssssssss
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema} from 'graphql-tools';

//root
const RootApiSchema = `
  type Query {
    rootApi: String
    application: Application
    mongodb: Mongo
    resolutions: [Resolution]
  }
`;

import RootApiResolver from '../../api/rootApiResolver';
//1
import HelloWorldSchema from '../../api/1-helloworld/HelloWorld.graphql';
import HelloWorldResolvers from '../../api/1-helloworld/HelloWorldResolver';
//2
import ApplicationSchema from '../../api/2-application/applicationSchema.graphql';
import ApplicationResolvers from '../../api/2-application/applicationResolver';
//3
import ResolutionsSchema from '../../api/3-resolutions/resolutionsSchema.graphql';
import ResolutionsResolver from '../../api/3-resolutions/resolutionsResolver';


const typeDefs = [RootApiSchema, HelloWorldSchema, ApplicationSchema , ResolutionsSchema];

const resolvers = [RootApiResolver ,HelloWorldResolvers ,ApplicationResolvers , ResolutionsResolver];
//console.log(ParentResolver);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
createApolloServer({ schema });
