import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./db";
import { Contact } from "./models/Contact";
import { Spotify } from "./models/Spotify";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/spotify", async (req: Request, res: Response) => {
  try {
    const response = await Spotify.findOne();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Error while getting spotify information",
    });
  }
});

app.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({
        success: false,
        error: "Email and message are required",
      });
    }

    const response = await Contact.create({
      email,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: response,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      success: false,
      error: "Error while sending contact information",
    });
  }
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(8000, () => {
      console.log("App is running on port 8000");
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

startServer();
