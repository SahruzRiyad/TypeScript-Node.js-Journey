import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/module/student/student.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
  res.send('Hello World!');
});

export default app;
