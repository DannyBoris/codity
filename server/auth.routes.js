const authQuery = require('./auth.queries') 
const {validateUsersCardentials, redirectHome } = require('./middlewares/validateUser')
module.exports = app =>{
   
    app.post('/signup', validateUsersCardentials , async (req,res)=>{
       const user =  req.body
       let addedUser = await authQuery.add(user)
       if(addedUser){
        req.session.userId = addedUser._id
        req.session.views = req.session.views ?   + 1 : 1
       } 
       console.log('Session has been created: ', req.session)
       res.json(addedUser);
    })

    app.post('/login', redirectHome, validateUsersCardentials , async  (req,res)=>{
        const user = req.body
        console.log(res.cookies)
        let userInDB = await authQuery.login(user)
        if(userInDB._id){
            req.session.userId = userInDB._id 
            res.json(userInDB) 
        }else{
            res.json(userInDB.msg) 
        }
    })
    app.get('/login',(req,res)=>{
        console.log(req.session)
    })
}