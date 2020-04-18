const User = require('./modules/User')
const connectToDB = require('./mongoose.connect')
const bcrypt = require('bcrypt')


const query = () => {
    connectToDB()
    console.log('query')
    
}
const add = async (user) => {
    await connectToDB()
    let newUser = new User(user)
    let {password } = newUser
    let hashedPassword = bcrypt.hashSync(password,10)
    newUser.password = hashedPassword
    try{
        return newUser.save()
    }catch(e){
        console.log(e.code)
        return null
    }

}
const login = async (user)=>{
    await connectToDB()
    let userInDB = await  User.findOne({name:user.name})
    if(userInDB){
        let { password } = user
        let hashedPassword = userInDB.password
        let passwordMatch = await bcrypt.compare(password,hashedPassword)
        return passwordMatch ? userInDB  : {msg:'Password is not correct'}
    }else{
        return {msg:'No User Found'}
    }


}
const remove = () => {
    connectToDB()
    console.log('remove')
}
const update = () => {
    connectToDB()
    console.log('update')
}
const getById = () => {
    connectToDB()
    console.log('getbyid')
}

module.exports = {
    add,remove,update,getById,query,login
}