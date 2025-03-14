import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/module/product/product.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);

app.get('/', (req: Request, res: Response) => {
    res.json('Welcome to Homepage!');
});

export default app;
