 const User = require('../models/user');

 //module.exports.createAccount =  (req, res) => {

//   //  console.log(req.body)
//     const aUser = new User({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         password: req.body.password
//     });

//     aUser.save().then(user=> {
//         console.log(user + 'Hi')
//         res.send(user);
//     }).catch(error => {
//         res.send(error);
//     })

module.exports.createAccount =  async (req, res) => {
    console.log('create account');
    const aUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber
    });
    try{
    const user = await aUser.save();
        res.send(user);
    }
    catch(error){
        console.log(error)
        res.send(error)
    }
}
 