const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const interviewController = require("../controllers/interview.controller")

const interviewRouter = express.Router()

/**
 * @route POST /api/interview/
 * @description Generate new interview report based on the candidate's resume, self description and job description
 * @access Private
 */
interviewRouter.post("/",authMiddleware.authUser, interviewController.generateInterviewReportController)


module.exports = interviewRouter