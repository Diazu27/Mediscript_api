import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import DoctorModel from "../models/doctor.model";
import { DoctorI } from "../interfaces/doctor.interface";
import PatientModel from '../models/patient.model';

export const ValidateJWT = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers['x-access-token'] as string | undefined;
  
      if (!token) {
        return res.status(403).json({ message: 'No existe token' });
      }
  
      const secret: Secret = process.env.JWT_SECRET || '';
      const decoded = jwt.verify(token, secret) as { DoctorID: number };
      const decodedPatient = jwt.verify(token, secret) as { PatientID: number };

      const DoctorID = decoded.DoctorID;
      const PatientID = decodedPatient.PatientID;
      const Doctor = await DoctorModel.findByPk(DoctorID);
      const Patient = await PatientModel.findByPk(PatientID);

  
      if (!Doctor && !Patient) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      next();
    } catch (error) {
      return res.status(401).json({ message: 'No autorizado' });
    }
  };

