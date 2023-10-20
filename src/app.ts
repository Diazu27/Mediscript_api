import express, { Request, Response } from 'express';
import DB from './db/connection';

import DoctorRoutes from './routes/doctor.routes';

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
  }

  private routes():void{
    this.app.use('/api/doctors', DoctorRoutes)
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