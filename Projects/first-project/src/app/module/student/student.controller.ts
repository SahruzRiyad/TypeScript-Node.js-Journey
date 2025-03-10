import { StudentService } from './student.service';
import { Request, Response } from 'express';

const createStudent = async (req: Request, res: Response) => {
  try {
    const studentData = req.body.student;

    // will call servic function to send this data
    const result = await StudentService.createStudentIntoDB(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
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
