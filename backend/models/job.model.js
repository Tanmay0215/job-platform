import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    applyLink: {
        type: String,
        required: true
    }
});

const Job = mongoose.model('Job', jobSchema);

export default Job;