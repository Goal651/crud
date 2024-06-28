const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const contactSchema = mongoose.Schema(
    {
        title: { type: String, require: true },
        firstName: { type: String, require: true },
        lastName: { type: String, require: true },
        position: { type: String, required: true },
        company: { type: String, required: true },
        businessArena: { type: String, required: true },
        employees: { type: String, required: true },
        streetNr: { type: String, require: true },
        additionalInfo: { type: String, require: true },
        zipCode: { type: String, require: true },
        place: { type: String, required: true },
        country: { type: String, required: true },
        code: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        email: { type: String, required: true },
        accept: { type: Boolean, required: true },
        createdAt: { type: Date, default: Date.now }
    },
    {
        timestamps: true
    }
);

const taskSchema = mongoose.Schema(
    {
        title: { type: String },
        details: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    },
    {
        timestamps: true
    }
)


const Contact = mongoose.model('contact', contactSchema)
const Tasks = mongoose.model('tasks', taskSchema);

module.exports = { Contact, Tasks };