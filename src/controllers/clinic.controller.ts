import { Request, Response } from "express";
import ClinicModel from "../models/clinic.model";
import { sendResponse } from "../utils/sendResponse";

export class ClinicController {

    async getClinicByID(req: Request, res: Response): Promise<void> {
        try {
            const clinic = await ClinicModel.findByPk(req.params.id);
            sendResponse(clinic, res);
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async getClinics(req: Request, res: Response): Promise<void> {
        try {
            const clinics = await ClinicModel.findAll();
            res.status(200).json({ status: 200, data: clinics });
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async saveClinic(req: Request, res: Response): Promise<void> {
        try {
            const clinic = await ClinicModel.create(req.body);
            sendResponse(clinic, res, "Created successfully");
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async updateClinic(req: Request, res: Response): Promise<void> {
        try {
            const clinic = await ClinicModel.findByPk(req.params.id);
            clinic?.update(req.body);
            clinic?.save();
            sendResponse(clinic, res, "Updated successfully");
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async deleteClinic(req: Request, res: Response): Promise<void> {
        try {
            const clinic = await ClinicModel.findByPk(req.params.id);
            clinic?.destroy();
            sendResponse(clinic, res, "Deleted successfully");
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }
}
