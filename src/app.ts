import express, { Request, Response } from 'express';
import DB from './db/connection';
import cors from 'cors';

import DoctorRoutes from './routes/doctor.routes';
import AuthRoutes from './routes/auth.routes';

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
    this.app.use('/api/doctor', DoctorRoutes);
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