// db.js
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aseem:aseem123@wtf-m8db4.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true })
.then((d)=>{console.log('database connected')})
.catch((err)=>{console.log('database error'+err)})
