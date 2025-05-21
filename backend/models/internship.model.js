import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    applyLink: {
        type: String,
        required: true,
    }
});

const Internship = mongoose.model('Internship', internshipSchema);

export default Internship;