import { StudentService } from './student.service';
import { Request, Response } from 'express';
// import studentValidationSchema from './student.validation';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const studentData = req.body.student;

    // calling schema for validation zod
    const zodParseData = studentValidationSchema.parse(studentData);

    // calling joi validation
    // const {error,value} = studentValidationSchema.validate(studentData)

    // if(error){
    //   // send response
    //   res.status(500).json({
    //     success: false,
    //     message: 'Validation error!',
    //     error: error.details,
    //   });
    // }
    // will call servic function to send this data
    const result = await StudentService.createStudentIntoDB(zodParseData);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student created successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong!',
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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong!',
      error: err,
    });
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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong!',
      error: err,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const result = StudentService.deleteStudentFromDB(studentId);

    res.send(200).json({
      success: true,
      message: `Student(${studentId} successfully deleted!! )`,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong!',
      error: err,
    });
  }
};
export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
