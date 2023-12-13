import Model, { NonNullFindOptions } from "sequelize/types/model";

export interface DoctorI {
    DoctorID: number;
    FirstName: string | null;
    LastName: string | null;
    Email: string | null;
    DateOfBirth: Date | null;
    Password: string ;
    RegistrationDate: Date | null;
    Gender: string | null;
    IdentityNumber: string | null;
    Phone: string | null;
    MedicalSpecialty: string | null;
    MedicalLicense: string | null;
    ClinicID: number | null;
    LogoImageURL: string | null;
    SignatureImageURL: string | null;
}
  
export interface DoctorDBI extends Model<DoctorI>, DoctorI {}

  