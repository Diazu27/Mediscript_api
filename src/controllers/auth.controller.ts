import { Request, Response } from "express";
import DoctorModel from "../models/doctor.model";
import { sendResponse } from "../utils/sendResponse";
import * as bcrypt  from 'bcrypt';
import { DoctorI } from "../interfaces/doctor.interface";
import jwt, { Secret } from 'jsonwebtoken';

export class AuthenticationController {
   
    async registerDoctor(req: Request, res: Response): Promise<void> {
        try {
            const { Password, ...otherData }:DoctorI = req.body;
            const hashedPassword = await bcrypt.hash(Password, 10);
            const Doctor = await DoctorModel.create({...otherData,Password:hashedPassword});
            sendResponse(Doctor,res,"Created successfully");
        } catch (error) {res.status(500).json({ status: 500, message: 'Internal Server Error' })}
    }

    async registerPatient(req: Request, res: Response): Promise<void> {
        try {
            const Doctor = await DoctorModel.create(req.body);
            sendResponse(Doctor,res,"Created successfully");
        } catch (error) {res.status(500).json({ status: 500, message: 'Internal Server Error' })}
    }


    async LoginDoctorAuth(req: Request, res: Response): Promise<void> {
        try {
            const { Email,Password }:DoctorI = req.body;
            const Doctor = await DoctorModel.findOne({where:{Email:Email}});
    
            if (Doctor && Doctor.Password !== null){
                const passwordMatch = await bcrypt.compare(Password, Doctor.Password);
                if(passwordMatch){
                    let secret:Secret = process.env.JWT_SECRET || '';
                    var Token = jwt.sign({ DoctorID: Doctor.DoctorID }, secret);
                    res.status(200).json({ Token: Token, message: 'Autenticado' });
                }
            }else{
                res.status(401).json({ status: 401, message: 'Correo o contraseña incorrectos' });
            }
        } catch (error) {res.status(500).json({ status: 500, message: 'Internal Server Error' })}
    }



}