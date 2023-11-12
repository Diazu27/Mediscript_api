import { Request, Response } from "express";
import PatientModel from "../models/patient.model";
import { sendResponse } from "../utils/sendResponse";
import { getPatientID } from "../utils/getPatientID";

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
            console.log(error);
        }
    }

    async updatePatient(req: Request, res: Response): Promise<void> {
        try {
            let PatientID = getPatientID(req);
            console.log(PatientID);
            const patient = await PatientModel.findByPk(PatientID);
            patient?.update(req.body);
            patient?.save();
            sendResponse(patient, res, "Updated successfully");
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }
    
    async updatePatientByDoctor(req: Request, res: Response): Promise<void> {
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

    async getPatientByIdentification(req: Request, res: Response): Promise<void> {
        try {
            let IdentityNumber = req.body.IdentityNumber;
            const Patient = await PatientModel.findOne({where: { IdentityNumber: IdentityNumber}});
            if(Patient){
                res.status(200).json({ status: 200, data: Patient });
            }else{
                res.status(404).json({ status: 404, message: 'No se encontró paciente' });

            }
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }
}
