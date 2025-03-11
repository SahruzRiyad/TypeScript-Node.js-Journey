import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(student); // builtin static method
  const student = new Student(studentData); // create an instance

  if(await student.isUserExists(studentData.id)){
    throw new Error('User already exist!');
  }
  const result = await student.save(); // builtin instance method

  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (studentId: string) => {
  const result = await Student.findOne({ id: studentId });
  return result;
};

export const StudentService = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
