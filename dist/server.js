"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
let submissions = [];
// Endpoint to handle delete request
app.delete('/delete', (req, res) => {
    const index = Number(req.query.index);
    if (index >= 0 && index < submissions.length) {
        submissions.splice(index, 1);
        res.json({ success: true, message: 'Submission deleted' });
    }
    else {
        res.status(404).json({ error: 'Submission not found' });
    }
});
app.post('/submit', (req, res) => {
    const submission = req.body;
    submissions.push(submission);
    console.log('New submission received:', submission);
    res.status(201).send('Submission received');
});
app.get('/submissions', (req, res) => {
    res.json(submissions);
});
// Endpoint to check server status
app.get('/ping', (req, res) => {
    res.json({ success: true });
});
// Endpoint to retrieve submission by index
app.get('/read', (req, res) => {
    const index = Number(req.query.index);
    if (index >= 0 && index < submissions.length) {
        res.json(submissions[index]);
    }
    else {
        res.status(404).json({ error: 'Submission not found' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
