import { Project } from '../models/project.model.js';
import { User } from '../models/user.model.js';

export const createProject = async (req, res) => {
    try {
        const userId = req.user.id;
        const name = req.body.projectName;

        const user = await User.findOne({ _id: userId });
        console 
        if (user.projectCount >= 4) {
            return res
                .status(409)
                .json({ message: 'Exceeded the project limit.' });
        }

        const project = await Project.create({
            userId,
            name,
        });

        if (!project) {
            return res
                .status(500)
                .json({ message: 'something went wrong, try again.' });
        }

        await User.updateOne({ _id: userId }, { $inc: { projectCount: 1 } });

        res.status(200).json({ message: 'project created successfully.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllProjects = async (req, res) => {
    try {
        const id = req.user.id;
        const projects = await Project.find({userId: id});

        if (!projects) {
            return res
                .status(500)
                .json({ message: 'something went wrong, try again.' });
        }

        res.status(200).json(projects);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAllTasks = async (req, res) => {
    try{
        const id = req.params.id;

        const projectDetails = await Project.findOne({_id: id}).populate("tasks");
        if(!projectDetails){
            return res
            .status(500)
            .json({ message: 'Something went wrong, try again.' });
        }

        res.status(200).json(projectDetails);
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
}

export const deleteProject = async (req, res) => {
    try {
        const userId = req.user.id;
        const id = req.params.id;
        const deletedProject = await Project.deleteOne({_id: id});

        if (!deletedProject) {
            return res
                .status(500)
                .json({ message: 'Something went wrong, try again.' });
        }
    
        await User.updateOne({ _id: userId }, { $inc: { projectCount: -1 } });
        res.status(200).json({ message: 'project deleted successfully.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
