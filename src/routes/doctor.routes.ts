import { Router } from 'express';
import { DoctorController } from '../controllers/doctor.controller';

const DoctorRoutes  = Router();
const Doctor = new DoctorController();

DoctorRoutes.get('/',Doctor.getDoctors);
DoctorRoutes.get('/:id',Doctor.getDoctorByID);
DoctorRoutes.post('/',Doctor.saveDoctor);
DoctorRoutes.put('/:id',Doctor.updateDoctor);
DoctorRoutes.delete('/:id',Doctor.deleteDoctor);

export default DoctorRoutes;