//database logic

const mongoose = require("mongoose")
const ObjectId = mongoose.ObjectId

const schema = mongoose.Schema;//we created a schema from mpongoose schema
//this is schema of users information
const User = new schema({// insiliaze a new schema
  email: {type: String , unique: true},//  so that user not enter same emial again it should be unique
  password: String,
  name: String
})
//this is schema of todo
const todo = new schema({
  title: String,
  done: Boolean,
  userId: ObjectId // for this we have to import an object id  // in todo tis is relaction of user objectid and todo objectid , so that ye pat akar pae kiska ye banaya hua todo hai
})
const UserModel= mongoose.model('users',User);//this first user represent the database  and User secound represent schema user 
const TodoModel = mongoose.model('todo', todo)//we use user model to connect with our database 

module.exports ={//we export it so tht we can we in index.js
  UserModel: UserModel,
  TodoModel: TodoModel
}