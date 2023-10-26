import {DataTypes } from 'sequelize';
import DB from '../db/connection';

const ClinicModel = DB.define('Clinic', {
    ClinicID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'clinic',
    timestamps: false,
    underscored: true, 
  });
  
 
  
export default ClinicModel;
