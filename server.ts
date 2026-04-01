import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "88yl.yelin@gmail.com";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/contact", async (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
        console.warn("RESEND_API_KEY is not set. Email will not be sent.");
        return res.status(200).json({ 
          success: true, 
          message: "Form submitted successfully (Simulation mode: RESEND_API_KEY not set)" 
        });
      }

      const resend = new Resend(apiKey);
      const { data, error } = await resend.emails.send({
        from: "CV Yelin Shan Hang <onboarding@resend.dev>",
        to: [CONTACT_EMAIL],
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <h2>New Message from Website</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }

      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
