import { Request, Response } from "express";
import MedicationModel from "../models/medication.model";
import { sendResponse } from "../utils/sendResponse";

export class MedicationController {

    async getMedicationByID(req: Request, res: Response): Promise<void> {
        try {
            const medication = await MedicationModel.findByPk(req.params.id);
            sendResponse(medication, res);
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async getMedications(req: Request, res: Response): Promise<void> {
        try {
            const medications = await MedicationModel.findAll();
            res.status(200).json({ status: 200, data: medications });
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async saveMedication(req: Request, res: Response): Promise<void> {
        try {
            const medication = await MedicationModel.create(req.body);
            sendResponse(medication, res, "Created successfully");
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async updateMedication(req: Request, res: Response): Promise<void> {
        try {
            const medication = await MedicationModel.findByPk(req.params.id);
            medication?.update(req.body);
            medication?.save();
            sendResponse(medication, res, "Updated successfully");
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async deleteMedication(req: Request, res: Response): Promise<void> {
        try {
            const medication = await MedicationModel.findByPk(req.params.id);
            medication?.destroy();
            sendResponse(medication, res, "Deleted successfully");
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }
}
