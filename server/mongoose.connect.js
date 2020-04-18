const mongoose = require('mongoose')

const connectToDB = async ()=>{
    try{
        connection = await mongoose.connect('mongodb://danny-boris1:tpifSP1062016@ds123146.mlab.com:23146/timer-vue',
        { useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
            console.log('Connected to DB!')
            mongoose.connection.db.executeDbAdminCommand({buildinfo:1, setFeatureCompatibilityVersion: "4.0"},(err,info)=>{
                console.log('Running MongoDB version: ' + info.version)
            })
        })
    }catch(e){
        console.error(`Could not connect to DB ${e}`)
     }
     return mongoose.connection
}
module.exports = connectToDB