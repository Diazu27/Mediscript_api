export interface MedicationI {
    MedicationID: number;
    Name: string | null;
    RegistrationCode: string | null;
    AdministrationRoute: string | null;
    Manufacturer: string | null;
    Description: string | null;
    ImageURL: string | null;
    Contraindications: string | null;
    RegistrationDate: Date | null;
    ClinicID: number | null;
    Creator: number | null;
}