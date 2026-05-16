const pdfParse = require("pdf-parse")
const generateInterviewReport = require("../services/ai.service")   
const jobReportModel = require("../models/jobReport.model")


/**
 * @description Controller to generate interview report based on user self description , resume and job description
 
 */
async function generateInterviewReportController(req, res){

const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
const { selfDescription, jobDescription }= req.body

const interviewReportByAi = await generateInterviewReport({
    resume : resumeContent.text,
    selfDescription,
    jobDescription
})
const jobReport =await jobReportModel.create({
    user : req.user._id,
    resume : resumeContent.text,
    selfDescription,
    jobDescription,
    ...interviewReportByAi //destructure the AI response to save in the database
})

res.status(200).json({
    message : "Interview report generated successfully",
    jobReport
})
}
/**
 * 
    * @description Controller to get interview report by interviewId
 */
async function getInterviewReportByIdController(req, res){
    const { interviewId } = req.params
    const jobReport = await jobReportModel.findOne({_id : interviewId, user : req.user._id})

    if (!jobReport) {
        return res.status(404).json({ message: "Interview report not found" })
    }

    res.status(200).json({
        message: "Interview report retrieved successfully",
        jobReport
    })
}

/**
 * @description controller to get all interview reports of logged in user.
 */
async function getAllInterviewReportsController(req, res){
    const jobReports = await jobReportModel.find({ user : req.user._id }).sort({ createdAt : -1 }).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan") //exclude resume, selfDescription and jobDescription from the response
    res.status(200).json({
        message: "Interview reports retrieved successfully",
        jobReports
    })
}

module.exports = { generateInterviewReportController, getInterviewReportByIdController, getAllInterviewReportsController }