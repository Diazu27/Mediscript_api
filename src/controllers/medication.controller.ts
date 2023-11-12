import { Request, Response } from "express";
import MedicationModel from "../models/medication.model";
import { sendResponse } from "../utils/sendResponse";
import { getDoctorID } from "../utils/getDoctorID";

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
    async getMedicationsByDoctor(req: Request, res: Response): Promise<void> {
        try {
            const DoctorID = getDoctorID(req);
            const medications = await MedicationModel.findAll({where: { DoctorID: DoctorID}});
            res.status(200).json({ status: 200, data: medications });
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async saveMedication(req: Request, res: Response): Promise<void> {
        const DoctorID = getDoctorID(req);
        try {
            const medicationData = {
                ...req.body,
                DoctorID: DoctorID
            };
            const medication = await MedicationModel.create(medicationData);
            sendResponse(medication, res, "Created successfully");
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error',error });
            console.log(error);
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
            console.log(error)
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
