import { Router } from 'express';
import { AuthenticationController } from '../controllers/auth.controller';

const AuthRoutes = Router();
const Auth = new AuthenticationController();

AuthRoutes.post('/registdoctor', Auth.registerDoctor);
AuthRoutes.post('/logindoctor', Auth.LoginDoctorAuth);



export default AuthRoutes;
