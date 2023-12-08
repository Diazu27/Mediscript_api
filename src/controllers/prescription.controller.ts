import { Request, Response } from "express";
import PrescriptionModel from "../models/prescription.model";
import { sendResponse } from "../utils/sendResponse";
import { PrescriptionI, PrescriptionPostI } from "../interfaces/prescription.interface";
import { getDoctorID } from "../utils/getDoctorID";
import { PrescriptionDetailI } from "../interfaces/prescriptionDetail.interface";
import PrescriptionDetail from "../models/prescriptionDetail.model";
import { getPatientID } from "../utils/getPatientID";
import PatientModel from "../models/patient.model";
import DoctorModel from "../models/doctor.model";
import MedicationModel from "../models/medication.model";
import DB from "../db/connection";
import { Op } from "sequelize";


export class PrescriptionController {

   

    async getPrescriptions(req: Request, res: Response): Promise<void> {
        try {
            const prescriptions = await PrescriptionModel.findAll();
            res.status(200).json({ status: 200, data: prescriptions });
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async getPrescriptionByID(req: Request, res: Response): Promise<void> {
        try {
            let PrescriptionID = req.params.id
            const prescriptions = await PrescriptionModel.findAll({
                where:{PrescriptionID:PrescriptionID},
                include: [
                    {model: PatientModel },
                    {model:DoctorModel},
                    {model:PrescriptionDetail,
                    include:[MedicationModel]}]
            });
            res.status(200).json({ status: 200, data: prescriptions });
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }

    async getPrescriptionsByDoctor(req: Request, res: Response): Promise<void> {
        try {
            let DoctorID = getDoctorID(req);
            const prescriptions = await PrescriptionModel.findAll({
                where:{DoctorID:DoctorID},
                include: [
                    {model: PatientModel },
                    {model:DoctorModel}
                ]
            });
            res.status(200).json({ status: 200, data: prescriptions });
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }


    
    async getPrescriptionsByPatient(req: Request, res: Response): Promise<void> {
        try {
            let PatientID = getPatientID(req);
            const prescriptions = await PrescriptionModel.findAll({
                where:{PatientID:PatientID},
                include: [
                    {model: PatientModel },
                    {model:DoctorModel},
                    {model:PrescriptionDetail,
                    include:[MedicationModel]}]
            });
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
            const PrescriptionID:number = parseInt(req.params.id);
            const prescription = await PrescriptionModel.findByPk(PrescriptionID);
            prescription?.update(req.body);
            prescription?.save();

            const detail:PrescriptionDetailI[] = req.body.MedicationSelected;
            await PrescriptionDetail.destroy({
                where: { PrescriptionID: PrescriptionID }
            });

            const PrescriptionDetailValues:PrescriptionDetailI[] = req.body.MedicationSelected;
            let newPrescriptionDetail = PrescriptionDetailValues.map(item => ({
                ...item,
                PrescriptionID: PrescriptionID
            }));
            await PrescriptionDetail.bulkCreate(newPrescriptionDetail);
            sendResponse(prescription, res, "Updated successfully"); 
        
        } catch (error) {
            console.log(error)
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

    async getPrescriptionByMonth(req: Request, res: Response): Promise<void> {
        try {
            const currentYear = new Date().getFullYear();
            let DoctorID = getDoctorID(req);
            const prescriptions = await PrescriptionModel.findAll({
                attributes:  [
                    [DB.fn('DATE_FORMAT', DB.col('IssueDate'), '%M'), 'LABEL'],
                    [DB.fn('COUNT', DB.col('PrescriptionID')), 'DATAVALUE'],
                  ],
                where: {
                  DoctorID: DoctorID,
                  IssueDate: {
                    [Op.between]: [`${currentYear}-01-01`, `${currentYear}-12-31`],
                  },
                },
                group: ['LABEL'],
              });

            res.status(200).json({ status: 200, data: prescriptions });
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
        
    }
}
