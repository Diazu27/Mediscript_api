import { Model } from "sequelize";

export interface PatientI{
    PatientID: number;
    FirstName: string | null;
    LastName: string | null;
    Email: string | null;
    DateOfBirth: Date | null;
    Password: string ;
    RegistrationDate: Date | null;
    Gender: string | null;
    IdentityNumber: string | null;
    Phone: string | null;
}

export interface PatientDBI extends Model<PatientI>, PatientI {}
