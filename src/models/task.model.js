import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "In Progess", "Under Review", "Completed"],
        default: "Pending",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true
    },
    completedAt: {
        type: Date
    }
});

export const Task = mongoose.model('Task', taskSchema);
