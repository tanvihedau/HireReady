const pdfParse = require("pdf-parse")
const generateInterviewReport = require("../services/ai.service")   
const jobReportModel = require("../models/jobReport.model")

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


module.exports = { generateInterviewReportController }