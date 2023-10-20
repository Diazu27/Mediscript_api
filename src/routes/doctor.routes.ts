import { Router } from 'express';
import { DoctorController } from '../controllers/doctor.controller';

const DoctorRoutes  = Router();
const Doctor = new DoctorController();

DoctorRoutes.get('/',Doctor.getDoctors);
DoctorRoutes.get('/:id',Doctor.getDoctorByID);
DoctorRoutes.post('/',Doctor.saveDoctor);
DoctorRoutes.put('/',Doctor.updateDoctor);
DoctorRoutes.delete('/',Doctor.deleteDoctor);

export default DoctorRoutes;