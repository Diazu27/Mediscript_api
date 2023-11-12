import { Model } from "sequelize";

export interface PrescriptionDetailI {
    PrescritionDetID: number;
    PrescriptionID: number | null;
    MedicationID: number | null;
    TimeInterval: number | null;
    TimeUnit: number | null;
    TimeUnitName: string | null;
    DaysOfMedication: number | null;
    AditionalIndications: string | null;
}


export interface PrescriptionDetailDBI extends Model<PrescriptionDetailI>, PrescriptionDetailI {}

