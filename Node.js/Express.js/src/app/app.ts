import express, { NextFunction, Request, Response } from 'express';
import { execPath } from 'process';
const app = express()
const port = 3000

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
}

app.get('/', logger, async(req: Request, res: Response, next: NextFunction) => {

  // error handling
  try{
    res.send(something)
  }catch(err){
    next(err);
    // console.log(err)
    // res.status(400).json({
    //   success: false,
    //   message: 'Failed to fetch data!!'
    // })
  }
  console.log(req.query)
  res.send('Hello Coder!')
})

// Express parser for json data
app.use(express.json())

// Express text parser
app.use(express.text())

app.post('/', logger, (req: Request, res: Response) => {
  console.log(req.body)
  // res.send("got data")
  res.send({
      message: "Data recieved sucessfully."
  })
})

// Router
const userRouter = express.Router();
const courseRouter = express.Router();


app.use('/api/v1/users',userRouter);
app.use('/api/v1/courses', courseRouter);

userRouter.post('/create-user', (req: Request, res: Response) => {
  const user = req.body
  console.log(user)

  res.json({
    success: true,
    message: "User created successfully!!",
    data: user
  })
});

courseRouter.post('/create-course', (req: Request, res: Response) => {
  const course = req.body
  console.log(course)

  res.json({
    success: true,
    message: "Course created successfully!!",
    data: course
  })

});

//all method route error handler
app.use("*",(req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route not found !!",
  })
});

//global error handler

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
    res.status(400).json({
      success: false,
      message: 'Something went wrong !!',
    })
})
export default app;