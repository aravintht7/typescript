
import connect from './connect';


const db = 'mongodb+srv://aravintht:XulUozFp67VoP175@cluster0.xchmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


connect({db});


/*


var mongoDB = 'mongodb+srv://aravintht:XulUozFp67VoP175@cluster0.xchmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
connect(mongoDB);
var db = mongoose.connection;
db.on("open", async () => {
  console.log("Connected to database");
});
// mongoose.connection.on('connecting', function(){
//     console.log("trying to establish a connection to mongo");
// });
// mongoose.connection.on('connected', function() {
//     console.log("connection established successfully");
// });
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// var Schema = mongoose.Schema;
// var ipSchema = mongoose.Schema;
var ipSchema = new Schema({

  ip : { type: Number, required: true },
  countryCode : { type: String, required: true },
  country : { type: String, required: true },
  state : { type: String, required: true },
  city : { type: String, required: true }

})
var ipModel = mongoose.model('IPModel', ipSchema );
 const create = async ()  =>{
  const data = ipModel.create(({"ip" : 16777216,"countryCode" : "US","country" : "United State","state" : "California","city" : "LosAngels"}),function (err){
    if(err)
    console.log(err);
    else
    console.log("data added");
  })

}
create();
*/
// import { UserModel } from "./users/users.model";

// import express from 'express';
  
// const app = express();
// const PORT:Number=3000;
  
// // Handling GET / Request
// app.get('/', (req, res) => {
//     res.send('Welcome to typescript backend!');
// })
  
// // Server setup
// app.listen(PORT,() => {
//     console.log('The application is listening '
//           + 'on port http://localhost:'+PORT);
// })

/*
let database: Mongoose.Connection;
export const connect = () => {
  // add your own uri below
  const uri = "mongodb+srv://aravintht:XulUozFp67VoP175@cluster0.xchmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  if (database) {
    return;
  }
  Mongoose.connect(uri,{});
  database = Mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};

connect();

*/