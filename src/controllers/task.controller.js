import { Project } from '../models/project.model.js';
import { Task } from '../models/task.model.js';

export const addTask = async (req, res) => {
    try {
        const projectId = req.params.id;
        const { title, description } = req.body;

        const task = await Task.create({
            title,
            description,
        });

        if (!task) {
            return res
                .status(500)
                .json({ message: 'Something went wrong, try again.' });
        }

        await Project.updateOne(
            { _id: projectId },
            { $push: { tasks: task._id } }
        );
        res.status(200).json({ message: 'task created successfully.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getTask = async (req, res) => {
    try {
        const id = req.params.id;

        const task = await Task.findOne({ _id: id });
        if (!task) {
            return res
                .status(500)
                .json({ message: 'Something went wrong, try again.' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const editTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findOne({ _id: id });

        const title = req.body.title || task.title;
        const description = req.body.description || task.description;
        const status = req.body.status || task.status;

        const updatedTask = await Task.updateOne(
            { _id: id },
            { title, description, status }
        );
        if (!updatedTask) {
            return res
                .status(500)
                .json({ message: 'Something went wrong, try again.' });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;

        const deletedTask = await Task.deleteOne({ _id: id });
        if (!deletedTask) {
            return res
                .status(500)
                .json({ message: 'Something went wrong, try again.' });
        }
        await Project.updateOne({ tasks: id }, { $pull: { tasks: id } });
        res.status(200).json({ message: 'task deleted successfully.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
