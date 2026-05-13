const {GoogleGenAI} = require("@google/genai")
const z = require("zod")
const {zodToJsonSchema} = require("zod-to-json-schema")


const ai = new GoogleGenAI({
    apiKey : process.env.GOOGLE_GENAI_API_KEY
})  
const interviewReportSchema = z.object({

matchScore:z.number().description("a score between 0 and 100 indicating how well the candidate's profile matches the job requirements"),

    technicalQuestions : z.array(z.object({ 
        question : z.string().description("The technical question that can be asked in the interview"),
        intention:z.string().description("The intention of interviewer behind asking this question"),
        answer:z.string().description("How to answer thsi question, what points to cover, what approach to take etc.")
})).descrioption("technical questions that can be asked in the interview along with their intention and how to answer them"),

behaviouralQuestions : z.array(z.object({
     question : z.string().description("The technical question that can be asked in the interview"),
        intention:z.string().description("The intention of interviewer behind asking this question"),
        answer:z.string().description("How to answer thsi question, what points to cover, what approach to take etc.")
})).description(" behavioral questions that can be asked in the interview along with their intention and how to answer them"),

skillGaps : z.array(z.object({
    skill : z.string().description("The skill in which the candidate is lacking"),
    severity : z.enum(["low", "medium", "high"]).description("The severity of the skill gap")
})).description("List of skill gaps identified in the candidate's profile along with their severity"),


preparationPlan : z.array(z.object({
    day : z.number().description("The day number in the preparation plan"),
    focus : z.string().description("The focus area for that day"),
    tasks : z.array(z.string()).description("The tasks to be completed on that day")
})).description("The preparation plan for the candidate to improve their skills and prepare for the interview")
})



async function generateInterviewReport({resume, selfDescription, jobDescription}){

    const prompt = `Generate an interview report for a candidate based on the following information:`

    const response = await ai.models.generateContent({
        model : "gemini-2.0-flash",
        contents:"",
        congif:{
            responseMimeType : "application/json",
            responseJsonSchema : zodToJsonSchema(interviewReportSchema)
        }
})
}


module.exports = invokeGeminiAI

    