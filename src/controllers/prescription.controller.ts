import { Request, Response } from "express";
import PrescriptionModel from "../models/prescription.model";
import { sendResponse } from "../utils/sendResponse";
import { PrescriptionI, PrescriptionPostI } from "../interfaces/prescription.interface";
import { getDoctorID } from "../utils/getDoctorID";
import { PrescriptionDetailI } from "../interfaces/prescriptionDetail.interface";
import PrescriptionDetail from "../models/prescriptionDetail.model";

export class PrescriptionController {

    async getPrescriptionByID(req: Request, res: Response): Promise<void> {
        try {
            const prescription = await PrescriptionModel.findByPk(req.params.id);
            sendResponse(prescription, res);
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async getPrescriptions(req: Request, res: Response): Promise<void> {
        try {
            const prescriptions = await PrescriptionModel.findAll();
            res.status(200).json({ status: 200, data: prescriptions });
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async savePrescription(req: Request, res: Response): Promise<void> {
        try {
            const PrescriptionData:PrescriptionI = req.body;
            const DoctorID = getDoctorID(req);
            PrescriptionData.DoctorID = DoctorID; 
            const prescription = await PrescriptionModel.create(PrescriptionData);

            const MedicationSelectedData:PrescriptionPostI = req.body;
            const MedicationSelected:PrescriptionDetailI[] = MedicationSelectedData.MedicationSelected;

            MedicationSelected.forEach(Medication => {
                Medication.PrescriptionID = prescription.PrescriptionID; 
            });

            const prescriptionDetail = await PrescriptionDetail.bulkCreate(MedicationSelected);            

            sendResponse(prescription, res, "Created successfully");
        } catch (error) {
            console.log(error)
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async updatePrescription(req: Request, res: Response): Promise<void> {
        try {
            const prescription = await PrescriptionModel.findByPk(req.params.id);
            prescription?.update(req.body);
            prescription?.save();
            sendResponse(prescription, res, "Updated successfully");
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async deletePrescription(req: Request, res: Response): Promise<void> {
        try {
            const prescription = await PrescriptionModel.findByPk(req.params.id);
            prescription?.destroy();
            sendResponse(prescription, res, "Deleted successfully");
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }
}
