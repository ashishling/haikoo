import { Handler } from "@netlify/functions"

export const handler: Handler = async (event) => {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing form data" })
    }
  }

  const data = JSON.parse(event.body)
  
  // Option 1: Forward to your email
  // You could use services like SendGrid, Amazon SES, or Mailgun
  
  // Option 2: Store in a database
  // You could use services like Supabase, Firebase, or Airtable
  
  console.log("Form submission:", data)
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success" })
  }
} 