
export default {
      Query: {
        application(obj, args , context){
          console.log(context);
          return (
            {
              name:"Hello 🌍 from <Application /> !"
            }
          );
        },
        ideesInline(){
          return [
            {
              _id: "sdfgdfg",
              name: "Inline Data From resolvers"
            },
            {
              _id: "cvbzxccvbg",
              name: "Inline Edition"

            }
          ];
        },//NEXT FUNCTION Query
        ideesMongo(){
          return IdeesMongo.find({}).fetch();
        }
      },//NEXT OTHER Query NAME
};
