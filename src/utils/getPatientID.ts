import jwt, { Secret } from 'jsonwebtoken';
import { Request } from "express";

export const getPatientID = (req:Request)=>{
    const token = req.headers['x-access-token'] as string | undefined;
    if (!token) {return 0;}
    const secret: Secret = process.env.JWT_SECRET || '';
    const decoded = jwt.verify(token, secret) as { PatientID: number };
    const PatientID = decoded.PatientID;
    return PatientID;
}