import { DataTypes } from 'sequelize';
import DB from '../db/connection';
import { DoctorDBI } from '../interfaces/doctor.interface';

const DoctorModel =DB.define<DoctorDBI>('Doctor', {
  DoctorID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
  MedicalSpecialty: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  MedicalLicense: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ClinicID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'doctor',
  timestamps: false
});

export default DoctorModel;
