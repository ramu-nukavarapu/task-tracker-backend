import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    projectCount: {
        type: Number,
        required: true,
        default: 0,
        max: 4,
    },
});

export const User = mongoose.model('User', userSchema);
