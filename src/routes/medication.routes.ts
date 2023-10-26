import { Router } from 'express';
import { MedicationController } from '../controllers/medication.controller';

const MedicationRoutes = Router();
const Medication = new MedicationController();

MedicationRoutes.get('/', Medication.getMedications);
MedicationRoutes.get('/:id', Medication.getMedicationByID);
MedicationRoutes.post('/', Medication.saveMedication);
MedicationRoutes.put('/:id', Medication.updateMedication);
MedicationRoutes.delete('/:id', Medication.deleteMedication);

export default MedicationRoutes;
