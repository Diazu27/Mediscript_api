import { Router } from 'express';
import { PatientController } from '../controllers/patient.controller';

const PatientRoutes = Router();
const Patient = new PatientController();

PatientRoutes.get('/', Patient.getPatients);
PatientRoutes.get('/:id', Patient.getPatientByID);
PatientRoutes.post('/GetByIdentityNumber', Patient.getPatientByIdentification);
PatientRoutes.post('/', Patient.savePatient);
PatientRoutes.put('/:id', Patient.updatePatientByDoctor);
PatientRoutes.put('/', Patient.updatePatient);
PatientRoutes.delete('/:id', Patient.deletePatient);

export default PatientRoutes;
