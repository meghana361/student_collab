// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// async function main(prompt) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: prompt,
//   });
//   return response.text
// }

// export default main;
import { GoogleGenerativeAI } from '@google/generative-ai'

if (!process.env.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is missing in environment variables')
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const model = genAI.getGenerativeModel({
  model: 'gemini-pro'
})

export const main = async (prompt) => {
  const result = await model.generateContent(prompt)
  return result.response.text()
}
export default main;