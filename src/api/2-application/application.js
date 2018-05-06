/*
//Insert des meme donnees dans la basse.
    Mongodata.insert(
      {
        name:"Here Mongo Data",
      }
    );

//Affiche dans la console la nouvelle entree.
    const res = Mongodata.find({}).fetch();
    console.log(res);

*/

import { Mongo } from 'meteor/mongo';

const Mongodata = new Mongo.Collection("mongodata");


export default Mongodata;
