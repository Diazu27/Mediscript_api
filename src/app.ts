import express, { Request, Response } from 'express';
import DB from './db/connection';
import cors from 'cors';

import DoctorRoutes from './routes/doctor.routes';
import AuthRoutes from './routes/auth.routes';
import { ValidateJWT } from './middlewares/ValidateJWT';
import MedicationRoutes from './routes/medication.routes';
import PatientRoutes from './routes/patient.routes';
import PrescriptionRoutes from './routes/prescription.routes';
import PrescriptionPatientRoutes from './routes/prescriptionPatient.routes';
import PrescriptionDoctorRoutes from './routes/prescriptiondoctor.routes';

export class App  {
  private app: express.Application;

  constructor() {
    this.app = express();
    
    this.DBConnection();
    this.config();
    this.routes();
  }

  private config():void{
    this.app.use(express.json());
    this.app.use(cors())
  }

  private routes():void{
    this.app.use('/api/medication',ValidateJWT, MedicationRoutes);
    this.app.use('/api/patient',ValidateJWT, PatientRoutes);
    this.app.use('/api/doctor',ValidateJWT, DoctorRoutes);
    this.app.use('/api/prescription',ValidateJWT, PrescriptionRoutes);
    this.app.use('/api/prescriptionPatient',ValidateJWT, PrescriptionPatientRoutes);
    this.app.use('/api/prescriptionDoctor',ValidateJWT, PrescriptionDoctorRoutes);
    this.app.use('/api/auth', AuthRoutes)
  }

  private async DBConnection(){
    try {
        await DB.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
  }

  public start():void{
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => {
      console.clear();
      console.log(`Servidor en ejecución en el puerto ${port}`);
    });
  }
}