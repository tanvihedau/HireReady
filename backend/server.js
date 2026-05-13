require("dotenv").config()
const connectToDB = require("./src/config/database")
const app = require('./src/app')
const invokeGeminiAI = require("./src/services/ai.service")

connectToDB();

// invokeGeminiAI();

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})           