import { DataTypes } from 'sequelize';
import DB from '../db/connection';

const PatientModel = DB.define('Patient', {
    PatientID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    RegistrationDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    IdentityNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Phone: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
  }, {
    tableName: 'patient',
    timestamps: false,
    underscored: true, 
  });

  export default PatientModel;