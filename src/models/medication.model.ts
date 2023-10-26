import { DataTypes } from 'sequelize';
import DB from "../db/connection";

const MedicationModel = DB.define('Medication', {
    MedicationID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    RegistrationCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    AdministrationRoute: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Manufacturer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ImageURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Contraindications: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    RegistrationDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ClinicID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Creator: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'medications',
    timestamps: false,
    underscored: true, 
  });

  export default MedicationModel;