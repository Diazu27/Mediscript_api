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
    SpecificHour?:string|null;
    AdministrationRoute?:string|null;
    DayTimeSection?:number|null;
    isContinue?:number|null,
}


export interface PrescriptionDetailDBI extends Model<PrescriptionDetailI>, PrescriptionDetailI {}

