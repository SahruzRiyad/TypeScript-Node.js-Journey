import { Model } from 'mongoose';

export type BloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';

export type TGuardianInfo = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation?: string;
  motherContactNo?: string;
};

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  gender: 'Male' | 'Female' | 'Others';
  dateOfBirth: string;
  email: string;
  contanctNo: string;
  emergencyContanctNo: string;
  bloodGroup?: BloodGroup;
  presentAddress: string;
  peremanentAddress?: string;
  guardian: TGuardianInfo;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'inActive';
};

// Creating custom instance model
// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;

// Creating custom static model
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}
