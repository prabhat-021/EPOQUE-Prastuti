const user = require('../models/user')
exports.register = async(req,res,next) =>{
    try {
        
        const newUser  = new user({...req.body})
        newUser.save();
        res.status(200).send("user created succesfully");
          
    } catch (error) {
        console.log(error)
    }

}
