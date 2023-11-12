import { Model } from "sequelize";
import { PrescriptionDetailI } from "./prescriptionDetail.interface";

export interface PrescriptionI {
    PrescriptionID: number;
    PatientID: number | null;
    DoctorID: number | null;
    ClinicID: number | null;
    IssueDate: Date | null;
    Diagnosis: string | null;
    Comments: string | null;
    ExpiryDate: Date | null;
    PrescriptionStatus: number | null;
    RegistrationDate: Date | null;
}

export interface PrescriptionPostI {
    PatientID: number | null;
    IssueDate: Date | null;
    ExpiryDate: Date | null;
    Diagnosis: string | null;
    Comments: string | null;
    MedicationSelected: PrescriptionDetailI[];
}

export interface PrescriptionDBI extends Model<PrescriptionI>, PrescriptionI {}
