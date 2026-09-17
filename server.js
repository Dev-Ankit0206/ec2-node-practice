const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>EC2 Practice App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 80px;
            background: #f4f6f8;
          }

          .card {
            display: inline-block;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }

          h1 {
            color: #2563eb;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Hello from AWS EC2!</h1>
          <p>This application was deployed from GitHub.</p>
          <p>Server time: ${new Date().toISOString()}</p>
        </div>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Application is running"
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Application running on port ${port}`);
});
