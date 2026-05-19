const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CloudOps Monitoring Dashboard</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #0f172a;
            color: white;
            margin: 0;
            padding: 40px;
          }

          .container {
            max-width: 1000px;
            margin: auto;
          }

          h1 {
            color: #38bdf8;
          }

          .subtitle {
            color: #cbd5e1;
          }

          .status {
            color: #22c55e;
            font-size: 20px;
            font-weight: bold;
          }

          .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 30px;
          }

          .card {
            background: #1e293b;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          }

          .card h2 {
            color: #f8fafc;
          }
        </style>
      </head>

      <body>
        <div class="container">
          <h1>CloudOps Monitoring Dashboard</h1>
          <p class="subtitle">Real-time cloud service and CI/CD pipeline monitoring system</p>
          <p class="status">CI/CD Pipeline Active</p>

          <div class="grid">
            <div class="card">
              <h2>Server Status</h2>
              <p>Running Successfully</p>
            </div>

            <div class="card">
              <h2>Build Status</h2>
              <p>Latest Build Successful</p>
            </div>

            <div class="card">
              <h2>Test Status</h2>
              <p>Unit Tests Passed</p>
            </div>

            <div class="card">
              <h2>Deployment Environment</h2>
              <p>AWS Cloud Ready</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `);
});

module.exports = app;