const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req, res, next) => {    //if we don't use 'next' here, the program will not move ahead of this middleware

    //verify authentication
    const { authorization } = req.headers   //this is that 'Content-Type:header' thing we use in the frontend

    if(!authorization){
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]   //the authorization is divided in two parts (ex - 'Bearer bhdsbbh.sdhbdskjbjk.skjbjcsdkj') and we only need the second part that is TOKEN

    try{
        const {_id} = jwt.verify(token, process.env.SECRET)   //i am checking the token to verify and storing the id

        req.user = await User.findOne({ _id }).select('_id');   //we are finding the user with the id and getting it and storing it in req.user

        next();

    }catch(error){
        console.log(error);
        res.status(401).json({error: 'Request is not authorized'})
    }

}

module.exports = requireAuth;