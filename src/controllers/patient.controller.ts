import { Request, Response } from "express";
import PatientModel from "../models/patient.model";
import { sendResponse } from "../utils/sendResponse";

export class PatientController {

    async getPatientByID(req: Request, res: Response): Promise<void> {
        try {
            const patient = await PatientModel.findByPk(req.params.id);
            sendResponse(patient, res);
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async getPatients(req: Request, res: Response): Promise<void> {
        try {
            const patients = await PatientModel.findAll();
            res.status(200).json({ status: 200, data: patients });
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async savePatient(req: Request, res: Response): Promise<void> {
        try {
            const patient = await PatientModel.create(req.body);
            sendResponse(patient, res, "Created successfully");
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async updatePatient(req: Request, res: Response): Promise<void> {
        try {
            const patient = await PatientModel.findByPk(req.params.id);
            patient?.update(req.body);
            patient?.save();
            sendResponse(patient, res, "Updated successfully");
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async deletePatient(req: Request, res: Response): Promise<void> {
        try {
            const patient = await PatientModel.findByPk(req.params.id);
            patient?.destroy();
            sendResponse(patient, res, "Deleted successfully");
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }
}
