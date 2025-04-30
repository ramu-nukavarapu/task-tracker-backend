import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './configs/db.config.js';
import { userRouter } from './routes/user.route.js';
import { projectRouter } from './routes/project.route.js';
import { taskRouter } from './routes/task.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use("/project", projectRouter);
app.use("/task", taskRouter)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is Working...' });
});

app.listen(PORT, () =>
    console.log(`app listening from http://localhost:${PORT}`)
);
