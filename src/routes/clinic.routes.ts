import { Router } from 'express';
import { ClinicController } from '../controllers/clinic.controller';

const ClinicRoutes = Router();
const Clinic = new ClinicController();

ClinicRoutes.get('/', Clinic.getClinics);
ClinicRoutes.get('/:id', Clinic.getClinicByID);
ClinicRoutes.post('/', Clinic.saveClinic);
ClinicRoutes.put('/:id', Clinic.updateClinic);
ClinicRoutes.delete('/:id', Clinic.deleteClinic);

export default ClinicRoutes;
