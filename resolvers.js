const db = require('./db')
const Query = {
   //resolver function for greeting
   greeting:() => {
      return "hello!!!"
   },
   
   //resolver function for students returns list
   Techcombank:() => db.Techcombank.list(),

   //resolver function for studentbyId
   techcombankByMetadata:(root,args,context,info) => {
      //args will contain parameter passed in query
      return db.Techcombank.get(args.metadata);
   }
}
module.exports = {Query}
