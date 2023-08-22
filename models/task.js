const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "must fill in name"],
        trim: true,
        maxlength: [20, "characters should be less than 20"],
    }, completed: {type: Boolean, default: false}
})


module.exports = mongoose.model('Task', TaskSchema)