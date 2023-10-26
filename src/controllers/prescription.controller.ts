import { Request, Response } from "express";
import PrescriptionModel from "../models/prescription.model";
import { sendResponse } from "../utils/sendResponse";

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
            const prescription = await PrescriptionModel.create(req.body);
            sendResponse(prescription, res, "Created successfully");
        } catch (error) {
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
