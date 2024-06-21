import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

interface Submission {
    Name: string;
    Email: string;
    Phone: string;
    GithubLink: string;
    StopwatchTime: string;
}

let submissions: Submission[] = [];

// Endpoint to handle delete request
app.delete('/delete', (req: Request, res: Response) => {
    const index = Number(req.query.index);
    if (index >= 0 && index < submissions.length) {
        submissions.splice(index, 1);
        res.json({ success: true, message: 'Submission deleted' });
    } else {
        res.status(404).json({ error: 'Submission not found' });
    }
});


app.post('/submit', (req: Request, res: Response) => {
    const submission: Submission = req.body;
    submissions.push(submission);
    console.log('New submission received:', submission);

    res.status(201).send('Submission received');
});

app.get('/submissions', (req: Request, res: Response) => {
    res.json(submissions);
});

// Endpoint to check server status
app.get('/ping', (req: Request, res: Response) => {
    res.json({ success: true });
});

// Endpoint to retrieve submission by index
app.get('/read', (req: Request, res: Response) => {
    const index = Number(req.query.index);
    if (index >= 0 && index < submissions.length) {
        res.json(submissions[index]);
    } else {
        res.status(404).json({ error: 'Submission not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
