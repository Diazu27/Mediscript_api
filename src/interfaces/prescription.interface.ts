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