import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z.string()
    .trim()
    .max(20, 'Maximum Length cannot be more than 20')
    .regex(/^[A-Z][a-z]*$/, 'First name should start with a capital letter.')
    .nonempty('First name is required'),
  middleName: z.string().optional(),
  lastName: z.string()
    .regex(/^[A-Za-z]+$/, 'Only characters are allowed in the last name.')
    .nonempty('Last name is required'),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty(),
  fatherOccupation: z.string().nonempty(),
  fatherContactNo: z.string().nonempty(),
  motherName: z.string().nonempty(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

const localGuardianValidationSchema = z.object({
  name: z.string().nonempty(),
  occupation: z.string().nonempty(),
  contactNo: z.string().nonempty(),
  address: z.string().nonempty(),
});

const studentValidationSchema = z.object({
  id: z.string().nonempty(),
  password: z.string().nonempty().max(20,{ message: 'Cannot be more than 20 characters'}),
  name: userNameValidationSchema,
  gender: z.enum(['Male', 'Female', 'Others'], {
    errorMap: () => ({ message: 'Only Male, Female, and Others are allowed.' })
  }),
  dateOfBirth: z.string().nonempty(),
  email: z.string().email('Invalid email format.').nonempty('Email is required'),
  contanctNo: z.string().nonempty(),
  emergencyContanctNo: z.string().nonempty(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
  presentAddress: z.string().nonempty(),
  peremanentAddress: z.string().optional(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'inActive']).default('active'),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;
