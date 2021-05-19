const express = require('express');



const app = express();
app.use((req,res,next) => {
    res.send('Hello World!');
}) ;

app.listen(3000, ()=> {
    console.log('Server Listening at port 3000');
});