import { DataTypes } from 'sequelize';
import DB from '../db/connection';
import { PrescriptionDBI } from '../interfaces/prescription.interface';
import PatientModel from './patient.model';
import DoctorModel from './doctor.model';


const PrescriptionModel = DB.define<PrescriptionDBI>('Prescription', {
    PrescriptionID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PatientID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model:PatientModel,
        key:'PatientID'
      }
    },
    DoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model:DoctorModel,
        key:'DoctorID'
      }
    },
    ClinicID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    IssueDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Diagnosis: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Comments: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    PrescriptionStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    RegistrationDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'prescription',
    timestamps: false,
  });

  PatientModel.hasMany(PrescriptionModel, { foreignKey: 'PatientID' });
  DoctorModel.hasMany(PrescriptionModel, {foreignKey:'DoctorID'})
  PrescriptionModel.belongsTo(DoctorModel, { foreignKey: 'DoctorID' });
  PrescriptionModel.belongsTo(PatientModel, { foreignKey: 'PatientID' });

  export default PrescriptionModel;