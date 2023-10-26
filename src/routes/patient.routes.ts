import { Router } from 'express';
import { PatientController } from '../controllers/patient.controller';

const PatientRoutes = Router();
const Patient = new PatientController();

PatientRoutes.get('/', Patient.getPatients);
PatientRoutes.get('/:id', Patient.getPatientByID);
PatientRoutes.post('/', Patient.savePatient);
PatientRoutes.put('/:id', Patient.updatePatient);
PatientRoutes.delete('/:id', Patient.deletePatient);

export default PatientRoutes;
