import { Sequelize, Options } from 'sequelize';
import config from './config';

const env = process.env.NODE_ENV || 'development';
// Get the configuration options for the current environment
const sequelizeOptions: Options = config[env];

// Create a new instance of Sequelize with the options
const sequelize = new Sequelize(sequelizeOptions);

// Test the connection
async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { sequelize, initializeDatabase };