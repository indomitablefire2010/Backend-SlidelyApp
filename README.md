# SlidelyFormApp Backend

Backend of the SlidelyApp. This server handles submissions and provides APIs to interact with the submission data.

## Features
   Submit : Receive and store new submissions.
   Fetch : Retrieve all stored submissions.
   Delete : Remove a specific submission by its index.
   Ping : Check server status.
   Read : Retrieve a submission by its index.

## Technologies Used
   Node.js 
   Express 
   TypeScript 
   CORS  for handling cross origin requests

## API Endpoints

The server listens on  http://localhost:3000 . Here are the available endpoints:

   POST /submit : Submit a new entry.
   GET /submissions : Retrieve all submissions.
   DELETE /delete?index=<index> : Delete a submission by index.
   GET /ping : Check server status.
   GET /read?index=<index> : Retrieve a submission by index.

