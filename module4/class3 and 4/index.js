const mongoose = require('mongoose');

const password = "xG7PV1E9QM4HUWAT";
const url = "mongodb+srv://saifiamaan445:xG7PV1E9QM4HUWAT@cluster0.kdkduy1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then(()=>{
    console.log("Connection Established")
}).catch((error)=>{
    console.log(error);
})

//Schema

const courseSchema = new mongoose.Schema({
    name:String,
    creator:String,
    rating:Number,
    publishedDate:{type:Date,default:Date.now}
})

//Model
const Course = mongoose.model('Course',courseSchema);
//created the collection in mongodb
// and with the help of model we will be creating document

//CRUD

async function createCourse(){
    const course = new Course({
        name:"React",
        creator:"Aman",
        rating:5, 
    })
    const courseCreated = await course.save();
    console.log(courseCreated);
}

// createCourse();

async function getCourse(){
    // find all documents
    const allCourse = await Course.find({creator: 'Alex'});
    console.log(allCourse);
}

// getCourse();