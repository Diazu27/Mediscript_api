import { Router } from 'express';
import { PrescriptionController } from '../controllers/prescription.controller';

const PrescriptionRoutes = Router();
const Prescription = new PrescriptionController();

PrescriptionRoutes.get('/', Prescription.getPrescriptions);
PrescriptionRoutes.get('/:id', Prescription.getPrescriptionByID);
PrescriptionRoutes.post('/', Prescription.savePrescription);
PrescriptionRoutes.put('/:id', Prescription.updatePrescription);
PrescriptionRoutes.delete('/:id', Prescription.deletePrescription);

export default PrescriptionRoutes;
