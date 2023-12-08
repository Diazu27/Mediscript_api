import { Router } from 'express';
import { PrescriptionController } from '../controllers/prescription.controller';
import { MedicationController } from '../controllers/medication.controller';

const InsightsRoutes = Router();
const Prescription = new PrescriptionController();
const Medication = new MedicationController();


InsightsRoutes.get('/getPrescriptionByMonth', Prescription.getPrescriptionByMonth);
InsightsRoutes.get('/getMedicationStats', Medication.getMedicationStats);

export default InsightsRoutes;