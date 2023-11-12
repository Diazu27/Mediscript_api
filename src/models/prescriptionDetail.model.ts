import { DataTypes } from 'sequelize';
import DB from '../db/connection';
import { PrescriptionDetailDBI } from '../interfaces/prescriptionDetail.interface';


const PrescriptionDetail = DB.define<PrescriptionDetailDBI>('prescritiondetail', {
    PrescritionDetID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PrescriptionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    MedicationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    TimeInterval: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    TimeUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    TimeUnitName: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    DaysOfMedication: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    AditionalIndications: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'prescritiondetail', // Asegúrate de usar el nombre de la tabla correcto
    timestamps: false,
  });
  
  export default PrescriptionDetail;