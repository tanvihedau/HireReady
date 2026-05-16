const {GoogleGenAI} = require("@google/genai")
const z = require("zod")
const {zodToJsonSchema} = require("zod-to-json-schema")


const ai = new GoogleGenAI({
    apiKey : process.env.GOOGLE_GENAI_API_KEY
})  
const interviewReportSchema = z.object({

matchScore:z.number().describe("a score between 0 and 100 indicating how well the candidate's profile matches the job requirements"),

    technicalQuestions : z.array(z.object({ 
        question : z.string().describe("The technical question that can be asked in the interview"),
        intention:z.string().describe("The intention of interviewer behind asking this question"),
        answer:z.string().describe("How to answer thsi question, what points to cover, what approach to take etc.")
})).describe("technical questions that can be asked in the interview along with their intention and how to answer them"),

behaviouralQuestions : z.array(z.object({
     question : z.string().describe("The technical question that can be asked in the interview"),
        intention:z.string().describe("The intention of interviewer behind asking this question"),
        answer:z.string().describe("How to answer thsi question, what points to cover, what approach to take etc.")
})).describe(" behavioral questions that can be asked in the interview along with their intention and how to answer them"),

skillGaps : z.array(z.object({
    skill : z.string().describe("The skill in which the candidate is lacking"),
    severity : z.enum(["low", "medium", "high"]).describe("The severity of the skill gap")
})).describe("List of skill gaps identified in the candidate's profile along with their severity"),


preparationPlan : z.array(z.object({
    day : z.number().describe("The day number in the preparation plan"),
    focus : z.string().describe("The focus area for that day"),
    tasks : z.array(z.string()).describe("The tasks to be completed on that day")
})).describe("The preparation plan for the candidate to improve their skills and prepare for the interview"),

title:z.string().describe("The title of the job for which the interview report is generated")
})

async function generateInterviewReport({resume, selfDescription, jobDescription}){

    const schema = JSON.stringify(zodToJsonSchema(interviewReportSchema), null, 2)

   const prompt = `Generate an interview report for a candidate based on the following information:
Resume: ${resume}
Self Description: ${selfDescription}
Job Description: ${jobDescription}

You MUST respond ONLY with a JSON object in EXACTLY this structure, no other fields:
{
  "matchScore": <number 0-100>,
  "technicalQuestions": [
    {
      "question": "<technical question>",
      "intention": "<why interviewer asks this>",
      "answer": "<how to answer, what points to cover>"
    }
  ],
  "behaviouralQuestions": [
    {
      "question": "<behavioural question>",
      "intention": "<why interviewer asks this>",
      "answer": "<how to answer, what points to cover>"
    }
  ],
  "skillGaps": [
    {
      "skill": "<skill name>",
      "severity": "<low | medium | high>"
    }
  ],
  "preparationPlan": [
    {
      "day": <number>,
      "focus": "<focus area>",
      "tasks": ["<task 1>", "<task 2>"]
    }
  ]
}

STRICT RULES:
- Return ONLY the JSON, no explanation, no markdown, no extra text
- Do NOT add any fields not shown above
- severity must be exactly "low", "medium", or "high"
- matchScore must be a number between 0 and 100`

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            
        }
    })

    return JSON.parse(response.text)
}



module.exports = 
    generateInterviewReport


    