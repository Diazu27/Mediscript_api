import jwt, { Secret } from 'jsonwebtoken';
import { Request } from "express";

export const getDoctorID = (req:Request)=>{
    const token = req.headers['x-access-token'] as string | undefined;
    if (!token) {return 0;}
    const secret: Secret = process.env.JWT_SECRET || '';
    const decoded = jwt.verify(token, secret) as { DoctorID: number };
    const DoctorID = decoded.DoctorID;
    return DoctorID;
}