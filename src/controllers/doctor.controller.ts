import { Request, Response } from "express";
import DoctorModel from "../models/doctor.model";

export class DoctorController {

    async getDoctorByID(req: Request, res: Response): Promise<void> {
        const Doctor = await DoctorModel.findByPk(req.params.id);
        res.status(200).json({ status:200, data:Doctor});
    }

    async getDoctors(req: Request, res: Response): Promise<void> {
        const Doctor = await DoctorModel.findAll();
        res.status(200).json({ status:200, data:Doctor});
    }

    async saveDoctor(req: Request, res: Response): Promise<void> {
        const Doctor = await DoctorModel.create(req.body);
        res.status(200).json({ status:200, data:Doctor});
    }

    updateDoctor(req: Request, res: Response): void {
        res.status(200).json({ message: 'updatedoctors' });
    }

    deleteDoctor(req: Request, res: Response): void {
        res.status(200).json({ message: 'deletedoctors' });
    }

}