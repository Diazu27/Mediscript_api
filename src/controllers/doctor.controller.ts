import { Request, Response } from "express";
import DoctorModel from "../models/doctor.model";
import { sendResponse } from "../utils/sendResponse";

export class DoctorController {

    async getDoctorByID(req: Request, res: Response): Promise<void> {
        try {
            const Doctor = await DoctorModel.findByPk(req.params.id)
            sendResponse(Doctor,res);
        } catch (error) {res.status(500).json({ status: 500, message: 'Internal Server Error' })}
    }

    async getDoctors(req: Request, res: Response): Promise<void> {
        try {
            const Doctor = await DoctorModel.findAll();
            res.status(200).json({ status:200, data:Doctor});
        } catch (error) {res.status(500).json({ status: 500, message: 'Internal Server Error' })}
    }

    async saveDoctor(req: Request, res: Response): Promise<void> {
        try {
            const Doctor = await DoctorModel.create(req.body);
            sendResponse(Doctor,res,"Created successfully");
        } catch (error) {res.status(500).json({ status: 500, message: 'Internal Server Error' })}
    }

    async updateDoctor(req: Request, res: Response): Promise<void> {
        try {
            const Doctor = await DoctorModel.findByPk(req.params.id);
            Doctor?.update(req.body);
            Doctor?.save();
            sendResponse(Doctor,res,"Updated successfully");
        } catch (error) {res.status(500).json({ status: 500, message: 'Internal Server Error' })}
    }

    async deleteDoctor(req: Request, res: Response): Promise<void> {
        try {
            const Doctor = await DoctorModel.findByPk(req.params.id);
            Doctor?.destroy();
            sendResponse(Doctor,res,"Deleted successfully");
        } catch (error) {res.status(500).json({ status: 500, message: 'Internal Server Error' })}
    }

}