const mongoose = require('mongoose');

const url = "mongodb+srv://shashwatbagaria1:ObiZgnRnOYfRtEpM@cluster0.5tshkt0.mongodb.net/"

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
        name:"Backend Development",
        creator:"Mushtaque",
        rating:5, 
        batch_strength: 100
    })
    const courseCreated = await course.save();
    console.log(courseCreated);
}

createCourse();

async function getCourse(){
    // find all documents
    const allCourse = await Course.find({creator: 'Alex'});
    console.log(allCourse);
}

// getCourse();

// -----------------Update-------------------
async function updateCourse(id) {
    // find all documents
    const course = await Course.findById(id);
    
    if (!course) return;

    course.name = "Node.js";
    course.creator = "Alex";

    await course.save();
}
// updateCourse("6607630c4c90953dcf74f3bd");


// -----------------Delete-------------------
async function deleteCourse(id) {
    // find all documents
    const courseDeleted = await Course.findByIdAndDelete(id);
    console.log(courseDeleted);
}

// deleteCourse("6607630c4c90953dcf74f3bd");
