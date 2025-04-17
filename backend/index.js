import express from 'express';
import cors from 'cors';
import { hackathons, jobs, internships } from './data.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/api/hackathons', (req, res) => {
    res.json(hackathons);
});

app.get('/api/jobs', (req, res) => {
    res.json(jobs);
});

app.get('/api/internships', (req, res) => {
    res.json(internships);
});

app.post('/api/add-opportunity', (req, res) => {
    const { title, description, location, date } = req.query;
    const newOpportunity = {
        id: data.length + 1,
        title,
        description,
        location,
        date,
    };
    // handle add opportunity
    res.json(newOpportunity);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
