import { Schema, model } from 'mongoose';
import validator from 'validator';

import {
  TGuardianInfo,
  TLocalGuardian,
  TUserName,
  TStudent,
  StudentModel,
  // StudentMethods,
} from './student.interface';

import bcrypt from 'bcrypt';
import config from '../../config';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [20, 'Maximum Length cannot be more than 20'],

    validate: {
      validator: function (value) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} should be capitalize.',
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],

    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid. Only Character is allowed.',
    },
  },
});

const guardianSchema = new Schema<TGuardianInfo>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: [20, 'Passoword cannot be more than 20 characters long'],
    },
    name: {
      type: userNameSchema,
      required: true,
    },
    gender: {
      type: String,
      enum: {
        values: ['Male', 'Female', 'Others'],
        message:
          '{VALUE} is not supported. Only Male, Female and Others are allowed.',
      },
      required: true,
    },
    dateOfBirth: { type: String, require: true },
    email: {
      type: String,
      required: true,
      unique: true,

      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: 'Email: {VALUE} is not valid',
      },
    },
    contanctNo: { type: String, required: true },
    emergencyContanctNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: { type: String, required: true },
    peremanentAddress: { type: String },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    localGuardian: {
      type: localGuardianSchema,
      required: true,
    },
    profileImg: { type: String },
    isActive: {
      type: String,
      enum: ['active', 'inActive'],
      default: 'active',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// pre save mongoose middleware / hook
studentSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook middleware  to save data'
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

// post save mongoose middleware / hook
studentSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// Query Middleware
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('findOne', function (next) {
  this.findOne({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// Mongoose Virtual
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

// Creating custom statin method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingStudent = await Student.findOne({ id });
  return existingStudent;
};

// Creating custom instance method
// studentSchema.methods.isUserExists = async function (id: string){
//   const existingStudent = await Student.findOne({ id });
//   return existingStudent;
// }
export const Student = model<TStudent, StudentModel>('Student', studentSchema);
