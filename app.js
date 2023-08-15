const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware -- code below helps to access req.body
app.use(express.json())


app.use('/api/v1/tasks', tasks)



port = 5000

const start = async()=> {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`server is listening at port ${port}...`)
        })

    } catch(error) {
        console.log(error)
    }
}


start()