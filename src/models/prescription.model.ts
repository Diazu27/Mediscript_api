import { DataTypes } from 'sequelize';
import DB from '../db/connection';


const PrescriptionModel = DB.define('Prescription', {
    PrescriptionID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PatientID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    DoctorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    underscored: true, 
  });

  export default PrescriptionModel;