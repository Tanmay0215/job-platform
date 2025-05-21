import mongoose from 'mongoose';

const hackathonSchema = new mongoose.Schema({
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
    },
    type: {
        type: String,
    },
    stipend: {
        type: String,
    },
    duration: {
        type: String,
    },
    applyLink: {
        type: String,
    }
});

const Hackathon = mongoose.model('Hackathon', hackathonSchema);

export default Hackathon;