import Hackathon from '../models/hackathon.model.js';

const getAllHackathons = async (req, res) => {
    try {
        const hackathons = await Hackathon.find();
        res.status(200).json(hackathons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getHackathon = async (req, res) => {
    try {
        const hackathon = await Hackathon.findById(req.params.id);
        if (!hackathon) {
            return res.status(404).json({ message: 'Hackathon not found' });
        }
        res.status(200).json(hackathon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createHackathon = async (req, res) => {
    const { title, description, location, date, company, type, stipend, duration, applyLink } = req.body;
    const newHackathon = new Hackathon({
        title,
        description,
        location,
        date,
        company,
        type,
        stipend,
        duration,
        applyLink
    });
    try {
        await newHackathon.save();
        res.status(201).json(newHackathon);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const updateHackathon = async (req, res) => {
    try {
        const updatedHackathon = await Hackathon.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedHackathon) {
            return res.status(404).json({ message: 'Hackathon not found' });
        }
        res.status(200).json(updatedHackathon);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteHackathon = async (req, res) => {
    try {
        const deletedHackathon = await Hackathon.findByIdAndDelete(req.params.id);
        if (!deletedHackathon) {
            return res.status(404).json({ message: 'Hackathon not found' });
        }
        res.status(200).json({ message: 'Hackathon deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { getAllHackathons, getHackathon, createHackathon, updateHackathon, deleteHackathon };