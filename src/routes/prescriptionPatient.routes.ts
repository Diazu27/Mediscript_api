import { Router } from 'express';
import { PrescriptionController } from '../controllers/prescription.controller';

const PrescriptionPatientRoutes = Router();
const Prescription = new PrescriptionController();

PrescriptionPatientRoutes.get('/', Prescription.getPrescriptionsByPatient);


export default PrescriptionPatientRoutes;
