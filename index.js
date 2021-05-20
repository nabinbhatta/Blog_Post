const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/user', userRoute);

app.get('/', (req,res,next) => {
    res.send('Hello World!!!');
}) ;

let dbUser = 'yourUsername'
let dbPassword = 'yourPassword'
let dbURL = 'yourDBURL'

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbURL}/myFirstDatabase?retryWrites=true&w=majority`)
.then(database=> {
console.log('dbConnected');
})

app.listen(3000, ()=> {
    console.log('Server Listening at port 3000');
});