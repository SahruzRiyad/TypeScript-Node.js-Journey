export type BloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';

export type GuardianInfo = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation?: string;
  motherContactNo?: string;
};

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'Male' | 'Female' | 'Others';
  dateOfBirth: string;
  email: string;
  contanctNo: string;
  emergencyContanctNo: string;
  bloodGroup?: BloodGroup;
  presentAddress: string;
  peremanentAddress?: string;
  guardian: GuardianInfo;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'inActive';
};
