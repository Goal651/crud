const { Contact, Tasks } = require("../models/models")

const getUsers = async (req, res) => {
    try {
        const users = await Contact.find({})
        res.status(200).json({ users })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}


const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Contact.findById(id)
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createUser = async (req, res) => {
    const { email } = req.body;
    console.log(req.body)
    try {
        const existingUser = await Contact.findOne({ email });
        if (existingUser) return res.status(404).json({ message: "User already exists" });
        const newUser = new Contact(req.body);
        const savedUser = await newUser.save();
        if (!savedUser) return res.status(500).json({ message: "Failed to save user" });
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}






const getTask = async (req, res) => {
    try {
        const id = req.params.id;
        const budget = await Tasks.findById(id)
        if (!budget) return res.status(404).json({ message: 'Task Not Found' });
        res.status(201).json({ tasks })
    } catch (error) {
        console.error(error);
    }
}


const updateUser = async (req, res) => {
    try {
        console.log('editing')
        const { id } = req.params;
        const updatedUser = await Contact.findByIdAndUpdate(id, req.body, { new: true });
        if (updatedUser) return res.status(200).json(updatedUser);
        res.status(404).json({ error: "User not found" });
    } catch (error) {
        console.error("Error updating budget:", error);
        res.status(500).json({ error: "An error occurred while updating the budget" });
    }
};


const deleteTask = async (req, res) => {
    try {
        const id = req.body.id;
        const deleted = await Tasks.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: 'Failed to delete' });
        res.status(200).json({ message: 'success' });
    } catch (error) { }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    getTask,
    updateUser,
    deleteTask
}