import { Router } from 'express';
import { PrescriptionController } from '../controllers/prescription.controller';

const PrescriptionDoctorRoutes = Router();
const Prescription = new PrescriptionController();

PrescriptionDoctorRoutes.get('/', Prescription.getPrescriptionsByDoctor);


export default PrescriptionDoctorRoutes;
