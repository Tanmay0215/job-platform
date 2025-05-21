import Internship from '../models/internship.model.js';

const getAllInternships = async (req, res) => {
    try {
        const internships = await Internship.find();
        res.status(200).json(internships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getInternship = async (req, res) => {
    try {
        const internship = await Internship.findById(req.params.id);
        if (!internship) {
            return res.status(404).json({ message: 'Internship not found' });
        }
        res.status(200).json(internship);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createInternship = async (req, res) => {
    const { title, description, location, date, applyLink } = req.body;
    const newInternship = new Internship({
        title,
        description,
        location,
        date,
        applyLink
    });
    try {
        await newInternship.save();
        res.status(201).json(newInternship);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateInternship = async (req, res) => {
    try {
        const updatedInternship = await Internship.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedInternship) {
            return res.status(404).json({ message: 'Internship not found' });
        }
        res.status(200).json(updatedInternship);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteInternship = async (req, res) => {
    try {
        const deletedInternship = await Internship.findByIdAndDelete(req.params.id);
        if (!deletedInternship) {
            return res.status(404).json({ message: 'Internship not found' });
        }
        res.status(200).json({ message: 'Internship deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { getAllInternships, getInternship, createInternship, updateInternship, deleteInternship };