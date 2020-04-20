const data = {
    username: "admin",
    password: "admin"
}
const jwt = require('jsonwebtoken')
module.exports = {
    async login(req, res){
        const {username, password} = req.body;
        if(!username || !password){
          return  res.status(401).json({error: "incorrect Username or password"});
        }
        if(username === data.username && password === data.password){
            const token = await jwt.sign({username}, "umasecretqualquer");
            return res.json({user:{
                username,
                password
            }, token});
        }else{
            return  res.status(401).json({error: "incorrect Username or password"});
        }
    }
}