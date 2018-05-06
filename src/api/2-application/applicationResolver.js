
import Mongodata from './application';

export default {
  Query: {
      application(){
        return (
          {
            _id: "sdfgdfg",
            name: "< App Name />"
          }
        );
      }
  },//next other type query
  Application: {
    inlinedata(){
      return (
              {
                _id: "etdge546dgw54",
                name: "Inline Data"
              }
            );
    },
    inlinedataArray(){
      return [
        {
          _id: "sdfgdfg",
          name: "Inline Data From an Array resolvers"
        },
        {
          _id: "cvbzxccvbg",
          name: "Inline Array Edition"

        }
      ];
    },
    mongodata(){
      return Mongodata.find({}).fetch();
    },
  },//next Mutation
}
