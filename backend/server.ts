import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./db";
import { Contact } from "./models/Contact";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.json({ error: "Email and Message are required" });
    }
    const response = await Contact.create({ email, message });

    res.json({ message: "Message Sent Successfully", data: response });
  } catch (error) {
    return res.json({ error: "Error while sending contact information" });
  }
});

app.listen(8000, async () => {
  console.log(`App is running on port 8000`);

  try {
    await connectDB();
  } catch (error) {
    console.error("Database connection failed:", error);
  }
});
