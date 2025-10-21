// src/db/models/User.ts
import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../database'

export class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      field: 'name',
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      field: 'email',
    },
  },
  {
    sequelize,
    modelName: 'users',
    tableName: 'users',
    timestamps: false,
  },
)
