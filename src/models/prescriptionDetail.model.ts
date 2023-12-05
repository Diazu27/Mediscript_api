import { DataTypes } from 'sequelize';
import DB from '../db/connection';
import { PrescriptionDetailDBI } from '../interfaces/prescriptionDetail.interface';
import PrescriptionModel from './prescription.model';
import MedicationModel from './medication.model';


const PrescriptionDetail = DB.define<PrescriptionDetailDBI>('prescritiondetail', {
    PrescritionDetID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PrescriptionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model:PrescriptionModel,
        key:'PrescriptionID',
      }
    },
    MedicationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model:MedicationModel,
        key:"MedicationID"
      }
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
    SpecificHour: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    AdministrationRoute: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    DayTimeSection: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isContinue: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'prescritiondetail',
    timestamps: false,
  });
  
  MedicationModel.hasMany(PrescriptionDetail, {foreignKey:'MedicationID'})
  PrescriptionDetail.belongsTo(MedicationModel, { foreignKey: 'MedicationID' });

  PrescriptionModel.hasMany(PrescriptionDetail, {foreignKey:'PrescriptionID'})
  PrescriptionDetail.belongsTo(PrescriptionModel, { foreignKey: 'PrescriptionID' });
  export default PrescriptionDetail;