const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoutes');
const postRoute = require('./routes/postRoutes');

const app = express();

app.use(express.json()); //parse json in postman

app.use('/user', userRoute);
app.use('/post', postRoute);

app.get('/', (req,res,next) => {
    res.send('Hello World!!!');
}) ;

let dbUser = 'xyz'
let dbPassword = 'xyz'
let dbURL = 'xyz'

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbURL}/myFirstDatabase?retryWrites=true&w=majority`)
.then(database=> {
console.log('dbConnected');
})

app.listen(3000, ()=> {
    console.log('Server Listening at port 3000');
});