const {User} = require('../models')

module.exports.getUsers = async(req, res) => { 
  res.send('users not found')
}

module.exports.createUser = async(req,res,next) =>{
  try {
    const {body} = req;
    const newUser = await User.create(body);
    console.log(newUser);
    res.send(newUser);

  } catch (error) {
    next(error);
  }
}
