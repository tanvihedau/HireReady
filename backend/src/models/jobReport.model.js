const mongoose = require('mongoose');


/**
 * -job descripyion
 * - resume text
 * -self description
 * 
 * -matchScore : number
 * 
 * -technical questions : 
 * [{
 *   question : "",
 * intention : "",
 * answer : "",
 * }]
 * - behavioral questions : [{
 *   question : "",
 *   intention : "",
 *   answer : "",
 * }]
 * - skill gaps : [{
 *  skill : "",
 * severity : {
 * type : String,
 * enum : ["low", "medium", "high"],

 * },
 * }]
 * - preparation plan : [{ 
 * day : number,
 * focus: string,
 * tasks:[string]
 * }]
 */
const technicalQuestionSchema = new mongoose.Schema({
    question:{
        type : String,
        required : [true, "Technical question is required"]
    },
    intention : {
        type : String,
        required : [true, "Intention of the technical question is required"]
    },
    answer : {
        type : String,
        required : [true, "Answer to the technical question is required"]
    }
},{
   _id : false
    })


const behavioralQuestionSchema = new mongoose.Schema({
       question:{
        type : String,
        required : [true, "Technical question is required"]
    },
    intention : {
        type : String,
        required : [true, "Intention of the technical question is required"]
    },
    answer : {
        type : String,
        required : [true, "Answer to the technical question is required"]
    }
},{
   _id : false
    })

    const skillGapSchema = new mongoose.Schema({
    skill : {
        type : String,
        required : [true, "Skill gap is required"]
    },
    severity : {
        type : String,
        enum : ["low", "medium", "high"],
       required : [true, "Severity of the skill gap is required"]
    }
},{
    _id : false
})


const preparationPlanSchema = new mongoose.Schema({
    day : {
        type : Number,
        required : [true, "Day is required for preparation plan"]
    },
    focus : {
        type : String,
        required : [true, "Focus of the preparation plan is required"]
    },
    tasks : [{
        type : String,
        required : [true, "Tasks for the preparation plan are required"]
    }]
// },{
//     _id : false
// }
}
)



const jobReportSchema = new mongoose.Schema({
    jobDescription : {
        type : String,  
        required : [true, "Job description is required"],
    },
    resume:{
        type : String,

    },
    selfDescription : {
        type : String,
    },
    matchScore : {
        type : Number,
        min : 0,
        max : 100,
    },
    technicalQuestions : [technicalQuestionSchema],
    behavioralQuestions : [behavioralQuestionSchema],
    skillGaps : [skillGapSchema],
    preparationPlan : [preparationPlanSchema],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "users"
    }
},{
    timestamps : true

})
const jobReportModel = mongoose.model("jobReport", jobReportSchema)

module.exports = jobReportModel