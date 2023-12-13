import { Router } from 'express';
import { AuthenticationController } from '../controllers/auth.controller';

const AuthRoutes = Router();
const Auth = new AuthenticationController();

AuthRoutes.post('/registdoctor', Auth.registerDoctor);
AuthRoutes.post('/logindoctor', Auth.LoginDoctorAuth);
AuthRoutes.post('/registerpatient', Auth.registerPatient);
AuthRoutes.post('/logindoctor', Auth.LoginDoctorAuth);
AuthRoutes.post('/loginpatient', Auth.LoginPatientAuth);
AuthRoutes.put('/updateDoctor/:id', Auth.updateDoctor);



export default AuthRoutes;
