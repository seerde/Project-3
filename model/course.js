const mongoose = require("mongoose");

var courseSchema = new mongoose.Schema({


    courseName:{
        type:String,
        require:true
    },

    teacher:{
        type: String,
        required: true
      },

    students:[{
        type:String,
    }],
    
    contents:[{
        type:String,
        require:true
    }],

    major:{
        type:String,
        require:true
    },
    
    link:{
        type:String,
    },

    description: {
        type: String,
        required: true
    },

    duration:{
        type:Number,
        require:true
    }
})

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;