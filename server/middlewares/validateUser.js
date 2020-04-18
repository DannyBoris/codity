const emailRgx = require('email-regex')

const validateUsersCardentials = (req,res,next) =>{
    let user = req.body
    console.log(user.email)
    let validEmail = user.email !== undefined ? emailRgx().test(user.email) : true
    user.name.length > 6 && 
    user.password.length > 6 &&
    validEmail
    ? 
    next() :
    res.json('User is not valid')
} 


const redirectHome = (req,res,next) =>{
    console.log(req.session)
    if(req.session.userId){
        req.session.views ++
        console.log(req.session)
        
    }
    else{
        console.log('no sesssion, go on!')
        next()
    }
}
module.exports = {
    validateUsersCardentials,
    redirectHome
}