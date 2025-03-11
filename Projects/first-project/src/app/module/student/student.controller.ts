import { StudentService } from './student.service';
import { Request, Response } from 'express';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    
    
    const studentData = req.body.student;

    // calling joi validation
    const {error,value} = studentValidationSchema.validate(studentData)
    
    if(error){
      // send response
      res.status(500).json({
        success: false,
        message: 'Validation error!',
        error: error.details,
      });
    }
    // will call servic function to send this data
    const result = await StudentService.createStudentIntoDB(value);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    // will call servic function to send this data
    const result = await StudentService.getAllStudentFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: 'All Student fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    // will call servic function to send this data
    const result = await StudentService.getSingleStudentFromDB(studentId);

    // send response
    res.status(200).json({
      success: true,
      message: `Student(${studentId}) fetched successfully!`,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
