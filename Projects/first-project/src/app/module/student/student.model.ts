import { Schema, model } from 'mongoose';
import {
  GuardianInfo,
  LocalGuardian,
  UserName,
  Student,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    require: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    require: true,
  },
});

const guardianSchema = new Schema<GuardianInfo>({
  fatherName: { type: String, require: true },
  fatherOccupation: { type: String, require: true },
  fatherContactNo: { type: String, require: true },
  motherName: { type: String, require: true },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, require: true },
  occupation: { type: String, require: true },
  contactNo: { type: String, require: true },
  address: { type: String, require: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, require: true },
  contanctNo: { type: String, require: true },
  emergencyContanctNo: { type: String, require: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, require: true },
  peremanentAddress: { type: String },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'inActive'],
});

export const StudentModel = model<Student>('Student', studentSchema);
