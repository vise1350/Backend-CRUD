const mongoose=require("mongoose");

const connectToDb=async()=>{
    // can aslo use try catch




    mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log(`connected to database ${conn.connection.host}`)
    })
    .catch((err)=>{
        console.log(err.message)
        process.exit(1)
    })

}


module.exports=connectToDb